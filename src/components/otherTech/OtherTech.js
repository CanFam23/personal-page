import "./OtherTech.css";
import Card from "../card/card"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faR } from "@fortawesome/free-solid-svg-icons";

function OtherTech() {
  const iconSize = "2x"
  
  const tech = [
    {
      name: "HTML",
      desc: "Markup Language",
      icon: faHtml5,
      iconSize: iconSize,
      iconColor: "#e34f26",
    },
    {
      name: "CSS",
      desc: "Style Sheet Language",
      icon: faCss3Alt,
      iconSize: iconSize,
      iconColor: "#264de4",
    },
    {
      name: "JavaScript",
      desc: "Programming Language",
      icon: faJs,
      iconSize: iconSize,
      iconColor: "#f7df1e",
    },
    {
      name: "R",
      desc: "Programming Language",
      icon: faR,
      iconSize: iconSize,
      iconColor: "#276DC3",
    },
    {
      name: "SQL/MySQL",
      desc: "Query Language/ RDBMS",
      icon: faDatabase,
      iconSize: iconSize,
      iconColor: "#00758F", // MySQL blue
    },
    {
      name: "React",
      desc: "JavaScript Library",
      icon: faReact,
      iconSize: iconSize,
      iconColor: "#61DBFB",
    },
    {
      name: "Figma",
      desc: "Design Tool",
      icon: faFigma,
      iconSize: iconSize,
      iconColor: "#a259ff",
    },
    {
      name: "Git",
      desc: "Version Control",
      icon: faGitAlt,
      iconSize: iconSize,
      iconColor: "#f1502f",
    },
  ];

  const techCards = tech.map((techItem, index) => (
    <Card
      className="other-card"
      key={index}
      name={techItem.name}
      desc={techItem.desc}
      icon={techItem.icon}
      iconSize={techItem.iconSize}
      iconColor={techItem.iconColor}
    />
  ));

  return (
    <section id="other-tech">
      <h2 className="section-title">Other Technologies</h2>
      <div className="card-grid">
        {techCards}
      </div>
    </section>
  );
}

export default OtherTech;
