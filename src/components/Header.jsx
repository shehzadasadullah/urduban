import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src="/logo/urduban_logo.png"
          alt="Logo"
          loading="lazy"
        />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Home</li>
          <li>Dictionary</li>
          <li>Thesaurus</li>
          <li>Synonyms</li>
          <li>Antonyms</li>
          <li>Quiz</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
