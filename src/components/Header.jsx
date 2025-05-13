import React, { useState, useEffect } from "react";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  return (
    <>
      <header className="header">
        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={() => setSidebarOpen(true)}>
          ☰
        </div>

        <div className="logo-wrapper">
          <img
            className="logo"
            src="/logo/urduban_logo.png"
            alt="Logo"
            loading="lazy"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Dictionary</li>
          <li>Thesaurus</li>
          <li>Synonyms</li>
          <li>Antonyms</li>
          <li>Quiz</li>
        </ul>
      </header>

      {/* Sidebar Drawer for Mobile */}
      <div className={`sidebar-drawer ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div style={{ marginTop: "5px" }}>
            <img
              className="logo"
              src="/logo/urduban_logo.png"
              alt="Logo"
              loading="lazy"
            />
          </div>
          <div className="close-btn" onClick={() => setSidebarOpen(false)}>
            &times;
          </div>
        </div>
        <div className="sidebar-links">
          <div>🏠 Home</div>
          <div>📚 Dictionary</div>
          <div>📖 Thesaurus</div>
          <div>🧩 Synonyms</div>
          <div>🚫 Antonyms</div>
          <div>❓ Quiz</div>
        </div>
      </div>
    </>
  );
}

export default Header;
