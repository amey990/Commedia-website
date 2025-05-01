// components/WN.js
import React, { useState } from "react";
import "./WN.css";
import PTGReusable from "./PTGReusable";
import wn1 from "../assets/wn1.png";
import wn2 from "../assets/wn2.png";
import wn3 from "../assets/wn3.png";
import wn4 from "../assets/wn4.png";
import wn5 from "../assets/wn5.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const WN = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const wnCases = [
    {
      title: "Campus-wide Wireless Deployment",
      img: wn1,
      sections: [
        {
          heading: "Customer situation",
          content: "Aruba wireless deployment across 100 PAN-India petroleum sites.\nRequired high-security, long-term support.\n",
        },
        {
          heading: "Challenges",
          content: "Coordination across multiple fuel stations.\nSoftware/hardware integration with Radius Auth.\nProject management across locations.",
        },
        {
          heading: "Action Taken",
          content: "Aruba APs, switches, Radius setup.\nFive-year support and monitoring.\nEnd-to-end infrastructure deployment.",
        },
        {
          heading: "Results & Benefits",
          content: "Seamless rollout and integration.\nReliable WiFi for all users.",
        },
      ],
    },
    {
      title: "Cisco Meraki WiFi Project",
      img: wn2,
      sections: [
        {
          heading: "Customer situation",
          content: "Health insurer needed to migrate from traditional APs to Cisco Meraki WiFi.\n60 APs across four floors.",
        },
        {
          heading: "Challenges",
          content: "Seamless network transition.\nRadius server integration.\nEnsure roaming and throughput.",
        },
        {
          heading: "Action Taken",
          content: "POC and close customer collaboration.\nHeat map and solution design.\nFull implementation with Meraki Dashboard.",
        },
        {
          heading: "Results & Benefits",
          content: "Roaming + high-speed WiFi.\nReal-time cloud monitoring.\nSmooth connectivity across all zones.",
        },
      ],
    },
    {
      title: "Railway WiFi Execution",
      img: wn3,
      sections: [
        {
          heading: "Customer situation",
          content: "Indian Railways aimed to connect over 4791 stations to WiFi.\nTight 60-day delivery window.\nRequired quality and zonal execution.",
        },
        {
          heading: "Challenges",
          content: "High-scale deployment in 60 days.\nPermissions and multilevel coordination.\nHigh-tech integration across zones.",
        },
        {
          heading: "Action Taken",
          content: "Zonal rollout strategy with shadow teams.\nUsed mobile app for project tracking and QC.\nRound-the-clock NOC enabled faster execution.",
        },
        {
          heading: "Results & Benefits",
          content: "Target achieved with appreciation.\nHigh-quality execution across India.\nMulti-location rollout success.",
        },
      ],
    },
    {
      title: "LeEco IT Infrastructure",
      img: wn4,
      sections: [
        {
          heading: "Customer situation",
          content: "LeEco needed high-availability IT and wireless infra in Bangalore.\nMultiple media formats to integrate.\nRequired flexible, fast delivery.",
        },
        {
          heading: "Challenges",
          content: "High-performance platform requirement.\nIntegration of media types and large user base.\nStringent delivery schedules.",
        },
        {
          heading: "Action Taken",
          content: "Cisco networking + Dell server deployment.\nBuilt secure and scalable network.\nFollowed global SI/PMGT standards.",
        },
        {
          heading: "Results & Benefits",
          content: "Delivered a high-performance network.\nFast-tracked project completion.\nEnabled flexible services and expansion.",
        },
      ],
    },
    {
      title: "CeX Wireless Setup",
      img: wn5,
      sections: [
        {
          heading: "Customer situation",
          content: "CeX needed wireless infrastructure in a constrained retail environment in Mumbai.\nRequired high-density user support.\nWanted uninterrupted operations within deadlines.",
        },
        {
          heading: "Challenges",
          content: "Establish network in space-limited environment.\nIntegrate without disrupting operations.\nMeet tight project timelines.",
        },
        {
          heading: "Action Taken",
          content: "Used Ruckus-based wireless products.\nImplemented 802.11ac wireless tech.\nMaintained international cabling and SI standards.",
        },
        {
          heading: "Results & Benefits",
          content: "Reliable, high-density wireless network.\nCost-effective, scalable wireless solution.",
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
    <div className="wn-container">
      <h2 className="wn-heading">WIRELESS NETWORKING CASE STUDIES</h2>
      <div className="wn-list">
        {wnCases.map((study, index) => (
          <div key={index} className="wn-card" onClick={() => handleOpenPopup(study)}>
            <img src={study.img} alt={study.title} className="wn-img" />
            <p className="wn-title">{study.title}</p>
          </div>
        ))}
      </div>
      {showPopup && <PTGReusable caseStudy={selectedCase} onClose={handleClosePopup} />}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default WN;
