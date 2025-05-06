// import React from "react";
// import "./Achievements.css";

// // Import images
// import achairtel from "../assets/ach1.jpg";
// import achisro from "../assets/ach2.jpg";
// import achtata from "../assets/ach3.jpg";
// import achcbi from "../assets/ach4.png";
// import achpet from "../assets/ach5.png";
// import ach from "../assets/ach6.png";
// import achc from "../assets/ach7.png";
// import achair from "../assets/ach8.png";
// import achlic from "../assets/ach9.png";
// import acha from "../assets/ach10.png";
// import achi from "../assets/ach11.png";


// const achievements = [
//   {
//     id: "ach1",
//     title: "Supporting Leo satellite with AWS Ground Station",
//     description: "We're proud to support a prestigious government space mission with 24/7 ground station services via AWS Ground Station, enabling real-time satellite communication for complex orbital maneuvers. Our work ensures seamless TT&C during critical operations like recent docking and undocking events.",
//     image: achairtel,
//   },
//   {
//     id: "ach2",
//     title: "PAN-India SD-WAN Rollout",
//     description: "We successfully executed a PAN-India SD-WAN rollout using FortiGate, delivering secure, optimized, and centrally managed network connectivity across all locations. Our solution enhances performance, resilience, and visibility for distributed enterprises.",
//     image: achisro,
//   },
//   {
//     id: "ach3",
//     title: "Managed Wi-Fi & LAN Deployment",
//     description: "We deliver end-to-end managed Wi-Fi and LAN deployment services, ensuring secure, high-performance connectivity across enterprise environments. From design to monitoring, we handle it all—so you stay connected without the complexity.",
//     image: achtata,
//   },
//   {
//     id: "ach4",
//     title: "Pan-India Wi-Fi Rollout for Indian Railways",
//     description: "Managed the Wi-Fi network rollout across 4,791 railway stations nationwide within stringent timelines, showcasing superior project management and technical expertise.",
//     image: achcbi,
//   },
//   {
//     id: "ach5",
//     title: "Design and Implementation of Wireless Networks for Petroleum Industry",
//     description: "Delivered end-to-end design, installation, and support of Aruba Wi-Fi networks across 100 locations, providing seamless wireless connectivity and robust technical support.",
//     image: achpet,
//   },
//   {
//     id: "ach6",
//     title: "State-Wide IP/MPLS Network Deployment in Chhattisgarh",
//     description: "Deployed a fiber-based IP/MPLS network in over 6,000 rural locations including Gram Panchayats, ensuring digital connectivity across the state.",
//     image: ach,
//   },
//   {
//     id: "ach7",
//     title: "Successful Cisco SD-WAN Migration for CBI Bank",
//     description: "Smoothly migrated CBI Bank’s MPLS network to SD-WAN across 4,500 sites, ensuring minimal disruption to critical banking operations.",
//     image: achc,
//   },
//   {
//     id: "ach8",
//     title: "Enterprise Network Upgrade for Hyderabad Airport",
//     description: "Upgraded wireless and data center infra at Hyderabad International Airport using Cisco Catalyst, enabling scalability and security.",
//     image: achair,
//   },
//   {
//     id: "ach9",
//     title: "End-to-End Video Conferencing for LIC India",
//     description: "Installed and migrated Cisco video conferencing infra across locations, improving communication efficiency with zero downtime.",
//     image: achlic,
//   },
//   {
//     id: "ach10",
//     title: "Datacenter & Network Ops for Indian Bank",
//     description: "Provided 24/7 network monitoring and management for 1,900+ branches, improving uptime and operational efficiency.",
//     image: acha,
//   },
//   {
//     id: "ach11",
//     title: "Global WAN for Saudi Ministry of Foreign Affairs",
//     description: "Deployed global WAN across 108 embassies, ensuring reliable and secure international connectivity.",
//     image: achi,
//   },

  
// ];

// const Achievement = () => {
//   return (
//     <div className="achievement-container">
//       <h1 className="achievement-heading">OUR ACHIEVEMENTS</h1>
//       <div className="achievement-cards">
//         {achievements.map((ach) => (
//           <div key={ach.id} className="achievement-card">
//             <div className="achievement-image-container">
//               <img src={ach.image} alt={ach.title} className="achievement-image" />
//             </div>
//             <div className="achievement-text">
//               <h2>{ach.title}</h2>
//               <p>{ach.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievement;


