import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header id="nav-header">
      <nav id="nav-bar">
        <span id="logo">
          <a href="#about-section">NC</a>
        </span>
        <ul className="nav-list">
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#about-section">
              About
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          id="menu"
          icon={faBars}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
      </nav>
    </header>
  );
}

export default Navbar;
