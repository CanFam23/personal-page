import "./About.css";
import Card from "../card/card";
import headshot from "../../assets/Headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <section id="about-section">
      <div id="about-icons">
        <h2 className="section-title">About</h2>
        <button id="resume-btn" type="button">
          <FontAwesomeIcon
            icon={faDownload}
            style={{ color: "#ffffff" }}
            id="download-icon"
          />
          Download Resume
        </button>
        <a
          href="https://github.com/CanFam23"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x" // changes size
            style={{ color: "#B197FC" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/nicholas-clouse"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#74C0FC" }}
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
              <p>
                <strong>3.7 GPA</strong>
              </p>
            </header>

            <p id="about-p">
              I’m a junior student-athlete, majoring in both Computer Science
              and Data Science at Carroll College while kicking and punting on
              the football team.
            </p>
            <div>
              <p id="interested-p">Interesed in:</p>
              <p>Full-Stack Development, Machine Learning, Data Analysis</p>
            </div>
          </div>
          <div id="headshot-container">
            <img src={headshot} id="headshot" alt="Headshot of myself" />
          </div>
        </div>
        <div id="lower-about">
          <h3 id="prim-tech">Primary Technologies</h3>
          <div class="tech-cards">
            <Card
            name="Java"
            desc="Programming Language"
            icon={faJava}
            iconSize="3x"
            iconColor="#f89820"
            libraries="Spring/Spring Boot, Hibernate / JPA, JUnit, SLF4J, Gradle"
          />

          <Card
            name="Python"
            desc="Programming Language"
            icon={faPython}
            iconSize="3x"
            iconColor="#3776AB"
            libraries="NumPy, Sympy, MatPlotLib, Seaborn, SciKit-Learn, Torch, NLTK, Flask"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
