import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section container">
      <div className="card">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="edu-item">
            <h3>{edu.degree}</h3>
            <p className="kv">{edu.school} | {edu.year}</p>
            <ul>
              {edu.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
