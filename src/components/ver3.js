// src/components/Ver3.js
import React, { useState } from "react";
import "./ver3.css"; // Create this file or reuse existing Enterprise styles
import PTGReusable from "./PTGReusable";
import v3img1 from "../assets/ent1.png";
import v3img2 from "../assets/ent2.png";
import v3img3 from "../assets/ent3.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const Ver3 = () => {
  useScrollTop();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const enterpriseCases = [
    {
      title: "End-to-End IT Infrastructure for Chromaflo Technologies (Mumbai)",
      img: v3img1,
      sections: [
        {
          heading: "Customer Situation",
          content:
            "Chromaflo Technologies, a global supplier of colorant systems and pigment dispersions, needed a technology partner to set up, integrate, and manage their complete IT and networking infrastructure in Mumbai.",
        },
        {
          heading: "Challenges",
          content:
            "Handling multiple technologies (CISCO, Polycom, Avaya).\nCompleting setup within a tight schedule.\nEnsuring smooth and ongoing support services post-deployment.",
        },
        {
          heading: "Actions Taken",
          content:
            "Designed and implemented the complete network infrastructure.\nExecuted project management and system integration efficiently.\nDelivered round-the-clock IT and networking support.",
        },
        {
          heading: "Results & Benefits",
          content:
            "Successful and timely installation and commissioning.\nCustomer could focus on core business areas.\nIT infrastructure management handled by Commedia.",
        },
      ],
    },
    {
      title: "Wireless Network Infrastructure for CeX WeBuy (Mumbai)",
      img: v3img2,
      sections: [
        {
          heading: "Customer Situation",
          content:
            "CeX WeBuy, a global retail platform for technology and entertainment goods, required a robust and scalable wireless networking setup at their Mumbai office.",
        },
        {
          heading: "Challenges",
          content:
            "Meeting strict timelines for setup and delivery.\nImplementing high-speed wireless networking.",
        },
        {
          heading: "Actions Taken",
          content:
            "Designed and implemented network infrastructure using Ruckus Wireless technology.\nManaged the entire project lifecycle to ensure site readiness on schedule.\nDelivered a fast, cost-effective, and reliable wireless network.",
        },
        {
          heading: "Results & Benefits",
          content:
            "Seamless network setup and commissioning.\nOn-time delivery enabled smooth business operations.\nNetworking infrastructure optimized for performance.",
        },
      ],
    },
    {
      title: "Multi-Location Wi-Fi & Office Automation for LeEco (India)",
      img: v3img3,
      sections: [
        {
          heading: "Customer Situation",
          content:
            "LeEco, a major Chinese technology brand, needed a full IT solution — including wired/wireless networking and office automation — across their Indian offices in Mumbai, Bangalore, and Gurugram.",
        },
        {
          heading: "Challenges",
          content:
            "Stringent project deadlines.\nNeed for downtime-free installation at certain sites.\nMulti-site deployment involving multiple OEMs.",
        },
        {
          heading: "Actions Taken",
          content:
            "Selected high-quality products based on customer requirements.\nDeployed a full mesh, high-availability network using Cisco, Avaya, and Polycom solutions.",
        },
        {
          heading: "Results & Benefits",
          content:
            "High-performance IT infrastructure deployed.\nTimely rollout with no business impact.\nDelivered a scalable,future-ready solution.",
        },
      ],
    },
  ];

  const handleOpenPopup = (caseStudy) => {
    setSelectedCase(caseStudy);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCase(null);
  };

  return (
    <div className="ver3-container">
      <h2 className="ver3-heading">ENTERPRISE CASE STUDIES</h2>

      <div className="ver3-list">
        {enterpriseCases.map((study, index) => (
          <div
            key={index}
            className="ver3-card"
            onClick={() => handleOpenPopup(study)}
          >
            <img src={study.img} alt={study.title} className="ver3-img" />
            <p className="ver3-title">{study.title}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <PTGReusable caseStudy={selectedCase} onClose={handleClosePopup} />
      )}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default Ver3;
