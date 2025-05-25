import React, { useState } from "react";
import "./ver2.css";
import PTGReusable from "./PTGReusable";
import dm1 from "../assets/data1.png";
import dm2 from "../assets/data2.png";
import dm3 from "../assets/data3.png";
import dm4 from "../assets/data4.png";
import dm5 from "../assets/data5.png";
import dm6 from "../assets/data6.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const Ver2 = () => {
  useScrollTop();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const digitalMediaCases = [
    {
      title: "Video Head-End Setup via Satellite & Fiber",
      img: dm1,
      sections: [
        {
          heading: "Customer situation",
          content: "EMTV needed a video head-end for their SD channel on IS19, delivered via satellite and optical media across the main site and 4 remote locations.",
        },
        {
          heading: "Challenges",
          content: "Logistical hurdles in Papua New Guinea.\nTight project timelines.\nBudget constraints and fiber cable laying.\nIntegration with ABB CAS and Mux.",
        },
        {
          heading: "Action Taken",
          content: "Conducted detailed requirement analysis and built a solution using Thomson Compression.\nPlanned logistics in advance.\nInstalled RF and compression systems with precision.",
        },
        {
          heading: "Results & Benefits",
          content: "Successful network setup across multiple locations.\nFull system integration and timely execution.\nEnd-user training completed.",
        },
      ],
    },
    {
      title: "Reduced Channel OPEX through Smart Network Upgrade",
      img: dm2,
      sections: [
        {
          heading: "Customer situation",
          content: "A regional Indian channel wanted to add more channels to its uplink services, while optimizing space segment usage and reducing operational costs.",
        },
        {
          heading: "Challenges",
          content: "Cost-effective expansion without overhauling infrastructure.\nMigration to a new MCPC chain.\nBudget constraints and strict go-live timelines.",
        },
        {
          heading: "Action Taken",
          content: "Conducted full infrastructure and space segment audit.\nDevised innovative solutions using Harmonic Technology.\nImplemented scalable, flexible network upgrades.\nRecommended new technologies for future-proofing.",
        },
        {
          heading: "Results & Benefits",
          content: "Implementation within timelines for service.\nEnabled future network scalability.\nMultiple channels added with lower OPEX.",
        },
      ],
    },
    {
      title: "4.5M C Band TVRO Setup for Turnaround Services",
      img: dm3,
      sections: [
        {
          heading: "Customer situation",
          content: "Client needed a 4.5M non-motorized C Band antenna system in Singapore for turnaround services, including full site survey, installation, and integration.",
        },
        {
          heading: "Challenges",
          content: "Poor soil conditions for foundation.\nSpace constraints in the antenna farm.\nTight project schedule.",
        },
        {
          heading: "Action Taken",
          content: "Selected suitable OEMs and coordinated imports.\nManaged logistics and partner coordination efficiently",
        },
        {
          heading: "Results & Benefits",
          content: "On-time deployment for site conditions.\nRobust and simple network setup.\nFull access to Commedia’s \nRF and satellite head-end expertise.",
        },
      ],
    },
    {
      title: "Advanced Satellite Uplink with CAS Integration",
      img: dm4,
      sections: [
        {
          heading: "Customer situation",
          content: "A top TV network in the Australian continent needed to modernize its uplink and video head-end setup to support better quality and more users with CAS.",
        },
        {
          heading: "Challenges",
          content: "Needed consolidation of uplink and head-end at HQ.\nBandwidth optimization and operational cost reduction.\nMigration to advanced conditional access.\nMulti-OEM coordination and cost control.",
        },
        {
          heading: "Action Taken",
          content: "Detailed assessment of current infrastructure and capacities.\nDeployed next-gen encoders, multiplexers, optical systems, BUCs, and antennas.\nUsed top-tier components from Thomson, Thor, CODAN, and Prodelin.",
        },
        {
          heading: "Results & Benefits",
          content: "High-performance video output and \nefficient bandwidth usage.\nSuccessful deployment supporting more users.\nFlexible and scalable architecture.",
        },
      ],
    },
    {
      title: "Multi-Layer Compliance Monitoring System",
      img: dm5,
      sections: [
        {
          heading: "Customer situation",
          content: "Disney needed a comprehensive compliance monitoring system for their live and upcoming channels across uplink/downlink operations.",
        },
        {
          heading: "Challenges",
          content: "Transitioning from SDI to full-chain monitoring.\nRequired multi-viewer and internal network visibility.\nTS monitoring for numerous channels.",
        },
        {
          heading: "Action Taken",
          content: "Designed and implemented a tailored compliance monitoring solution.\nIncluded a Video Wall setup for broadcast and revenue teams.\nProvided full flexibility across different monitoring needs.",
        },
        {
          heading: "Results & Benefits",
          content: "Single unified platform for multiple monitoring tasks.\nTimely execution and deployment.\nEnhanced operational oversight\n across all Disney services.",
        },
      ],
    },
    {
      title: "Enterprise MAM Platform Integration",
      img: dm6,
      sections: [
        {
          heading: "Customer situation",
          content: "India’s national broadcaster needed a Media Asset Management (MAM) platform integrated with their existing Quantum storage and departmental workflows.",
        },
        {
          heading: "Challenges",
          content: "Required seamless integration with existing archive systems.\nAutomation of ingest, transcoding, metadata management, and QC.\nGranular rights management and scalability.",
        },
        {
          heading: "Action Taken",
          content: "Delivered Dalet MAM platform customized for their workflow.\nTrained users to build custom workflows for ingest to distribution.\nDeveloped automated processes with QC and manual approvals.",
        },
        {
          heading: "Results & Benefits",
          content: "Best-in-class MAM platform successfully deployed.\nSeamless integration with minimal downtime.\nFuture-proof design supporting playout\n and automation expansions.",
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
      <h2 className="dc-heading">DIGITAL MEDIA CASE STUDIES</h2>
      <div className="dc-case-list">
        {digitalMediaCases.map((study, index) => (
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

export default Ver2;
