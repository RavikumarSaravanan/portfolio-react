import React from "react";
import { projects } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Some Things I’ve Built</h2>
      
      <div className="projects-list">
        {projects.slice(0, 3).map((p, index) => (
          <div
            key={p.id}
            className={`project-item ${index % 2 !== 0 ? "right" : ""}`}
          >
            {/* Project Image */}
            <div className="project-img">
              <img src={p.image} alt={p.title} />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <p className="project-label">Featured Project</p>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <div className="project-desc">
                <p>{p.desc}</p>
              </div>

              {/* Tech Stack */}
              <ul className="project-tech">
                {p.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button → Redirect to GitHub */}
      <div className="projects-btn-wrapper">
        <a
          href="https://github.com/RavikumarSaravanan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-btn"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
