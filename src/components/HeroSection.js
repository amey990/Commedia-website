import React from "react";
import "./HeroSection.css";
import earthImage from "../assets/earth.jpg"; // Ensure correct path

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={earthImage} alt="Earth" className="hero-image" />
      <div className="hero-content">
        <h1>YOU THINK,<br />WE&nbsp;MAKE&nbsp;IT&nbsp;POSSIBLE</h1>
        <div className="hero-line"></div>
        <p>
          Commedia driven by passion takes pride in delivering unique products , solutions and services for enterprises,service providers,media and government customers.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
