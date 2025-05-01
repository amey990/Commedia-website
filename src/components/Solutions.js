// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Solutions.css";
// import dataCenterImage from "../assets/datacenter.jpg";
// import sdwanImage from "../assets/sdwan.jpg";
// import securityImage from "../assets/security.jpg";
// import cloudImage from "../assets/cloud.jpg";
// import wirelessImage from "../assets/wireless.jpg";
// import avImage from "../assets/av.jpg";
// import digiImage from "../assets/digitalmedia.jpg";
// import satelliteImage from "../assets/satellite.jpg";

// const solutionsData = [
//   {
//     id: 1,
//     title: "DATA CENTRE AND NETWORKING",
//     image: dataCenterImage,
//     points: [
//       "Data Center Design and Deployment",
//       "Network Infrastructure Planning and Optimization",
//       "Managed Network Services"
//     ]
//   },
//   {
//     id: 2,
//     title: "SD-WAN",
//     image: sdwanImage,
//     points: [
//       "Optimized Network Performance",
//       "Secure Connectivity",
//       "Multi-Cloud and Hybrid Cloud Integration",
//       "Cost-Effective WAN Management",
//       "Pan India and Global Presence"
//     ]
//   },
//   {
//     id: 3,
//     title: "NETWORK SECURITY",
//     image: securityImage,
//     points: [
//       "Next-Generation Firewalls (NGFWs)",
//       "Intrusion Detection and Prevention Systems (IDS/IPS)",
//       "Endpoint Security Solutions",
//       "Zero Trust Architecture"
//     ]
//   },
//   {
//     id: 4,
//     title: "CLOUD SOLUTIONS",
//     image: cloudImage,
//     points: [
//       "Cloud Infrastructure and Migration",
//       "Cloud Security and Compliance",
//       "Media Streaming and Transcoding",
//       "IoT Cloud Services",
//       "Ground Station Services"
//     ]
//   },
//   {
//     id: 5,
//     title: "WIRELESS NETWORKING",
//     image: wirelessImage,
//     points: [
//       "High-speed, secure wireless solutions for enterprises.",
//       "Wi-Fi, point-to-point, and mesh network deployment.",
//      "Seamless IT infrastructure integration for scalability."
//     ]
//   },
//   {
//     id: 6,
//     title: "AUDIO/VIDEO AND COLLABORATION",
//     image: avImage,
//     points: [
//       "End-to-end AV solutions for corporate and education.",
//     "High-quality audio and video conferencing setups.",
//     "Custom AV systems for boardrooms, auditoriums, and streaming."
//     ]
//   },
//   {
//     id: 7,
//     title: "DIGITAL MEDIA",
//     image: digiImage,
//     points: [
//       "CDN and streaming solutions for media industries.",
//     "Advanced digital signage for retail and corporate.",
//     "AI-driven content solutions for audience engagement."
//     ]
//   },
//   {
//     id: 8,
//     title: "SATELLITE COMMUNICATION",
//     image: satelliteImage,
//     points: [
//       "VSAT networks and teleport operations for communication.",
//     "High-speed satellite backhaul for telecom and enterprise.",
//     "Expertise in C, Ku, and Ka-band technologies."
//     ]
//   },
// ];


// const Solutions = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const delay = 4000;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % solutionsData.length);
//     }, delay);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="solutions-container">
//       <h2 className="solutions-title">SOLUTIONS</h2>
//       <div className="solutions-content">
//         <div className="solutions-image">
//           <img
//             src={solutionsData[currentIndex].image}
//             alt={solutionsData[currentIndex].title}
//             className="solution-image"
//           />
//         </div>
//         <div className="solutions-text">
//           <h3>{solutionsData[currentIndex].title}</h3>
//           <hr />
//           <ul>
//             {solutionsData[currentIndex].points.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//           <Link to="/solutions" className="solutions-read-more">
//             Read more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Solutions;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Solutions.css";

import dataCenterImage from "../assets/datacenter.jpg";
import sdwanImage from "../assets/sdwan.jpg";
import securityImage from "../assets/security.jpg";
import cloudImage from "../assets/cloud.jpg";
import wirelessImage from "../assets/wireless.jpg";
import avImage from "../assets/av.jpg";
import digiImage from "../assets/digitalmedia.jpg";
import satelliteImage from "../assets/satellite.jpg";

const solutionsData = [
  {
    id: 1,
    title: "DATA CENTRE AND NETWORKING",
    image: dataCenterImage,
    points: [
      "Data Center Design and Deployment",
      "Network Infrastructure Planning and Optimization",
      "Managed Network Services",
    ],
  },
  {
    id: 2,
    title: "SD-WAN",
    image: sdwanImage,
    points: [
      "Optimized Network Performance",
      "Secure Connectivity",
      "Multi-Cloud and Hybrid Cloud Integration",
      "Cost-Effective WAN Management",
      "Pan India and Global Presence",
    ],
  },
  {
    id: 3,
    title: "NETWORK SECURITY",
    image: securityImage,
    points: [
      "Next-Generation Firewalls (NGFWs)",
      "Intrusion Detection and Prevention Systems (IDS/IPS)",
      "Endpoint Security Solutions",
      "Zero Trust Architecture",
    ],
  },
  {
    id: 4,
    title: "CLOUD SOLUTIONS",
    image: cloudImage,
    points: [
      "Cloud Infrastructure and Migration",
      "Cloud Security and Compliance",
      "Media Streaming and Transcoding",
      "IoT Cloud Services",
      "Ground Station Services",
    ],
  },
  {
    id: 5,
    title: "WIRELESS NETWORKING",
    image: wirelessImage,
    points: [
      "High-speed, secure wireless solutions for enterprises.",
      "Wi-Fi, point-to-point, and mesh network deployment.",
      "Seamless IT infrastructure integration for scalability.",
    ],
  },
  {
    id: 6,
    title: "AUDIO/VIDEO AND COLLABORATION",
    image: avImage,
    points: [
      "End-to-end AV solutions for corporate and education.",
      "High-quality audio and video conferencing setups.",
      "Custom AV systems for boardrooms, auditoriums, and streaming.",
    ],
  },
  {
    id: 7,
    title: "DIGITAL MEDIA",
    image: digiImage,
    points: [
      "CDN and streaming solutions for media industries.",
      "Advanced digital signage for retail and corporate.",
      "AI-driven content solutions for audience engagement.",
    ],
  },
  {
    id: 8,
    title: "SATELLITE COMMUNICATION",
    image: satelliteImage,
    points: [
      "VSAT networks and teleport operations for communication.",
      "High-speed satellite backhaul for telecom and enterprise.",
      "Expertise in C, Ku, and Ka-band technologies.",
    ],
  },
];

export default function Solutions() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((idx) => (idx + 1) % solutionsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { title, image, points } = solutionsData[current];

  return (
    <section className="solutions-section">
      <h2 className="solutions-title">SOLUTIONS</h2>
      <div className="solutions-slider">
        <div className="slide">
          <div className="slide-image">
            <img src={image} alt={title} />
          </div>
          <div className="slide-content">
            <h3>{title}</h3>
            <hr />
            <ul>
              {points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <Link to="/solutions" className="slide-button">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
