// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./Products.css";

// // Import your images
// import helmetImage from '../assets/helmet.jpg';
// import chatbotImage from '../assets/chatbot.jpg';
// import operationAdvImage from '../assets/operation-adv.jpg';
// import netmanImage from '../assets/netman.jpg';

// const productsData = [
//   {
//     id: 1,
//     title: "SMART HELMET",
//     image: helmetImage,
//     points: [
//       "IoT-powered safety device for industrial environments",
//       "Real-time monitoring system",
//       "Enhanced operational safety protocols",
//       "Worker protection enhancement system"
//     ]
//   },
//   {
//     id: 2,
//     title: "CHATBOT",
//     image: chatbotImage,
//     points: [
//       "Enterprise-grade AI automation",
//       "Natural language processing capabilities",
//       "24/7 real-time support system",
//       "Context-aware interaction engine"
//     ]
//   },
//   {
//     id: 3,
//     title: "OPERATION ADVISORS",
//     image: operationAdvImage,
//     points: [
//       "Full-spectrum IT management",
//       "Network performance optimization",
//       "Proactive monitoring solutions",
//       "Downtime reduction strategies"
//     ]
//   },
//   {
//     id: 4,
//     title: "NETWORK MANAGEMENT SYSTEM",
//     image: netmanImage,
//     points: [
//       "Real-time network analytics",
//       "End-to-end visibility dashboard",
//       "Automated fault detection",
//       "Centralized control interface"
//     ]
//   }
// ];

// const Products = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % productsData.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const currentProduct = productsData[currentIndex];

//   return (
//     <section className="products-section">
//       <h2 className="products-title">PRODUCTS</h2>
      
//       <div className="products-slider">
//         <div className="product-slide">
//           <div className="product-image-container">
//             <img 
//               src={currentProduct.image} 
//               alt={currentProduct.title} 
//             />
//           </div>
          
//           <div className="product-content">
//             <h3>{currentProduct.title}</h3>
//             <ul>
//               {currentProduct.points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//             <Link to="/products" className="product-read-more">
//               Read More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

// src/components/Products.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Products.css";
import useScrollTop from '../hooks/useScrollTop';

// Import your images
import helmetImage from '../assets/helmet.jpg';
import chatbotImage from '../assets/chatbot.jpg';
import operationAdvImage from '../assets/operation-adv.jpg';
import netmanImage from '../assets/netman.jpg';

const productsData = [
  {
    id: 1,
    title: "SMART HELMET",
    image: helmetImage,
    points: [
      "IoT-powered safety device for industrial environments",
      "Real-time monitoring system",
      "Enhanced operational safety protocols",
      "Worker protection enhancement system"
    ]
  },
  {
    id: 2,
    title: "CHATBOT",
    image: chatbotImage,
    points: [
      "Enterprise-grade AI automation",
      "Natural language processing capabilities",
      "24/7 real-time support system",
      "Context-aware interaction engine"
    ]
  },
  {
    id: 3,
    title: "OPERATION ADVISORS",
    image: operationAdvImage,
    points: [
      "Full-spectrum IT management",
      "Network performance optimization",
      "Proactive monitoring solutions",
      "Downtime reduction strategies"
    ]
  },
  {
    id: 4,
    title: "NETWORK MANAGEMENT SYSTEM",
    image: netmanImage,
    points: [
      "Real-time network analytics",
      "End-to-end visibility dashboard",
      "Automated fault detection",
      "Centralized control interface"
    ]
  }
];

const Products = () => {
  useScrollTop();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % productsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = productsData[currentIndex];

  return (
    <section className="products-section">
      <h2 className="products-title">PRODUCTS</h2>
      <div className="products-slider">
        <div className="product-slide">
          <div className="product-image-container">
            <img 
              src={currentProduct.image} 
              alt={currentProduct.title} 
            />
          </div>
          <div className="product-content">
            <h3>{currentProduct.title}</h3>
            <ul>
              {currentProduct.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <Link to="/products" className="product-read-more">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
