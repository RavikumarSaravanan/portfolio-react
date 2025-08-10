import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="card">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="exp-item">
            <h3>{exp.role}</h3>
            <p className="kv">{exp.company} | {exp.year}</p>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
