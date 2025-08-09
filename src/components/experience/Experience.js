import "./Experience.css";

// Experience text
const experiences = [
  {
    company: "MSU - Space Science and Engineering Lab (SSEL)",
    position: "Software Engineer Intern",
    dateRange: "May 2025 – August 2025",
    bulletPoints: [
      "Improved data parsing eﬃciency by 62.5% by utilizing multiprocessing in Python.",
      "Developed a scalable data pipeline capable of handling gigabyte-scale datasets.",
      "Built a web application using Python, integrated with InfluxDB, to visualize instrument data from the International Space Station.",
      "Developed and optimized Ruby scripts to support large data transfers between satellite and a ground station, focusing on reliability and performance",
    ],
  },
  {
    company: "Iron Horse Golf Club",
    position: "Outside Services",
    dateRange: "June 2023 – August 2024 (Seasonal)",
    bulletPoints: [
      "Welcomed club members and guests, providing assistance with parking vehicles",
      "Cleaned and maintained golf clubs and golf carts, ensuring they were ready for use",
      "Organized and upheld the cleanliness of the bag room, managing inventory efficiently",
      "Assisted with tournament preparations and setting up equipment",
    ],
  },
  {
    company: "Whitefish Mountain Resort",
    position: "Lift Attendant",
    dateRange: "December 2023 – January 2024 (Seasonal)",
    bulletPoints: [
      "Assisted guests with safely boarding and exiting ski lifts, ensuring a smooth experience",
      "Conducted opening inspections and closing shutdown procedures to maintain lift safety",
      "Maintained and organized lift mazes, ramps, and signage for efficient guest flow",
      "Monitored weather conditions and adjusted lift operations accordingly",
    ],
  },
];

// Make experience entries from data above
const expComps = experiences.map((exp, index) => (
  <ExpEntry
    key={index}
    company={exp.company}
    position={exp.position}
    dateRange={exp.dateRange}
    bulletPoints={exp.bulletPoints}
  />
));

// One entry in the experience section
function ExpEntry(props) {
  const bps = props.bulletPoints;
  // List of bullet points
  const bpsLi = bps.map((bp, index) => (
    <li key={index} className="bullet-point">
      {bp}
    </li>
  ));

  return (
    <div className="job-wrapper">
      <div className="circle"></div>
      <div className="job-content">
        <h3 className="job-company">{props.company}</h3>
        <h4 className="job-position">{props.position}</h4>
        <p className="job-date">{props.dateRange}</p>
        <ul className="job-desc">{bpsLi}</ul>
      </div>
    </div>
  );
}

// Experience section
function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-body">
        <div className="vl"></div>
        <div className="job-list">{expComps}</div>
      </div>
    </section>
  );
}

export default Experience;
