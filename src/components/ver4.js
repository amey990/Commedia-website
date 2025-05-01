// src/components/Ver4.js
import React, { useState } from "react";
import "./ver4.css";
import PTGReusable from "./PTGReusable";
import v4img1 from "../assets/vr1.png";
import v4img2 from "../assets/vr2.png";
import v4img3 from "../assets/vr3.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const Ver4 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const governmentCases = [
    {
      title: "NOC Management Across 45 ISRO Centers (ISTRAC)",
      img: v4img1,
      sections: [
        {
          heading: "Customer Situation",
          content: "ISTRAC (a division of ISRO) required technically skilled manpower for managing Satcom operations, ensuring continuous communication and network services at 45 centers across India.",
        },
        {
          heading: "Challenges",
          content: "Handling complex and large-scale network infrastructure.\nAdhering to civil and regulatory compliance requirements.",
        },
        {
          heading: "Actions Taken",
          content: "Deployed a team of engineers to manage iDirect VSAT-based Satcom.\nMaintained video conferencing, voice, and data services.\nProvided round-the-clock troubleshooting, IOS upgrades, and network configuration support.",
        },
        {
          heading: "Results & Benefits",
          content: "Seamless NOC operation and network availability.\nEfficient, trained personnel managing critical\n ISRO communication infrastructure.",
        },
      ],
    },
    {
      title: "Satellite Network with Redundancy for Mars Mission (ISRO)",
      img: v4img2,
      sections: [
        {
          heading: "Customer Situation",
          content: "For ISRO’s Mars mission, telemetry data from\n the Pacific Ocean needed to be securely transmitted to mission control using a ship-borne terminal, requiring high-availability and redundant satellite links.",
        },
        {
          heading: "Challenges",
          content: "Designing a network with multiple redundant and diverse paths.\nComplying with regulatory frameworks and coordinating among stakeholders.",
        },
        {
          heading: "Actions Taken",
          content: "Chose and coordinated with the right partners for sourcing and implementation.\nManaged the import and logistics of key components.\nDeployed orbit antennas,RF systems, modems, and completed full integration.",
        },
        {
          heading: "Results & Benefits",
          content: "Successful mission-critical communication setup.\nFully redundant satellite and fiber path architecture.\nDelivered with Commedia’s expertise \nin satellite and RF systems.",
        },
      ],
    },
    {
      title: "Enterprise MAM Platform Integration",
      img: v4img3,
      sections: [
        {
          heading: "Customer Situation",
          content: "Doordarshan Kendra Mumbai needed a robust Media Asset Management (MAM) platform that integrated with existing Quantum storage and archival systems, automating the ingest-to-playout workflow.",
        },
        {
          heading: "Challenges",
          content: "Seamless integration with existing storage and archive libraries.\nDesigning a production MAM workflow with automated\n file ingest, transcoding, QC, and metadata tagging.",
        },
        {
          heading: "Actions Taken",
          content: "Chose the Dalet MAM platform for compatibility with existing systems.\nBuilt customized workflows and automated file movements from ingest to distribution.",
        },
        {
          heading: "Results & Benefits",
          content: "Fully integrated MAM system implemented.\nReduced downtime with enterprise-ready platform.\nFuture-proof solution enabling automated\n media handling and easy scalability.",
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
    <div className="ver4-container">
      <h2 className="ver4-heading">GOVERNMENT CASE STUDIES</h2>

      <div className="ver4-list">
        {governmentCases.map((study, index) => (
          <div
            key={index}
            className="ver4-card"
            onClick={() => handleOpenPopup(study)}
          >
            <img src={study.img} alt={study.title} className="ver4-img" />
            <p className="ver4-title">{study.title}</p>
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

export default Ver4;
