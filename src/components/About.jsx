import React from "react";
import { siteMeta } from "../data";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="card">
        <h2>About Me</h2>
        <p className="small">
          I'm a UI/UX Designer and Full-Stack Developer from {siteMeta.location}. I design human-centered products and implement them using modern web technologies.
        </p>

        <div style={{ marginTop: 16 }}>
          <strong>What I do</strong>
          <ul style={{ marginTop: 8 }}>
            <li>Product design & prototypes</li>
            <li>Frontend development with React</li>
            <li>APIs & backend services</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
