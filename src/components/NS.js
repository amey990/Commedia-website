// components/NS.js
import React, { useState } from "react";
import "./NS.css";
import PTGReusable from "./PTGReusable";
import ns1 from "../assets/nc1.png";
import nc2 from "../assets/nc2.png";
import nc3 from "../assets/nc3.png";
import nc4 from "../assets/nc4.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const NS = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const nsCases = [
    {
      title: "Secure Network Infrastructure for PSU",
      img: ns1,
      sections: [
        {
          heading: "Customer situation",
          content: "Service provider needed managed SOC operations for a bank.\nIncluded deployment of L1-L3 and Shift Leads for PAN-India service.\n",
        },
        {
          heading: "Challenges",
          content: "SLA-based timelines and SOP adherence.\nResponse time improvement and customer handling.\nTech coordination across 25+ security platforms.",
        },
        {
          heading: "Action Taken",
          content: "Delivered managed services across 25+ technologies.\nDeployed 59+ resources across multiple levels.\n24x7 operations, NOC configuration.",
        },
        {
          heading: "Results & Benefits",
          content: "High-level coordination and smooth rollout.\nStrong tech + project management.\nEffective 24x7 operations with advanced tools.",
        },
      ],
    },
    {
      title: "LIC Collaboration Systems",
      img: nc2,
      sections: [
        {
          heading: "Customer situation",
          content: "LIC needed to upgrade over 100 boardrooms across India.\nExisting UC tech was outdated and needed migration to Cisco UC.\nIncluded full VC infrastructure including DC in Hyderabad.",
        },
        {
          heading: "Challenges",
          content: "Rapid site surveys for architectural adjustments.\nInstallation of large, complex VC devices.\nHigh-end aesthetics and quality expectations in boardrooms.",
        },
        {
          heading: "Action Taken",
          content: "Conducted site surveys and captured all requirements.\nInstalled ROOM70D and KITPLUS VC endpoints across locations.\nSet up call managers, meeting servers, and configured all licenses and features.",
        },
        {
          heading: "Results & Benefits",
          content: "Entire VC migration project completed successfully \nacross multiple locations.\nCustomer satisfied with Cisco’s advanced \nVC features and call flows.",
        },
      ],
    },
    {
      title: "Fortinet Device Migration",
      img: nc3,
      sections: [
        {
          heading: "Customer situation",
          content: "Bank migrating to FortiGate 3001F firewalls for DC and DR.\nNeeded centralized configuration and monitoring.",
        },
        {
          heading: "Challenges",
          content: "High availability firewall setup.\nCentralized management via FortiManager.\nVersion control, policy migration, and software updates.",
        },
        {
          heading: "Action Taken",
          content: "Analyzed existing security architecture thoroughly.\nDeployed hyperscale FortiGate FWs, managed via FMG/FAZ.\nMigrated and configured policies, centralized log and event monitoring.",
        },
        {
          heading: "Results & Benefits",
          content: "Highly secure FortiGate deployment.\nTemplate-based configuration and reporting.\nCustomized solution delivery per bank’s needs.",
        },
      ],
    },
    {
      title: " ISRO Shipborne Terminal",
      img: nc4,
      sections: [
        {
          heading: "Customer situation",
          content: "Mission-critical communication for ISRO’s Mars Orbiter Mission.\nTwo major stations set up in deep sea.\nNeeded long-distance data transmission (TTC).",
        },
        {
          heading: "Challenges",
          content: "Remote deep-sea locations with complex logistics.\nMission-critical TTC data transmission.\nRegulatory compliance and coordination.",
        },
        {
          heading: "Action Taken",
          content: "Partnered with ST for implementation.\nDesigned innovative and robust solutions.\nImplemented fully redundant communication paths.",
        },
        {
          heading: "Results & Benefits",
          content: "Enabled successful launch and mission tracking.\nReliable and uninterrupted data transfer.",
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
    <div className="ns-container">
      <h2 className="ns-heading">NETWORK SECURITY CASE STUDIES</h2>
      <div className="ns-list">
        {nsCases.map((study, index) => (
          <div key={index} className="ns-card" onClick={() => handleOpenPopup(study)}>
            <img src={study.img} alt={study.title} className="ns-img" />
            <p className="ns-title">{study.title}</p>
          </div>
        ))}
      </div>
      {showPopup && <PTGReusable caseStudy={selectedCase} onClose={handleClosePopup} />}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default NS;
