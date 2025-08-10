import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="card">
        <h2>Skills & Tools</h2>
        <div style={{ marginTop: 12 }} className="skill-list">
          {skills.map(s => (
            <div key={s.name} className="skill-pill" title={s.level}>
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
