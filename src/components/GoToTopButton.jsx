import React, { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className="go-to-top-btn" onClick={scrollToTop}>
        <img
          src="/images/arrow_top.png"
          alt="Arrow"
          loading="lazy"
          style={{
            height: "8pt",
          }}
        />
      </button>
    )
  );
};

export default GoToTopButton;
