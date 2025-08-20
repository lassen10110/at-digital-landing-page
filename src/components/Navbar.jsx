import React from "react";
import Logo from "../assets/Logo.png";   // go up one level into assets
import "../styles.css";                 // go up one level to reach styles.css

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Company Logo" className="logo-img" />
      </div>

      {/* Navigation links */}
      <div className="flex space-x-[28px] pr-[80px]">
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#about" className="nav-link">ABOUT US</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
        <a href="#careers" className="nav-link">CAREERS</a>
      </div>
    </nav>
  );
};

export default Navbar;
