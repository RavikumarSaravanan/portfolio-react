import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  const visibleCertificates = certificates.slice(0, 3); // Show only first 3

  return (
    <section id="certificates" className="section container">
      <h2 style={{ marginBottom: 12 }}>Certificates</h2>
      <div className="project-grid">
        {visibleCertificates.map(cert => (
          <article key={cert.id} className="card project">
            <div className="thumb">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              ) : (
                <span>{cert.title}</span>
              )}
            </div>
            <h3>{cert.title}</h3>
            <p className="small">{cert.issuer} — {cert.year}</p>
            <div style={{ marginTop: 12 }}>
              <a
                className="btn btn-outline"
                href={cert.image} // or cert.link if linking to PDF/Drive
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <a
          className="btn btn-primary"
          href="https://drive.google.com/drive/folders/1LKEwxAKUJ01U87mF8eHm3nVgzw6d1O6p?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More Certificates
        </a>
      </div>
    </section>
  );
}
