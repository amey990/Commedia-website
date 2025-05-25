import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LAC.css";
import useScrollTop from '../hooks/useScrollTop';

// Import images
import img1 from "../assets/life1.jpg";
import img2 from "../assets/life2.jpg";
import img3 from "../assets/life3.jpg";
import img4 from "../assets/life4.jpg";
import img5 from "../assets/life5.jpg";

const images = [img1, img2, img3, img4, img5];

const LifeAtCommedia = () => {
  useScrollTop();
  const [index, setIndex] = useState(2); // Start from the center image (index 2)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="life-container">
      <h1 className="life-heading">Life At Commedia</h1>
      <div className="slider-container">
        <div className="slider">
          {[index - 2, index - 1, index, index + 1, index + 2].map((i, pos) => {
            const imgIndex = (i + images.length) % images.length; // Ensure cyclic indexing

            let scale = 0.8; // Default scale for side images
            let opacity = 0.5; // Default opacity for side images
            let xPosition = (pos - 2) * 300; // Default x-position

            // Adjust scale and opacity based on position
            if (pos === 2) {
              scale = 1.2; // Center image gets larger
              opacity = 1; // Center image is fully visible
            } else if (pos === 0 || pos === 4) {
              scale = 0.6; // Farther side images get smaller
              opacity = 0.3; // Farther side images are more faded
            }

            return (
              <motion.img
                key={imgIndex}
                src={images[imgIndex]}
                alt={`life-${imgIndex}`}
                className="slider-image"
                animate={{
                  scale: scale,
                  opacity: opacity,
                  x: `${xPosition}px`, // Adjust image positioning
                  zIndex: pos === 2 ? 10 : 5, // Center image stays on top
                }}
                transition={{ duration: 1 }}
                style={{
                  zIndex: pos === 2 ? 10 : 5, // Ensure center image is in front
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LifeAtCommedia;
