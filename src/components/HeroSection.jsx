import React from "react";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-inner">
        {/* Dropdown Section */}
        <div className="language-switcher">
          <div className="language-option">
            <div className="language-text">English</div>
            <img
              src="/logo/arrow_down.png"
              alt="Arrow"
              loading="lazy"
              className="language-icon-small"
            />
          </div>
          <img
            src="/logo/arrow_right.png"
            alt="Image"
            loading="lazy"
            className="language-icon-large"
          />
          <div className="language-option">
            <div className="language-text">Urdu</div>
            <img
              src="/logo/arrow_down.png"
              alt="Arrow"
              loading="lazy"
              className="language-icon-small"
            />
          </div>
        </div>
        {/* Search bar section */}
        <div className="search-wrapper">
          <div className="search-container">
            <input type="text" placeholder="Welcome" className="search-input" />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>
        {/* Ad Section */}
        <div className="ad-container">
          <img src="/images/ad1.png" alt="Image" className="ad-image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
