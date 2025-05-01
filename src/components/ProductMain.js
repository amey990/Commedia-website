import React, { useEffect } from "react";
import "./ProductMain.css";
import prodImage from "../assets/prod.jpg";
import Customers from "./Customers";

// Product Images
import helmetImage from "../assets/helmet.jpg";
import chatbotImage from "../assets/chatbot.jpg";
import operationAdvImage from "../assets/operation-adv.jpg";
import netmanImage from "../assets/netman.jpg";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const productsData = [
  {
    id: 1,
    title: "SMART HELMET",
    image: helmetImage,
    description:
      "Commedia Solutions' Smart Helmet is an advanced IoT-powered safety device designed for industrial environments such as manufacturing, mining, oil rigs, and construction. It enhances workplace safety, real-time monitoring, and compliance with Environment Health and Safety (EHS) standards.",
    points: [
      "Live environmental monitoring and alerts",
      "Integrated communication system",
      "Real-time data collection and analysis",
      "GPS tracking for safety and security",
    ],
  },
  {
    id: 2,
    title: "cPAL (CHATBOT)",
    image: chatbotImage,
    description:
      "cPAL is Commedia Solutions' enterprise-grade artificial intelligence chatbot designed for seamless automation, intelligent conversations, and real-time support. Built on advanced AI and natural language processing technology, it provides accurate responses, enhances customer engagement, and integrates effortlessly with existing enterprise systems.",
    points: [
      "24/7 automated customer support",
      "Multilingual response capabilities",
      "Real-time analytics and insights",
      "Seamless integration with enterprise platforms",
    ],
  },
  {
    id: 3,
    title: "OPERATION ADVISORS",
    image: operationAdvImage,
    description:
      "Commedia Solutions provides comprehensive Operation Advisory and Managed Services, ensuring seamless network management, IT operations, and infrastructure monitoring. Our team of certified engineers and consultants specializes in optimizing performance, reducing downtime, and enhancing operational efficiency.",
    points: [
      "Expert operational consultancy",
      "Risk management and assessment",
      "Business process optimization",
      "Implementation of industry best practices",
    ],
  },
  {
    id: 4,
    title: "COMMEDIA NETWORK MANAGEMENT SYSTEM (CNMS)",
    image: netmanImage,
    description:
      "Commedia Solutions provides a comprehensive Network Management System (NMS) designed to monitor, analyze, and optimize network performance in real-time. Our NMS offers end-to-end visibility, proactive fault detection, and automated troubleshooting to ensure high availability and seamless operations for enterprises and telecom service providers.",
    points: [
      "Real-time network monitoring",
      "Automated fault detection",
      "Centralized dashboard with AI analytics",
      "Minimized downtime and enhanced operational efficiency",
    ],
  },
];

const ProductMain = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-main">
      {/* Cover Section */}
      <div className="cover">
        <img src={prodImage} alt="Product Cover Banner" className="cover-image" />
        <h1 className="cover-title">Our Products</h1>
      </div>

      {/* Product List */}
      <div className="products-container">
        {productsData.map((product) => (
          <div key={product.id} className="product-section">
            <img
              src={product.image}
              alt={`${product.title} - Commedia Product`}
              className="product-image"
            />
            <div className="product-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <ul className="product-points">
                {product.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Customers Section */}
      <div className="customers-container">
        <Customers />
      </div>
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default ProductMain;
