import React, { useState } from "react";
import { scrollToId } from "../utils/scrollToId";
import { siteMeta } from "../data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToId(section);
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="logo" aria-label={`${siteMeta.name} logo`}>
          {siteMeta.name}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`site-nav ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <button onClick={() => handleNavClick("about")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>01.</span> About
          </button>
          <button onClick={() => handleNavClick("education")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>02.</span> Education
          </button>
          <button onClick={() => handleNavClick("experience")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>03.</span> Experience
          </button>
          <button onClick={() => handleNavClick("skills")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>04.</span> Skills
          </button>
          <button onClick={() => handleNavClick("projects")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>05.</span> Projects
          </button>
          <button onClick={() => handleNavClick("certificates")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>06.</span> Certificates
          </button>
          <button onClick={() => handleNavClick("contact")}>
            <span className="nav-number" style={{ color: "var(--green)" }}>07.</span> Contact
          </button>

          <a
  href="/resume.pdf"
  target="_blank"
  download="RaviKumar_Resume.pdf"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Resume
</a>
        </nav>
      </div>
    </header>
  );
}
