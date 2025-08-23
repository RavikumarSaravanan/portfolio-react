import React from "react";
import { siteMeta } from "../data";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="card">
        <h2 className="section-title">About Me</h2>

        <p className="sub-heading1" >
          I’m a <span className="highlight">UI/UX Designer</span> and{" "}
          <span className="highlight">Full-Stack Developer</span> from{" "}
          Tharangambadi, Mayiladuthurai,<span className="highlight"> Tamil Nadu</span>.{" "}
          I create human-centered digital products that combine{" "}
          design, usability, and functionality.{" "}
          With expertise in React, frontend development, and modern web technologies,{" "}
          I focus on delivering seamless experiences that bring ideas to life.
        </p>

        <div style={{ marginTop: 16 }}>
          <h3 className="sub-heading">What I do</h3>
          <ul style={{ marginTop: 8 }} className="sub-heading1">
            <li>Product design & prototyping</li>
            <li>Frontend development with React</li>
            <li>Backend APIs & database integration</li>
            <li>Responsive web applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
