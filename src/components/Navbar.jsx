import React from "react";
import Logo from "../assets/Logo.png";
import "../styles.css";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <a href="/" className="flex items-center space-x-2">
        <img src={Logo} alt="Company Logo" className="logo-img" />
      </a>

      <div className="nav-links pr-0 md:pr-[80px]">
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#about" className="nav-link">ABOUT US</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
        <a href="#careers" className="nav-link">CAREERS</a>
      </div>

      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="mobile-menu">
          <a href="#services" onClick={handleNavClick}>SERVICES</a>
          <a href="#about" onClick={handleNavClick}>ABOUT US</a>
          <a href="#contact" onClick={handleNavClick}>CONTACT US</a>
          <a href="#careers" onClick={handleNavClick}>CAREERS</a>
        </div>
      )}
    </nav>
  );
}
