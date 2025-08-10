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
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("about")}>About</button>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
