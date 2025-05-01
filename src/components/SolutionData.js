import dataCenterImage from "../assets/datacenter.jpg";
import sdwanImage from "../assets/sdwan.jpg";
import securityImage from "../assets/security.jpg";
import Chatbot from "../components/Chatbot"; // Import chatbot component

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
];

export default solutionsData;
