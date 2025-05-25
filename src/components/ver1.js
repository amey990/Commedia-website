// src/components/Ver1.js
import React, { useState } from "react";
import "./DC.css"; // Reuse or create Ver1.css for different styles
import PTGReusable from "./PTGReusable";
import v1img1 from "../assets/v1.png";
import v1img2 from "../assets/v2.png";
import v1img3 from "../assets/v3.png";
import v1img4 from "../assets/v4.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const Ver1 = () => {
  useScrollTop();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const serviceProviderCases = [
    {
      title: "Video Streaming Solution on Private Network",
      img: v1img1,
      sections: [
        {
          heading: "Customer situation",
          content: "A leading telecom and broadcaster in Papua New Guinea aimed to extend Broadcast TV to multiscreen users via their private telecom network.",
        },
        {
          heading: "Challenges",
          content: "Complex existing online network.\nVideo streaming needed to operate over the Internet Cloud.\nCost optimization due to budget constraints.",
        },
        {
          heading: "Action Taken",
          content: "Conducted an in-depth study of the network diagram, workflow, and equipment.\nProvided project management and system integration.\nIdentified and filled BOM (Bill of Materials) gaps.",
        },
        {
          heading: "Results & Benefits",
          content: "Successfully implemented streaming solution.\nComprehensive system integration executed.\nProject was delivered within a systematic timeline.\nProved expertise in video head-end systems.",
        },
      ],
    },
    {
      title: "Seamless Video NOC Management",
      img: v1img2,
      sections: [
        {
          heading: "Customer situation",
          content: "Bharti Airtel set up a Video Network Operations Center (NOC) in Noida to uplink ~30 channels to satellites, needing skilled manpower for operations.",
        },
        {
          heading: "Challenges",
          content: "Managing live video network operations.\nDay-to-day handling of teleport and head-end operations.",
        },
        {
          heading: "Action Taken",
          content: "Provided skilled engineers for teleport services (uplinking/downlinking).\nManaged playout services for regional channels and seed management for a top sports channel.\nEnsured 24/7 technical support for uninterrupted teleport functioning.",
        },
        {
          heading: "Results & Benefits",
          content: "Effective and uninterrupted NOC management.\nOperational team to support\ncomplex video broadcast requirements.",
        },
      ],
    },
    {
      title: "National Network Rollout for Enterprise Wi-Fi",
      img: v1img3,
      sections: [
        {
          heading: "Customer situation",
          content: " A major Indian telecom provider required end-to-end sales and presales support for enterprise wired and wireless connectivity solutions across India.",
        },
        {
          heading: "Challenges",
          content: "Tight rollout timelines.\nNo permissible downtime at specific locations.\nNeed for cost-effective yet quality-compliant solutions.\nCoordination with multiple OEMs and simultaneous multi-site execution.",
        },
        {
          heading: "Action Taken",
          content: "Delivered tailored sales and presales support based on customer preferences and standards.\nExecuted smooth pan-India rollout using existing network.Provided technical presales solution design.",
        },
        {
          heading: "Results & Benefits",
          content: "Deployment of high-quality,cost-effective network.\nSmooth rollout with no business interruptions.",
        },
      ],
    },
    
    {
      title: "Global Enterprise Presales Support",
      img: v1img4,
      sections: [
        {
          heading: "Customer situation",
          content: "A top Indian telecom’s global enterprise unit needed a partner to supply, install, and support broadcast, wired, and wireless solutions worldwide.",
        },
        {
          heading: "Challenges",
          content: "Required simultaneous global deployment.\nUrgent solution needs from end customers.\nHigh standards and future-proofing necessary.\nCoordination with multiple OEMs across geographies.",
        },
        {
          heading: "Action Taken",
          content: "Provided comprehensive presales support meeting international standards.Delivered full technical solution design and implementation support.\nManaged global installations efficiently, minimizing downtime.\nInstalled during off-hours to avoid disruptions.",
        },
        {
          heading: "Results & Benefits",
          content: "Reliable presales support to global teams.\nEfficient, seamless global rollout\nwith top-tier products.",
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
    <div className="dc-container">
      <h2 className="dc-heading">SERVICE PROVIDER CASE STUDIES</h2>

      <div className="dc-case-list">
        {serviceProviderCases.map((study, index) => (
          <div
            key={index}
            className="dc-card"
            onClick={() => handleOpenPopup(study)}
          >
            <img src={study.img} alt={study.title} className="dc-image" />
            <p className="dc-title">{study.title}</p>
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

export default Ver1;
