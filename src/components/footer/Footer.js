import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer left">
        <p>©2025</p>
        <p className="sub-text">Nick Clouse</p>
      </div>
      <div className="footer right">
        <p>Social</p>
        <p className="sub-text">
          <a
            href="https://github.com/CanFam23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          /{" "}
          <a
            href="https://www.linkedin.com/in/nicholas-clouse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
