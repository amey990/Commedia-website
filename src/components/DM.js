// components/DM.js
import React, { useState } from "react";
import "./DM.css";
import PTGReusable from "./PTGReusable";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.png";
import dm3 from "../assets/dm3.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const DM = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const dmCases = [
    {
      title: "OTT Delivery Network Optimization",
      img: dm1,
      sections: [
        {
          heading: "Customer situation",
          content: "LIC had 100+ offices with outdated UC tech nearing end of life.\nRequired migration to Cisco UC across all boardrooms, including Hyderabad DC.\nNeeded improved multiparty video conferencing infrastructure.",
        },
        {
          heading: "Challenges",
          content: "Tight timeframe for site surveys and implementation.\nPhysically large and complex devices requiring architectural adaptation.\nHigh-end boardroom aesthetics and quality expectations.",
        },
        {
          heading: "Action Taken",
          content: "Conducted detailed site surveys and pre-install readiness.\nDeployed Cisco ROOM70D, KITPLUS endpoints.\nInstalled Call Manager & Meeting Servers at DC.\nConfigured all features and licenses.",
        },
        {
          heading: "Results & Benefits",
          content: "Successfully completed multi-location migration.\nImproved call flow with Cisco Advanced VC.\nHigh customer satisfaction.",
        },
      ],
    },
    {
      title: "Live Stadium Broadcast Delivery",
      img: dm2,
      sections: [
        {
          heading: "Customer situation",
          content: "Service provider needed professional services to deliver live content.\nStadiums already fiber-connected, required last-mile content handling.",
        },
        {
          heading: "Challenges",
          content: "No tolerance for downtime during live events.\nRequired zero-failure, highly available system.\nSkilled manpower needed for monitoring and quality assurance.\nCoordination across Stadium, NOC, and studios.",
        },
        {
          heading: "Action Taken",
          content: "Partnered with TATA to develop stadium broadcast product.\nDelivered professional monitoring and integration services.\nEnabled connectivity between Stadium, NOC, and Studios.\nProvided support within studios.",
        },
        {
          heading: "Results & Benefits",
          content: "Smooth live broadcast delivery with zero failures.\nHigh-quality experience monitoring and deployment.\nTimely execution across all stadiums and venues.",
        },
      ],
    },
    {
      title: "Telco Streaming Upgrade",
      img: dm3,
      sections: [
        {
          heading: "Customer situation",
          content: "Leading telecom & broadcasting company in Papua New Guinea.\nWanted to offer multiscreen TV services over a private network.\nRequired a full digital media streaming setup.",
        },
        {
          heading: "Challenges",
          content: "Complex integration with existing online network infrastructure.\nNeeded cloud streaming support within strict budget limits.\nAccurately estimating and scaling for user base was critical.",
        },
        {
          heading: "Action Taken",
          content: "Detailed analysis of network and workflow requirements.\nProject management and system integration executed by Commedia.\nImplemented Harmonic VS7000 and WOWZA-based streaming platform.",
        },
        {
          heading: "Results & Benefits",
          content: "Delivered scalable and robust streaming solution.\nMaintained timeline with seamless implementation.\nEnabled multi-format streaming across devices.",
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
    <div className="dm-container">
      <h2 className="dm-heading">DIGITAL MEDIA CASE STUDIES</h2>
      <div className="dm-list">
        {dmCases.map((study, index) => (
          <div key={index} className="dm-card" onClick={() => handleOpenPopup(study)}>
            <img src={study.img} alt={study.title} className="dm-img" />
            <p className="dm-title">{study.title}</p>
          </div>
        ))}
      </div>
      {showPopup && <PTGReusable caseStudy={selectedCase} onClose={handleClosePopup} />}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default DM;
