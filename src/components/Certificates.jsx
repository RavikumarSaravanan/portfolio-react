// // import React from "react";
// // import { certificates } from "../data";

// // export default function Certificates() {
// //   const visibleCertificates = certificates.slice(0, 3); // Show only first 3

// //   return (
// //     <section id="certificates" className="section container">
// //       <h2 style={{ marginBottom: 12 }} className="section-title">Certificates</h2>
// //       <div className="project-grid">
// //         {visibleCertificates.map(cert => (
// //           <article key={cert.id} className="card project">
// //             <div className="thumb">
// //               {cert.image ? (
// //                 <img
// //                   src={cert.image}
// //                   alt={cert.title}
// //                   style={{
// //                     width: "100%",
// //                     height: "100%",
// //                     objectFit: "cover",
// //                     borderRadius: "8px"
// //                   }}
// //                 />
// //               ) : (
// //                 <span>{cert.title}</span>
// //               )}
// //             </div>
// //             <h3>{cert.title}</h3>
// //             <p className="small">{cert.issuer} — {cert.year}</p>
// //             <div style={{ marginTop: 12 }}>
// //               <a
// //                 className="btn btn-outline"
// //                 href={cert.image} // or cert.link if linking to PDF/Drive
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 View
// //               </a>
// //             </div>
// //           </article>
// //         ))}
// //       </div>

// //       {/* View More Button */}
// //       <div style={{ marginTop: 20, textAlign: "center" }}>
// //         <a
// //           className="btn btn-primary"
// //           href="https://drive.google.com/drive/folders/1LKEwxAKUJ01U87mF8eHm3nVgzw6d1O6p?usp=sharing"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           View More Certificates
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }
// import React from "react";
// import { certificates } from "../data";
// import { FaExternalLinkAlt } from "react-icons/fa";

// export default function Certificates() {
//   return (
//     <section id="certificates" className="section container">
//       <h2 className="section-title">Certificates & Achievements</h2>

//       <div className="certificates-list">
//         {certificates.map((c, index) => (
//           <div
//             key={c.id}
//             className={`certificate-item ${index % 2 === 0 ? "left" : "right"}`}
//           >
//             {/* Certificate Image */}
//             <div className="certificate-img">
//               <img src={c.image} alt={c.title} />
//             </div>

//             {/* Certificate Content */}
//             <div className="certificate-content">
//               <p className="certificate-label">Certificate</p>
//               <h3 className="certificate-title">{c.title}</h3>
//               <p className="certificate-org">{c.organization}</p>
//               <p className="certificate-date">{c.date}</p>
//               {c.verify && (
//                 <div className="certificate-links">
//                   <a href={c.verify} target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt /> Verify
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { certificates } from "../data";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">Certificates & Achievements</h2>

      <div className="certificates-grid">
        {certificates.slice(0, 6).map((c) => (
          <div key={c.id} className="certificate-card">
            {/* Gradient subtitle (title) */}
            <div className="certificate-subtitle">{c.title}</div>

            <div className="certificate-content">
              <p className="certificate-org">{c.organization}</p>
              <p className="certificate-date">{c.date}</p>

              {c.image && (
                <button
                  onClick={() => setSelectedCert(c)}
                  className="certificate-link"
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="certificates-btn">
        <a
          href="https://drive.google.com/drive/folders/1LKEwxAKUJ01U87mF8eHm3nVgzw6d1O6p?usp=drive_link" // replace with your link
          target="_blank"
          rel="noopener noreferrer"
          className="view-certificates-btn"
        >
          View All Certificates
        </a>
      </div>

      {/* Modal for Certificate */}
      {selectedCert && (
        <div className="certificate-modal">
          <div className="certificate-modal-content">
            <span
              className="close-modal"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </span>
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.organization}</p>
            <p>{selectedCert.date}</p>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="certificate-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
