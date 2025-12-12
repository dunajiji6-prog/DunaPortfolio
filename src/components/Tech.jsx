import React from "react";
import "./Tech.css";

const TECHS = [
    { name: "HTML5", iconClass: "fa-brands fa-html5" },
 
  { name: "React", iconClass: "fa-brands fa-react" },
  { name: "Node.js", iconClass: "fa-brands fa-node-js" },
  { name: "Java", iconClass: "fa-brands fa-java" },
  { name: "Python", iconClass: "fa-brands fa-python" },
  
  
  { name: "Database", iconClass: "fa-solid fa-database" },
];

export default function Tech() {
  return (
    <section id="tech" className="techShow">
      <div className="techGlow" />

      <div className="techIcons" aria-label="Tech stack icons">
        {TECHS.map((t, i) => (
          <span
            key={t.name}
            className="techIcon"
            style={{ "--d": `${i * 70}ms` }}
            title={t.name}
            aria-label={t.name}
          >
            <i className={t.iconClass} aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
