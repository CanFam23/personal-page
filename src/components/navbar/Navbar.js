import "./Navbar.css";
import Hamburger from "../hamburger/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  // Used to keep track of when to display Hamburger menu
  const [displayHam, setDisplayHam] = useState(false);

  // Strings to display in navbar / ham menu
  const navBarStrings = ["About", "Experience","Projects", "Contact"];

  // Make nav bar items
  const navBarItems = navBarStrings.map((name,index) => {
    return (
      <li 
      key={index}
      className="nav-item">
        <hr className="nav-line" />
        <a className="nav-link" href={`#${name.toLowerCase()}`}>
          {name}
        </a>
      </li>
    );
  });

  return (
    <header id="nav-header">
      <nav id="nav-bar">
        <span id="logo">
          <a href="#about-section">NC</a>
        </span>
        <ul className="nav-list">{navBarItems}</ul>

        {!displayHam && (<button 
        onClick={() => setDisplayHam(true)}
        id="menu">
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </button>)}
        <Hamburger
          names={navBarStrings}
          display = {displayHam}
          setDisplay = {setDisplayHam}
        />
      </nav>
    </header>
  );
}

export default Navbar;
