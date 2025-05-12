import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div-1">
        <div className="footer-logo">
          <img
            src="/logo/urduban_logo.png"
            alt="Logo"
            loading="lazy"
            style={{ height: "30pt" }}
          />
        </div>
        <div className="footer-copyright">
          © 2025 Copyright: Urduban <br /> All Right Reserved.
        </div>
        <div className="footer-icons-social">
          <div>
            <img
              src="/images/facebook_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "20pt", cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src="/images/instagram_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "20pt", cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src="/images/youtube_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "30pt", cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src="/images/twitter_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "20pt", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="footer-div-2">
        <div className="footer-word">Home</div>
        <div className="footer-word">Thesaurus</div>
        <div className="footer-word">Dictionary</div>
        <div className="footer-word">Antonyms</div>
        <div className="footer-word">Word Of Day</div>
        <div className="footer-word">Quiz </div>
      </div>
      <div className="footer-div-3">
        <div className="footer-word">About Us</div>
        <div className="footer-word">Privacy Policy</div>
        <div className="footer-word">Contact Us</div>
        <div className="footer-word">Download Our Mobile App:</div>
        <div className="footer-download-icons">
          <div>
            <img
              src="/images/android_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "25pt", cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src="/images/apple_icon.png"
              alt="Icon"
              loading="lazy"
              style={{ height: "30pt", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
