import React, { useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="section container">
      <div className="card">
        <h2 className="section-title">Experience</h2>

        <div className="exp-wrapper">
          {/* Left-side Menu */}
          <ul className="exp-tabs">
            {experience.map((exp, index) => (
              <li
                key={index}
                className={`exp-tab ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {exp.company}
              </li>
            ))}
          </ul>

          {/* Right-side Content */}
          <div className="exp-content">
            <h3 className="sub-heading">
              {experience[activeIndex].role}{" "}
              <span className="highlight">@ {experience[activeIndex].company}</span>
            </h3>
            <p className="duration">{experience[activeIndex].year}</p>
            <ul>
              {experience[activeIndex].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
