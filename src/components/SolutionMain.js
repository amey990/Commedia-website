import React from "react";
import "./SolutionMain.css";
import Customers from "./Customers";

import dataCenterImage from "../assets/datacenter.jpg";
import sdwanImage from "../assets/sdwan.jpg";
import securityImage from "../assets/security.jpg";
import cloudImage from "../assets/cloud.jpg";
import wirelessImage from "../assets/wireless.jpg";
import avImage from "../assets/av.jpg";
import digiImage from "../assets/digitalmedia.jpg";
import satelliteImage from "../assets/satellite.jpg";
import solImage from "../assets/soll.jpg";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const solutionsData = [
  { 
    id: 1, 
    title: "DATA CENTRE AND NETWORKING", 
    image: dataCenterImage, 
    description: "Commedia Solutions provides end-to-end Data Center and Networking solutions to help enterprises establish a robust, secure, and scalable IT infrastructure. Our services include:",
    points: [
      "Data Center Design and Deployment",
      "Network Infrastructure Planning and Optimization",
      "Managed Network Services"
    ] 
  },
  { 
    id: 2, 
    title: "SD-WAN", 
    image: sdwanImage, 
    description: "Commedia Solutions provides intelligent, secure, and scalable SD-WAN (Software-Defined Wide Area Network) solutions to help enterprises enhance network performance, security, and cost-efficiency across multiple locations.",
    points: [
      "Optimized Network Performance – Automatically routes traffic via the best available path for minimal latency.",
      "Secure Connectivity – End-to-end encryption, zero-trust security, and integrated firewalls.",
      "Multi-Cloud and Hybrid Cloud Integration – Seamlessly connect to AWS, Azure, and private clouds.",
      "Cost-Effective WAN Management – Reduces dependency on expensive MPLS circuits by using broadband and LTE.",
      "Pan India and Global Presence"
    ] 
  },
  { 
    id: 3, 
    title: "NETWORK SECURITY", 
    image: securityImage, 
    description: "Commedia Solutions provides advanced network security services to protect enterprises from cyber threats and ensure a resilient IT infrastructure. Our solutions cover firewalls, IPS, IDS, endpoint security, PIM, PAM, etc.",
    points: [
      "Next-Generation Firewalls (NGFWs) – Cisco-based firewalls with IPS/IDS for threat protection.",
      "Intrusion Detection and Prevention Systems (IDS/IPS) – Real-time monitoring and blocking of malicious activity.",
      "Endpoint Security Solutions – Advanced Malware Protection (AMP), NAC, PAM, and VMS for device security.",
      "Zero Trust Architecture – Access control and micro-segmentation to limit unauthorized network access."
    ] 
  },
  { 
    id: 4, 
    title: "CLOUD SOLUTIONS", 
    image: cloudImage, 
    description: "Commedia Solutions offers scalable, secure, and high-performance cloud solutions for enterprises. Our cloud expertise spans AWS, hybrid cloud integration, media processing, IoT, and cybersecurity to support modern business operations.",
    points: [
      "Cloud Infrastructure and Migration – Deploy, manage, and migrate workloads to AWS and other cloud platforms.",
      "Cloud Security and Compliance – CASB (Cloud Access Security Broker) for secure enterprise cloud access.",
      "Media Streaming and Transcoding – AWS-based cloud video processing for OTT and broadcasting services.",
      "IoT Cloud Services – AWS IoT Core implementation for real-time sensor data and analytics."
    ] 
  },
  { 
    id: 5, 
    title: "WIRELESS NETWORKING", 
    image: wirelessImage, 
    description: "Commedia Solutions delivers cutting-edge wireless networking solutions for enterprises, smart cities, industrial applications, and telecom operators. Specializing in Wi-Fi, Private LTE, and IoT-based infrastructures, we ensure high-speed, secure, and scalable connectivity.",
    points: [
      "Seamless wireless connectivity solutions for enterprises, ensuring high-speed and secure communication.",
      "Deployment of Wi-Fi, point-to-point, and mesh networks for optimized coverage and reliability.",
      "Integration with existing IT infrastructure, ensuring scalability and minimal downtime."
    ] 
  },
  { 
    id: 6, 
    title: "AUDIO/VIDEO AND COLLABORATION", 
    image: avImage, 
    description: "Commedia Solutions offers enterprise-grade audio, video, and collaboration solutions for seamless business communication. We specialize in video conferencing, VoIP, unified communication platforms, and real-time collaboration tools.",
    points: [
      "End-to-end AV solutions for corporate, broadcasting, and educational institutions.",
      "High-quality audio and video conferencing setups, ensuring seamless remote collaboration.",
      "Custom-designed AV systems for boardrooms, auditoriums, and live streaming applications."
    ] 
  },
  { 
    id: 7, 
    title: "DIGITAL MEDIA", 
    image: digiImage, 
    description: "Commedia Solutions delivers advanced digital media solutions for seamless content creation, management, and distribution. We specialize in video streaming, media transcoding, playout services, and cloud-based content delivery.",
    points: [
      "Content delivery networks (CDN) and streaming solutions for media and entertainment industries.",
      "Advanced digital signage solutions for retail, corporate, and public spaces.",
      "Customized digital content solutions, integrating AI-driven analytics for audience engagement."
    ] 
  },
  { 
    id: 8, 
    title: "SATELLITE COMMUNICATION", 
    image: satelliteImage, 
    description: "Commedia Solutions offers advanced satellite communication (Satcom) solutions for reliable, high-speed, and secure connectivity. We specialize in VSAT networks, teleport operations, backhaul solutions, and satellite-based enterprise communication.",
    points: [
      "Reliable VSAT networks and teleport operations for seamless satellite communication.",
      "High-speed satellite backhaul solutions for telecom and enterprise connectivity.",
      "Expertise in C, Ku, and Ka-band technologies for optimized performance."
    ] 
  }
];


const SolutionMain = () => {
  return (
    <div className="solution-main-container">
      {/* Cover Section */}
      <div className="cover">
        <img src={solImage} alt="Solutions Cover Banner" className="cover-image" />
        <h1 className="cover-title">Our Solutions</h1>
      </div>

      {/* ✅ Solution Cards */}
<div className="solutions-list">
  {solutionsData.map((solution) => (
    <div className="solution-card" key={solution.id}>
      <img src={solution.image} alt={solution.title} className="solution-image" />
      <div className="solution-content">
        <h2>{solution.title}</h2>
        <ul>
          {solution.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


      {/* ✅ Customers Section */}
      <div className="customers-container">
        <Customers />
      </div>
      <Chatbot /> {/* Add Chatbot here */}
      
    </div>
  );
};

export default SolutionMain;
