import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import initMusicDemo from "../../assets/initMusicDemo.png";
import BookRecDemo from "../../assets/BookRecDemo.png";
import MazeRunnerDemo from "../../assets/MazeRunnerDemo.png";

function Project() {
  const projects = [
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

function ProjectCard(props) {
  const tech = props.techUsed;

  const techCards = tech.map((t, index) => <TechCard key={index} title={t} />);

  return (
    <div className="project-card">
      <div className="project-header">
        {props.index % 2 === 1 ? (
          <>
            <a target="_blank" rel="noopener noreferrer" href={props.gitLink}>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: "#B197FC" }}
              />
            </a>
            <h3>{props.title}</h3>
          </>
        ) : (
          <>
            <h3>{props.title}</h3>
            <a target="_blank" rel="noopener noreferrer" href={props.gitLink}>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: "#B197FC" }}
              />
            </a>
          </>
        )}
      </div>
      <div className="project-body">
        {props.index % 2 === 1 ? (
          <>
            <img
              className="project-img"
              src={props.img}
              alt={props.title + " demo image"}
            ></img>
            <p>{props.desc}</p>
          </>
        ) : (
          <>
            <p>{props.desc}</p>
            <img
              className="project-img"
              src={props.img}
              alt={props.desc + " image"}
            ></img>
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
