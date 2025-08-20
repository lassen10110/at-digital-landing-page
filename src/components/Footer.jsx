import React from "react";
import Logo from "../assets/Logo.png"; 
import "../styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={Logo} alt="AT Digital" className="footer-logo" />
          <p className="footer-desc">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective – your
            business results.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Our Technologies</h4>
          <ul>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul>
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="/terms">Terms & Conditions</a>
      </div>
    </footer>
  );
}
