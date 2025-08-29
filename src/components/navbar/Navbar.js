import "./Navbar.css";
import Hamburger from "../hamburger/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from 'react';

// Keep n in between max and min (0 and 1 in this case)
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

// Item in navbar, line and text
function NavItem({ name }) {
  const [hrPct, setHrPct] = useState(0);
  const [textPct, setTextPct] = useState(0);

  useEffect(() => {
    // Get target element
    const el = document.getElementById(name.toLowerCase());
    if (!el) return;

    let ticking = false; // Used to prevent too many updates 

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const start = vh * 1;
      const end = vh * 0.2;

      let progress = 1 - (rect.top - end) / (start - end);
      progress = clamp(progress, 0, 1);

      // Two-phase sequence over range 0..2
      const seq = progress * 2;

      const hr = clamp(seq * 100, 0, 100);          // phase 1
      const text = clamp((seq - 1) * 100, 0, 100);  // phase 2

      setHrPct(hr);
      setTextPct(text);

      ticking = false;
    };

    // batch updates into the next animation frame to prevent mass updates per frame
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [name]);

  // Styles for text, laying a background image through transparent text
  const textStyle = {
    color: 'white', // fallback
    backgroundImage: `linear-gradient(to right, var(--color-nav-item-bg) ${textPct}%, white ${textPct}%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  // Styles for lines
  const hrStyle = {
    border: 'none',
    backgroundImage: `linear-gradient(to right, var(--color-nav-item-bg) ${hrPct}%, white ${hrPct}%)`,
  };

  return (
    <>
      <hr className="nav-line" style={hrStyle} />
      <a className="nav-link" href={`#${name.toLowerCase()}`} style={textStyle}>
        {name}
      </a>
    </>
  );
}


function Navbar() {
  // Used to keep track of when to display Hamburger menu
  const [displayHam, setDisplayHam] = useState(false);

  // Strings to display in navbar / ham menu
  const navBarStrings = ["About", "Experience", "Projects", "Contact"];

  // Make nav bar items
  const navBarItems = navBarStrings.map((name, index) => {
    return (
      <li key={index} className="nav-item">
        <NavItem name={name} />
      </li>
    );
  });

  return (
    <header id="nav-header">
      <nav id="nav-bar">
        <span id="logo">
          <a href="#about">NC</a>
        </span>
        <ul className="nav-list">{navBarItems}</ul>

        {!displayHam && (
          <button onClick={() => setDisplayHam(true)} id="menu">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#ffffff" }}
              aria-label="Open menu"
            />
          </button>
        )}
        <Hamburger
          names={navBarStrings}
          display={displayHam}
          setDisplay={setDisplayHam}
        />
      </nav>
    </header>
  );
}

export default Navbar;
