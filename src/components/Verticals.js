import React from "react";
import { Link } from "react-router-dom";
import "./Verticals.css";

// Import images
import coverImage from "../assets/verticals.jpg";
import telecomImage from "../assets/telecom.jpg";
import digitalMediaImage from "../assets/digitalmedia.jpg";
import enterpriseImage from "../assets/enterprise.jpg";
import governmentImage from "../assets/government.jpg";
import Customers from "./Customers";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const sections = [
  {
    id: "telecom",
    title: "SERVICE PROVIDER",
    content:
      "Commedia partners with leading global telecom providers, delivering network implementation, system upgrades, and managed services to meet evolving industry demands...",
    image: telecomImage,
  },
  {
    id: "digital-media",
    title: "DIGITAL MEDIA",
    content:
      "Commedia provides end-to-end broadcast solutions, including satellite/cable channel setups, teleport infrastructure, PCR/MCR studios...",
    image: digitalMediaImage,
  },
  {
    id: "enterprise",
    title: "ENTERPRISE",
    content:
      "Commedia provides cutting-edge IT and infrastructure solutions, leveraging top technologies like Dell, CISCO, AWS...",
    image: enterpriseImage,
  },
  {
    id: "government",
    title: "GOVERNMENT",
    content:
      "Commedia collaborates with key government bodies like ISRO, Prasar Bharati, and All India Radio, delivering advanced technical solutions...",
    image: governmentImage,
  },
];

const Verticals = () => {
  useScrollTop();
  return (
    <>
      {/* Cover Section OUTSIDE the main container */}
      <div className="cover">
        <img src={coverImage} alt="Verticals Cover" className="cover-image" />
        <h1 className="cover-title">VERTICALS</h1>
      </div>

     {/* Main Page Content */}
     <div className="verticals-page">
        <div className="sections-container">
          {sections.map((section) => (
            <div key={section.id} className="vertical-section">
              <img
                src={section.image}
                alt={section.title}
                className="vertical-image"
              />
              <div className="vertical-content">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                <Link to={`/verticals/${section.id}`} className="read-more">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customers Section (outside verticals-page) */}
      <div className="customers-container">
        <Customers />
        <Chatbot /> {/* Add Chatbot here */}
      </div>
    </>
  );
};

export default Verticals;