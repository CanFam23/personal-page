import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import initMusicDemo from "../../assets/initMusicDemo.png";
import BookRecDemo from "../../assets/BookRecDemo.png";
import MazeRunnerDemo from "../../assets/MazeRunnerDemo.png";
import ItGoesDemo from "../../assets/ItGoesDemo.png";
import ImageModal from "../imageModal/ImageModal";

// Project data
const projects = [
  {
    title: "It Goes",
    desc: "It Goes is a full-stack web app for sharing and tracking ski trips. Users can post trips, view statistics with graphs, explore interactive maps, and browse photo and video galleries. Currently in development, the app will eventually be deployed and hosted on AWS.",
    img: ItGoesDemo,
    gitLink: "https://github.com/CanFam23/it-goes",
    techUsed: [
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "JUnit",
      "HTML",
      "CSS",
      "Next.js",
      "PostgreSQL/PostGIS",
      "AWS S3",
      "Git/GitHub",
    ],
  },
  {
    title: "InitMusic",
    desc: "InitMusic is a music service that connects users to a vast library of thousands of songs, powered by the Deezer API. Main features include user data persistence, playlist management, song search via Deezer API, security questions for password recovery, and cached song queries for faster lookup.",
    img: initMusicDemo,
    gitLink: "https://github.com/CanFam23/initMusic",
    techUsed: [
      "Java",
      "JavaScript",
      "CSS",
      "Gradle",
      "JUnit",
      "MySQL",
      "HTML",
      "Spring Boot",
      "SLF4J",
    ],
  },
  {
    title: "Book Recommender",
    desc: "A book recommendation system using data processing and machine learning techniques. Features include TF-IDF vectorization, cosine similarity, sentiment analysis, logistic regression, stopword removal, and majority voting to predict book ratings.",
    img: BookRecDemo,
    gitLink: "https://github.com/CanFam23/BookRecommender",
    techUsed: ["Python", "Pandas", "Numpy", "Scikit-learn", "NLTK", "Flask"],
  },
  {
    title: "MazeRunner",
    desc: "MazeRunner is a Java-based puzzle-action game with object-oriented design, multithreading, and basic AI. It includes features like enemy logic, level progression, and file-based map generation. Developed as a team project to demonstrate software engineering in game dev.",
    img: MazeRunnerDemo,
    gitLink: "https://github.com/CanFam23/MazeRunner",
    techUsed: ["Java", "Java Swing"],
  },
];

// Project component
function Project() {
  // Make a card for each project
  const projCards = projects.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        index={index}
        title={project.title}
        desc={project.desc}
        img={project.img}
        gitLink={project.gitLink}
        techUsed={project.techUsed}
      />
    );
  });

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-cards">{projCards}</div>
    </section>
  );
}

// Project card component
function ProjectCard(props) {
  const tech = props.techUsed;

  const techCards = tech.map((t, index) => <TechCard key={index} title={t} />);

  // Alternating image sides based on index
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{props.title}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.gitLink}
          className="git-link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            style={{ color: "#B197FC" }}
          />
          Github
        </a>
      </div>
      <div className="project-body">
        {props.index % 2 === 1 ? (
          <>
            <ImageModal
              thumbnailSrc={props.img}
              alt={props.title + " demo image"}
            ></ImageModal>
            <p>{props.desc}</p>
          </>
        ) : (
          <>
            <p>{props.desc}</p>
            <ImageModal
              thumbnailSrc={props.img}
              alt={props.title + " demo image"}
            ></ImageModal>
          </>
        )}
      </div>
      <div className="project-tech">{techCards}</div>
    </div>
  );
}

function TechCard(props) {
  return <span className="tech-card">{props.title}</span>;
}

export default Project;
