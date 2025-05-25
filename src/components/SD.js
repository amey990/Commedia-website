import React, { useState } from "react";
import "./SD.css"; // Your unique SD-WAN styling
import PTGReusable from "./PTGReusable"; // Reusable popup
import sd1 from "../assets/sd1.png";
import sd2 from "../assets/sd2.png";
import sd3 from "../assets/sd3.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const SD = () => {
  useScrollTop();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      title: "SD-WAN Deployment for Retail Chain",
      img: sd1,
        sections: [
          {
            heading: "Customer situation",
            content: "Bank needed to migrate MPLS to SDWAN across DC, DR, HO, and branches.\nRequired hardware refresh and complete overlay setup.\nTargeted high-level coordination for 510+ branches.",
          },
          {
            heading: "Challenges",
            content: "SLA timelines and datacenter readiness.\nHardware refresh in autonomous mode before SDWAN.\nMigrating branch routers remotely to controller mode.",
          },
          {
            heading: "Action Taken",
            content: "Assessed underlay design and device traffic.\nInstalled and configured SDWAN components.\nPolicy optimization, SLA management, and training programs.",
          },
          {
            heading: "Results & Benefits",
            content: "Seamless rollout for 510 branches.\nStrong coordination and NOC/Field support.\nHigh-level technology management and optimization.",
          },
        ],
      },
      {
        title: "Indian Bank SDWAN Ops",
        img: sd2,
        sections: [
          {
            heading: "Customer situation",
            content: "A major bank needed a Network Management & Monitoring Service (NMMS).\nWanted to improve operations across 1932+ branches and 3500+ links.\nRequired end-to-end WAN management and vendor coordination.",
          },
          {
            heading: "Challenges",
            content: "Complex transition from previous service provider.\nCoordination with multiple vendors.\nMaintaining consistent high uptime.",
          },
          {
            heading: "Action Taken",
            content: "Deployed on-site network team using bank-provided tools.\nSeamless transition management from old provider.\nImplemented SLAs to ensure performance.",
          },
          {
            heading: "Results & Benefits",
            content: "Improved network uptime via 24x7 monitoring.\nEnhanced operational efficiency.\nScalability for new branches and links at no extra cost.",
          },
        ],
      },
      {
        title: "Networking & Office Automation",
        img: sd3,
        sections: [
          {
            heading: "Customer situation",
            content: "Chinese conglomerate setting up offices in India.\nNeeded wired/wireless network and office automation.\nCommedia handled complete solution delivery.",
          },
          {
            heading: "Challenges",
            content: "Strict timelines and no downtime allowed.\nCost-effective with high quality standards.\nMulti-location rollout with multiple OEMs.",
          },
          {
            heading: "Action Taken",
            content: "Deployed full mesh network with high availability.\nUsed CISCO, Avaya, and Polycom systems.\nWork done during off-hours, delivered on time.",
          },
          {
            heading: "Results & Benefits",
            content: "Seamless deployment with top-class products.\nZero disruption to business operations.\nTimely project completion.",
          },
        ],
      },
    ]
    
  const handleOpenPopup = (caseStudy) => {
    setSelectedCase(caseStudy);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCase(null);
  };

  return (
    <div className="sd-container">
      <h2 className="sd-heading">SD-WAN Case Studies</h2>

      <div className="sd-list">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="sd-card"
            onClick={() => handleOpenPopup(study)}
          >
            <img
              src={study.img}
              alt={study.title}
              className="sd-img"
            />
            <p className="sd-title">{study.title}</p>
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

export default SD;
