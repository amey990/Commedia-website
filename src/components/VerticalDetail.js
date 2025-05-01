import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./VerticalDetail.css";
import Chatbot from "../components/Chatbot"; // Import chatbot component

// Images
import telecomImage from "../assets/telecom.jpg";
import digitalMediaImage from "../assets/digitalmedia.jpg";
import enterpriseImage from "../assets/enterprise.jpg";
import governmentImage from "../assets/government.jpg";

const verticalData = {
  telecom: {
    title: "SERVICE PROVIDER",
    image: telecomImage,
    paragraphs: [
      `Telecom companies in India and globally are seeing transition in terms of technology, shift in customer preferences, ARPUs, services offered. Competition today demands rapid project execution, multi-location deployments, ensuring high level of customer satisfaction at each engagement to stay ahead of the race to attract business.`,
      `Commedia works with some of the best global telecom service providers in helping them implement their networks and projects. For the service providers, we are continuously engaging through various projects, understanding their requirements and providing solutions as per the project needs. Some areas of work include:`,
    ],
    bullets: [
      "Setting up of connectivity networks / NOCs.",
      "Installation, Testing and Commissioning of servers / systems.",
      "Network / system upgradation or any transformation activities.",
      "Managed services for managing the telecom infrastructure, handling transformation activities, etc.",
      "Software Solutions in the areas of Network Management, Billing, Data Mining and Analytics, Data Optimization, Operations Support, Project Tools etc.",
    ],
  },

  "digital-media": {
    title: "DIGITAL MEDIA",
    image: digitalMediaImage,
    paragraphs: [
      `Broadcast industry in India is undergoing a shift in terms of technology on multiple fronts. In the production area, we see baseband and non automated workflows giving way to IP based and automated workflows, compression is undergoing the shift with the newer HEVC standard of compression,which reduces the operational cost.`,
      `Latest technologies like AI, AR, VR being used in different areas in the broadcast domain especially with the Online platform exploding at an exponential rate. Most telcos, broadcasters, content producers, content aggregators are venturing into OTT/IPTV platforms which can give their customers wholesome experience with the 4G / 5G LTE technology setting in.`,
      `Commedia is working closely with some of the major broadcasters in India and abroad. Commedia’s experienced team handles all kinds of projects starting from setting up a satellite / cable channel.`,
      `Within the broadcast and teleport ambit, Commedia indulges in a range of activities including -`,
    ],
    bullets: [
      "SITC of Turnkey projects / Headend / Teleport infrastructure projects.",
      "PCR / MCR / Studio setups.",
      "MAM/DAM, Storage and Archival solutions.",
      "ENG Cameras, News Room Control Systems, Online -Offline Graphics, Video Graphics.",
      "OTT, IPTV, Streaming Solutions.",
      "DSNG, OB vans setup with fabrication.",
      "Compliance Monitoring, service level monitoring along the complete transmission chain / QoS /QoE.",
      "SITC and Annual Maintenance of Television Receive antenna farms.",
      "Managed Services for broadcast related activities, event based activities like audits, playout management, meta data tagging, quality check services.",
    ],
  },

  enterprise: {
    title: "ENTERPRISE",
    image: enterpriseImage,
    paragraphs: [
      `With the convergence of technologies, Commedia understands the modern day evolving needs of growing enterprise companies. Diverse companies have now understood the efficiency that comes across with the use of technology in various areas which help them benefit.`,
      `Commedia has been delivering round the clock projects on time where customer’s IT and enterprise infrastructure projects are considered. In the enterprise domain, Commedia is working closely with some of the best technologies to provide its customers with a seamless, high end platform. Commedia is working with a range of technologies like Dell, CISCO, AWS, HPE, Juniper, Avaya, Ruckus, Sonicwall. Commedia engineers are trained and well versed with the various new technologies coming up.`,
      `Some of the activities may include -`,
    ],
    bullets: [
      "SITC of wireless / wired networking enterprise solutions.",
      "SITC of IT Hardware and peripherals.",
      "SITC of Surveillance / CCTV solutions.",
      "SITC of Auditoriums / meeting rooms / conference halls.",
      "Support services for the enterprise segment.",
    ],
  },

  government: {
    title: "GOVERNMENT",
    image: governmentImage,
    paragraphs: [
      `The Government of India has many departments under the Ministry of Information and Broadcast, Ministry of Telecom, Education department where the technology advancements gives immense opportunities for different types of projects across different domains.`,
      `Commedia has been working closely on a host of Government projects be it Prasar Bharti, All India Radio, ISRO since its inception. Commedia is keen to associate with more government bodies and work towards providing more technical solutions and services.`,
    ],
    bullets: [
      "SITC of Broadcast related projects.",
      "SITC of all kinds of antenna installation projects.",
      "SITC of monitoring solutions.",
      "Managed services for the projects.",
    ],
  },
};

const VerticalDetail = () => {
  const { id } = useParams(); // Get dynamic part of the URL
  const history = useHistory(); // For navigation

  const data = verticalData[id];

  if (!data) {
    return <div className="vertical-detail-container">No data found for this vertical.</div>;
  }

  return (
    <div className="vertical-detail-container">
      <h1 className="vertical-heading">VERTICALS</h1>

      <div className="top-bar">
        <h2 className="vertical-section-title">{data.title}</h2>
        <button
          className="close-button"
          onClick={() => history.push("/verticals")}
          title="Close"
        >
          ✖
        </button>
      </div>

      {/* Paragraphs and Image */}
      <div className="vertical-detail-content">
        <div className="vertical-text">
          {data.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <img src={data.image} alt={data.title} className="vertical-image" />
      </div>

      {/* Bullet List */}
      {data.bullets?.length > 0 && (
        <ul className="vertical-detail-list">
          {data.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default VerticalDetail;
