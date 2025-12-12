import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      {/* particles layer */}
      <div className="stats-particles" />

      <div className="stat-item">
        <h2>4+</h2>
        <span>Experience</span>
      </div>

      <div className="stat-item">
        <h2>5+</h2>
        <span>Projects</span>
      </div>

      <div className="stat-item">
        <h2>2+</h2>
        <span>Tech</span>
      </div>
    </section>
  );
}
