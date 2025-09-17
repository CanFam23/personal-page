import "./OtherTech.css";
import Card from "../card/card";
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faGitAlt, 
  faFigma, 
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faR } from "@fortawesome/free-solid-svg-icons";
import { cibPostgresql, cibMysql } from "@coreui/icons";


function isFontAwesomeIcon(icon) {
  return icon && typeof icon === "object" && "iconName" in icon && "prefix" in icon;
}

function OtherTech() {
  const iconSize = "2x"; // adjust as needed

  const tech = [
    // Backend / Databases first
    {
      name: "SQL",
      desc: "Query Language",
      icon: faDatabase,
      iconSize: iconSize,
      iconColor: "#00758F", // generic SQL blue
    },
    {
      name: "MySQL",
      desc: "RDMS",
      icon: cibMysql,
      iconSize: "xl",
      iconColor: "#4479A1", // MySQL blue
    },
    {
      name: "PostgreSQL",
      desc: "RDMS",
      icon: cibPostgresql,
      iconSize: "lg",
      iconColor: "#336791", // PostgreSQL blue
    },

    // Frontend / Frameworks
    {
      name: "Next.js",
      desc: "React Framework",
      icon: faReact, // use React icon
      iconSize: iconSize,
      iconColor: "#000000", // Next.js black
    },
    {
      name: "React",
      desc: "JavaScript Library",
      icon: faReact,
      iconSize: iconSize,
      iconColor: "#61DBFB",
    },
    {
      name: "JavaScript",
      desc: "Programming Language",
      icon: faJs,
      iconSize: iconSize,
      iconColor: "#f7df1e",
    },
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

    // Data / Analytics
    {
      name: "R",
      desc: "Programming Language",
      icon: faR,
      iconSize: iconSize,
      iconColor: "#276DC3",
    },

    // Tools
    {
      name: "Git",
      desc: "Version Control",
      icon: faGitAlt,
      iconSize: iconSize,
      iconColor: "#f1502f",
    },
    {
      name: "Figma",
      desc: "Design Tool",
      icon: faFigma,
      iconSize: iconSize,
      iconColor: "#a259ff",
    },
  ];

  // Make cards from tech data
  const techCards = tech.map((techItem, index) => (
    <Card
      className="other-card"
      key={index}
      name={techItem.name}
      desc={techItem.desc}
      icon={techItem.icon}
      iconSize={techItem.iconSize}
      iconColor={techItem.iconColor}
      isFA={isFontAwesomeIcon(techItem.icon)}
    />
  ));

  return (
    <section id="other-tech">
      <h2 className="section-title">Other Technologies & Tools</h2>
      <div className="card-grid">{techCards}</div>
    </section>
  );
}

export default OtherTech;
