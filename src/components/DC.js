// src/components/DC.js
import React, { useState } from "react";
import "./DC.css"; // Custom styling for Data Center page
import PTGReusable from "./PTGReusable";
import dc1 from "../assets/dc1.png";
import dc2 from "../assets/dc2.png";
import dc3 from "../assets/dc3.png";
import dc4 from "../assets/dc4.png";
import dc5 from "../assets/dc5.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const DC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const dataCenterCases = [
    {
      title: "Chhattisgarh Statewide Network",
      img: dc1,
      sections: [
        {
          heading: "Customer situation",
          content: "Project for digital rural connectivity in Chhattisgarh.\nStatewide IP/MPLS fiber network for 6000 locations.\nRequired high coordination and advanced infra.",
        },
        {
          heading: "Challenges",
          content: "Huge rollout with tight timelines.\nGeographic and LWE (Left-Wing Extremism) challenges.\nLargest fiber network with multiple stakeholders.",
        },
        {
          heading: "Action Taken",
          content: "Designed and validated complete IP/MPLS network.\nDeployed automation-based IP solutions.\nDelivered high-end project management and logistics.",
        },
        {
          heading: "Results & Benefits",
          content: "Future-ready network successfully implemented.\nSmooth project rollout with automation.\nStrengthened rural digital infrastructure.",
        },
      ],
    },
    {
      title: "Data Center Tech Upgrade",
      img: dc2,
      sections: [
        {
          heading: "Customer situation",
          content: "Government bank needed network upgrades.\nFocus on analytics, AAA, and firewall solutions.\nDesign and upgrade existing infra.",
        },
        {
          heading: "Challenges",
          content: "Compatibility between old servers and new switches.\nMinimize downtime and switch copper to fiber.\nStringent deadlines and tech alignment.",
        },
        {
          heading: "Action Taken",
          content: "Understood current infra and traffic flow.\nInstalled/configured Nexus, Fortigate, and more.\nRan 24x7 upgrade support with SLA management.",
        },
        {
          heading: "Results & Benefits",
          content: "Successfully upgraded DC and DR.\nMet all timelines.\nReceived appreciation from the government.",
        },
      ],
    },
    {
      title: "Banking Data Center Ops",
      img: dc3,
      sections: [
        {
          heading: "Customer situation",
          content: "Required datacenter and DR site build.\nNeeded managed services for both.\nHigh-level coordination with end-users.",
        },
        {
          heading: "Challenges",
          content: "SLA timelines, SOPs, and checklists.\nFull datacenter build with service coordination.\nCustomer relationship handling.",
        },
        {
          heading: "Action Taken",
          content: "Provided HLD, LLD, and installed/configured infra.\nDelivered 24x7 operations and SLA management.\nSetup NOC for remote support and expedited delivery.",
        },
        {
          heading: "Results & Benefits",
          content: "Smooth project coordination.\nStrong tech and operations support.\nSeamless rollout of datacenter.",
        },
        
      ],
    },
    {
      title: "Embassy WAN Deployment",
      img: dc4,
      sections: [
        {
          heading: "Customer situation",
          content: "WAN network installation for 100+ embassies.\nStrict timeline for global rollout.\nMultiple cross-technologies involved.",
        },
        {
          heading: "Challenges",
          content: "Install and commission network at 108 sites.\nUse of OEM like Cisco (ASR, Nexus).\nLong-term support and maintenance.",
        },
        {
          heading: "Action Taken",
          content: "Complete site surveys and deployments.\nManaged design and implementation globally.\nTechnical support setup for four years.",
        },
        {
          heading: "Results & Benefits",
          content: "Skilled team available globally.\nSeamless deployment with no business impact.\nTimely and successful implementation.",
        },
        
      ],
    },
    {
      title: "Chromaflo Data Center Setup",
      img: dc5,
      sections: [
        {
          heading: "Customer situation",
          content: "Needed a new datacenter and IT infrastructure.\nRequired establishment of wireless and Juniper network.\nIntegration in a constrained environment.",
        },
        {
          heading: "Challenges",
          content: "Build and support datacenter.\nWireless network setup with Juniper.\nInterrupt-free integration.",
        },
        {
          heading: "Action Taken",
          content: "Used multiple technologies and redundancy.\nImplemented multiple user profiles.\nFollowed global quality standards in SI and PMGT.",
        },
        {
          heading: "Results & Benefits",
          content: "Delivered datacenter & IT facilities.\nProvided reliable wireless and IPT network.\nEnabled provisioning of multiple services.",
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
      <h2 className="dc-heading">DATA CENTER CASE STUDIES</h2>

      <div className="dc-case-list">
        {dataCenterCases.map((study, index) => (
          <div
            key={index}
            className="dc-card"
            onClick={() => handleOpenPopup(study)}
          >
            <img
              src={study.img}
              alt={study.title}
              className="dc-image"
            />
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

export default DC;