import React, { useRef } from "react";
import "./Achievements.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import achairtel from "../assets/ach1.jpg";
import achisro from "../assets/ach2.jpg";
import achtata from "../assets/ach3.jpg";
import achcbi from "../assets/ach4.png";
import achpet from "../assets/ach5.png";
import ach from "../assets/ach6.png";
import achc from "../assets/ach7.png";
import achair from "../assets/ach8.png";
import achlic from "../assets/ach9.png";
import acha from "../assets/ach10.png";
import achi from "../assets/ach11.png";

const achievements = [
  {
    id: "ach1",
    title: "Supporting Leo satellite with AWS Ground Station",
    description:
      "We're proud to support a prestigious government space mission with 24/7 ground station services via AWS Ground Station, enabling real-time satellite communication for complex orbital maneuvers. Our work ensures seamless TT&C during critical operations like recent docking and undocking events.",
    image: achairtel,
  },
  {
    id: "ach2",
    title: "PAN-India SD-WAN Rollout",
    description:
      "We successfully executed a PAN-India SD-WAN rollout using FortiGate, delivering secure, optimized, and centrally managed network connectivity across all locations. Our solution enhances performance, resilience, and visibility for distributed enterprises.",
    image: achisro,
  },
  {
    id: "ach3",
    title: "Managed Wi-Fi & LAN Deployment",
    description:
      "We deliver end-to-end managed Wi-Fi and LAN deployment services, ensuring secure, high-performance connectivity across enterprise environments. From design to monitoring, we handle it all—so you stay connected without the complexity.",
    image: achtata,
  },
  {
    id: "ach4",
    title: "Pan-India Wi-Fi Rollout for Indian Railways",
    description:
      "Managed the Wi-Fi network rollout across 4,791 railway stations nationwide within stringent timelines, showcasing superior project management and technical expertise.",
    image: achcbi,
  },
  {
    id: "ach5",
    title: "Design and Implementation of Wireless Networks for Petroleum Industry",
    description:
      "Delivered end-to-end design, installation, and support of Aruba Wi-Fi networks across 100 locations, providing seamless wireless connectivity and robust technical support.",
    image: achpet,
  },
  {
    id: "ach6",
    title: "State-Wide IP/MPLS Network Deployment in Chhattisgarh",
    description:
      "Deployed a fiber-based IP/MPLS network in over 6,000 rural locations including Gram Panchayats, ensuring digital connectivity across the state.",
    image: ach,
  },
  {
    id: "ach7",
    title: "Successful Cisco SD-WAN Migration for CBI Bank",
    description:
      "Smoothly migrated CBI Bank’s MPLS network to SD-WAN across 4,500 sites, ensuring minimal disruption to critical banking operations.",
    image: achc,
  },
  {
    id: "ach8",
    title: "Enterprise Network Upgrade for Hyderabad Airport",
    description:
      "Upgraded wireless and data center infra at Hyderabad International Airport using Cisco Catalyst, enabling scalability and security.",
    image: achair,
  },
  {
    id: "ach9",
    title: "End-to-End Video Conferencing for LIC India",
    description:
      "Installed and migrated Cisco video conferencing infra across locations, improving communication efficiency with zero downtime.",
    image: achlic,
  },
  {
    id: "ach10",
    title: "Datacenter & Network Ops for Indian Bank",
    description:
      "Provided 24/7 network monitoring and management for 1,900+ branches, improving uptime and operational efficiency.",
    image: acha,
  },
  {
    id: "ach11",
    title: "Global WAN for Saudi Ministry of Foreign Affairs",
    description:
      "Deployed global WAN across 108 embassies, ensuring reliable and secure international connectivity.",
    image: achi,
  },
];

const Achievement = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="achievement-container">
      <h1 className="achievement-heading">OUR ACHIEVEMENTS</h1>
      <div className="achievement-scroll-wrapper">
        <FaChevronLeft className="arrow left-arrow" onClick={scrollLeft} />
        <div className="achievement-cards" ref={scrollRef}>
          {achievements.map((ach) => (
            <div key={ach.id} className="achievement-card">
              <div className="achievement-image-container">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="achievement-image"
                />
              </div>
              <div className="achievement-text">
                <h2>{ach.title}</h2>
                <p>{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
        <FaChevronRight className="arrow right-arrow" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default Achievement;
