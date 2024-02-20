import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="main-page-wrapper">
      <div className="mobileHeader">
        <div className="mobile-menu-container">
          <ul className="mobile-menu-items text-center">
            <li>
              <Link to="/OurStory" className="mobile-menu-container">
                <i className="bi bi-file-person"></i>
                <span>AboutUs</span>
              </Link>
            </li>
            <li>
              <Link to="/MutualFund" className="mobile-menu-container">
                <i className="bi bi-gear"></i>
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="mobile-menu-container">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="mobile-menu-container">
                <i className="bi bi-telephone"></i>
                <span>ContactUs</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
