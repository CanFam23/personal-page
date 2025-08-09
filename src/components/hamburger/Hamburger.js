import "./Hamburger.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Hamburger(props) {
  // Make hamburger items
  const navItems = props.names.map((name, index) => {
    return (
      <li key={index} className="ham-list-item">
        <a className="nav-link" 
        href={`#${name.toLowerCase()}`} 
        onClick={() => props.setDisplay(false)}>
          {name}
        </a>
      </li>
    );
  });

  // Only return HTML if menu should be displayed
  if (!props.display) return null;

  return (
    <div className="ham-container">
      <div className="ham-off-screen"
        onClick={() => props.setDisplay(false)}
      >

      </div>
      <div className="ham-menu">
        <button id="ham-close-btn" onClick={() => props.setDisplay(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="ham-list">{navItems}</ul>
      </div>
    </div>
  );
}

export default Hamburger;
