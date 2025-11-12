import "./About.css";
import Card from "../card/card";
import headshot from "../../assets/Headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

// Function to download resume pdf when the download button is clicked
function onButtonClick() {
  const resUrl = "/Nick_Clouse_Resume.pdf";
  const link = document.createElement("a");
  link.href = resUrl;
  link.download = "Nick_Clouse_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function About() {
  return (
    <section id="about-section">
      <div id="about-icons">
        <h2 className="section-title">About</h2>
        <button
          id="resume-btn"
          type="button"
          onClick={onButtonClick}
          aria-label="Download resume"
        >
          <FontAwesomeIcon
            icon={faDownload}
            style={{ color: "#ffffff" }}
            id="download-icon"
            aria-hidden="true"
          />
          Download Resume
        </button>
        <a
          href="https://github.com/CanFam23"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="Open github profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x" // changes size
            style={{ color: "#B197FC" }}
            aria-hidden="true"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/nicholas-clouse"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
          aria-label="Open linkedin profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#74C0FC" }}
            aria-hidden="true"
          />
        </a>
      </div>
      <div id="about">
        <div id="top-about">
          <div>
            <header>
              <h1 id="name">Nick Clouse</h1>
              <address id="location">
                <span className="material-symbols-outlined">pin_drop</span>
                Helena, Montana, USA
              </address>
            </header>

            <p id="about-p">
              I’m a senior student-athlete, majoring in 
              both <strong>Computer Science</strong> and <strong>Data Science</strong> at Carroll College while kicking and punting on
              the football team and maintaining a 3.7 GPA.
            </p>
            <div>
              <p id="interested-p">Interesed in:</p>
              <p>Backend & Full-Stack Development, Machine Learning, Data Analysis</p>
            </div>
          </div>
          <div id="headshot-container">
            <img src={headshot} id="headshot" alt="Headshot of myself" />
          </div>
        </div>
        <div id="lower-about">
          <h3 id="prim-tech">Primary Technologies</h3>
          <div className="tech-cards">
            <Card
              name="Java"
              desc="Programming Language"
              icon={faJava}
              iconSize="3x"
              iconColor="#f89820"
              libraries="Spring/Spring Boot, Hibernate / JPA, JUnit, SLF4J, Gradle"
              isFA={true}
            />

            <Card
              name="Python"
              desc="Programming Language"
              icon={faPython}
              iconSize="3x"
              iconColor="#3776AB"
              libraries="NumPy, Sympy, MatPlotLib, Seaborn, SciKit-Learn, Torch, NLTK, Flask, HoloViz"
              isFA={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
