import "./Experience.css";

// Experience text
const experiences = [
  {
    company: "MSU - Space Science and Engineering Lab (SSEL)",
    position: "Software Engineer Intern (Paid)",
    dateRange: "May 2025 – August 2025",
    bulletPoints: [
      "Improved data parsing eﬃciency by 62.5% by utilizing multiprocessing in Python.",
      "Developed a scalable data pipeline to process 1–2 GB of sensor data (measurements, health, position) from an instrument aboard the International Space Station in near real time.",
      "Built a Python-based web application with InfluxDB integration to visualize pipeline data, enabling easier monitoring and analysis.",
      "Engineered and optimized Ruby scripts to ensure fast, reliable data transfers between satellite and ground systems.",
    ],
  },
  {
    company: "Iron Horse Golf Club",
    position: "Outside Services",
    dateRange: "June 2023 – August 2024 (Seasonal)",
    bulletPoints: [
      "Provided high-quality member support by assisting guests and ensuring smooth operations during arrivals and events.",
      "Maintained and prepared golf equipment (clubs, carts, balls) with attention to detail, ensuring readiness and reliability.",
      "Supported tournament logistics by setting up equipment and coordinating event preparations.",
      "Delivered excellent customer service by addressing member needs quickly and professionally."
    ],
  }
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
