import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header id="nav-header">
      <nav id="nav-bar">
        <span id="logo">
          <a href="">NC</a>
        </span>
        <ul className="nav-list">
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <hr className="nav-line" />
            <a className="nav-link" href="#">
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
