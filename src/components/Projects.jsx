import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  const initialCount = 3; // number of projects to show initially
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(initialCount); // Show less
    } else {
      setVisibleCount(projects.length); // Show all
    }
  };

  return (
    <section id="projects" className="section container">
      <h2 style={{ marginBottom: 12 }}>Selected Projects</h2>
      <div className="project-grid">
        {projects.slice(0, visibleCount).map(p => (
          <article key={p.id} className="card project" aria-labelledby={`proj-${p.id}`}>
            <div className="thumb">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              ) : (
                <span>{p.subtitle}</span>
              )}
            </div>
            <h3 id={`proj-${p.id}`}>{p.title}</h3>
            <p className="small" style={{ marginTop: 6 }}>{p.desc}</p>
            <div style={{ marginTop: 8 }} className="small kv">
              Tech: {p.tech.join(", ")}
            </div>
            <div style={{ marginTop: 12 }}>
              <a className="btn btn-outline" href={p.link}>View</a>
            </div>
          </article>
        ))}
      </div>

      {/* Toggle button */}
      {projects.length > initialCount && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn btn-primary" onClick={handleToggle}>
            {visibleCount >= projects.length ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
