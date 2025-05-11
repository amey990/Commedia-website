// Updated Home.jsx
import React from "react";
import "./Home.css";
import HeroSection from "../components/HeroSection";
import Solutions from "../components/Solutions";
import Products from "./Products";
import Stats from "./Stats";
import Achievement from "./Achievements";
import Customers from "./Customers";
import Chatbot from "../components/Chatbot"; // Import chatbot component


const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <div className="sections-wrapper">
        <Solutions />
        <Products />
      </div>
      <Stats />
      <Achievement />
      <Customers />
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default Home;
