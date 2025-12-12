import React from "react";
import "./Project.css";

const PROJECTS = [
  {
    id: 1,
    title: "AI Voice Dispatch Assistant",
    desc: "Automates inbound dispatch calls, collects driver and order details, and logs structured data into Excel for reporting and auditing.",
    image: "/bot.png",
    tags: ["Twilio", "Node.js", "STT / TTS"],
  },
  {
    id: 2,
    title: "Baby Monitoring System",
    desc: "A smart baby monitoring system that tracks activity and sound in real time, providing instant alerts to ensure child safety and parental peace of mind.",
    image: "/baby.png",
    tags: ["CAM", "PHP", "Workflow"],
  },
  {
    id: 3,
    title: "Ecommerce",
    desc: "A modern e-commerce platform for browsing products, managing carts, and completing secure online purchases.",
    image: "/eccmrce.png",
    tags: ["Excel", "Analytics", "MERN Stack"],
  },
];

export default function Project() {
  return (
    <section className="projects-section"id="projects">
      <header className="projects-header">
        <h1>Projects</h1>
        <p>Selected work showcasing automation, AI, and system design.</p>
      </header>

      <div className="projects-list">
        {PROJECTS.map((p, index) => (
          <div
            key={p.id}
            className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* IMAGE FROM PUBLIC */}
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            {/* TEXT */}
            <div className="project-content">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button className="project-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
