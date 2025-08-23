// import React from "react";
// import { education } from "../data";

// export default function Education() {
//   return (
//     <section id="education" className="section container">
//       <div className="card">
//         <h2 className="section-title">Education</h2>
//         {education.map((edu, index) => (
//           <div key={index} className="edu-item">
//             <h3>{edu.degree}</h3>
//             <p className="kv">{edu.school} | {edu.year}</p>
//             <ul>
//               {edu.description.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

const educationData = [
  {
    school: "EGS Pillay Engineering College",
    degree: "B.Tech in Information Technology",
    duration: "2023 - 2027",
    details: [
      "CGPA: 7.8/10",
      "Specialization in Software Engineering",
      "Projects in Web Development and Machine Learning",
    ],
  },
  {
    school: "HSC - State Board",
    degree: "Computer Science",
    duration: "2021 - 2023",
    details: [
      "Percentage: 85%",
      "Subjects: Computer Science, Mathematics, Physics, Chemistry",
    ],
  },
  {
    school: "SSLC - State Board",
    degree: "General Studies",
    duration: "2020 - 2021",
    details: ["Percentage: 90%", "Focus on Science and Mathematics"],
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="edu-wrapper">
        {/* Tabs (left side) */}
        <div className="edu-tabs">
          {educationData.map((edu, index) => (
            <button
              key={index}
              className={`edu-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {edu.school}
            </button>
          ))}
        </div>

        {/* Content (right side) */}
        <div className="edu-content">
          <h3>
            {educationData[activeIndex].degree}{" "}
            <span className="edu-school">@ {educationData[activeIndex].school}</span>
          </h3>
          <p className="edu-duration">{educationData[activeIndex].duration}</p>
          <ul>
            {educationData[activeIndex].details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
