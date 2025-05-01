// import React, { useState, useEffect, useRef } from "react";
// import "./Our.css";
// import map1 from "../assets/map1.jpg";
// import map2 from "../assets/map2.jpg";

// const Our = () => {
//   const [showFirst, setShowFirst] = useState(true);
//   const containerRef = useRef(null);
//   const observer = useRef(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const interval = setInterval(() => {
//             setShowFirst((prev) => !prev);
//           }, 4000);
//           return () => clearInterval(interval);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (containerRef.current) {
//       observer.current.observe(containerRef.current);
//     }

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <div className="our-container" ref={containerRef}>
//       <h2 className="our-heading">OUR PRESENCE</h2>
//       <div className="our-content-container fade-transition">
//         <div className="our-content">
//           {showFirst ? (
//             <>
//               <h3 className="our-subheading">India – Powering Connectivity Nationwide</h3>
//               <p className="our-text">
//                 At Commedia Solutions, we take pride in being a trusted networking partner
//                 with a robust presence across India. From the bustling cities of Delhi,
//                 Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata to emerging hubs like
//                 Goa, Amritsar, Shillong, and more — our footprint spans the length and
//                 breadth of the nation. With strategically located teams
//                 we ensure seamless connectivity, rapid deployment, and unmatched support
//                 wherever our clients operate. Whether it’s enterprise networks, remote site
//                 connectivity, or managed IT services, our solutions and services is built to empower
//                 businesses in every region with secure, scalable, and high-performance
//                 networking solutions.
//               </p>
//             </>
//           ) : (
//             <>
//               <h3 className="our-subheading">Global Presence – Connecting the World with Confidence</h3>
//               <p className="our-text">
//                 Commedia Solutions has got strong footprint across continents.We have successfully
//                  deployed key projects  in  continents spaning APAC , MIDDLE EAST,us, europe and africa.
//                 We support operations for global customers from our global NOC in Mumbai.
//               </p>
//             </>
//           )}
//         </div>
//         <div className="our-image fade-transition">
//           <img src={showFirst ? map1 : map2} alt={showFirst ? "India Map" : "Global Map"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Our;

import React, { useState, useEffect, useRef } from "react";
import "./Our.css";
import map1 from "../assets/map1.jpg";
import map2 from "../assets/map2.jpg";

const Our = () => {
  const [showFirst, setShowFirst] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // swap maps every 4 seconds now
          interval = setInterval(() => {
            setShowFirst((prev) => !prev);
          }, 4000);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="our-container" ref={containerRef}>
      <h2 className="our-heading">OUR PRESENCE</h2>
      <div className="our-content-container fade-transition">
        <div className="our-content">
          {showFirst ? (
            <>
              <h3 className="our-subheading">
                India – Powering Connectivity Nationwide
              </h3>
              <p className="our-text">
              At Commedia Solutions, we take pride in being a trusted networking partner
                 with a robust presence across India. From the bustling cities of Delhi,
                 Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata to emerging hubs like
                 Goa, Amritsar, Shillong, and more — our footprint spans the length and
                 breadth of the nation. With strategically located teams
                 we ensure seamless connectivity, rapid deployment, and unmatched support
                 wherever our clients operate. Whether it’s enterprise networks, remote site
                 connectivity, or managed IT services, our solutions and services is built to empower
                 businesses in every region with secure, scalable, and high-performance
                 networking solutions.
              </p>
            </>
          ) : (
            <>
              <h3 className="our-subheading">
                Global Presence – Connecting the World with Confidence
              </h3>
              <p className="our-text">
              Commedia Solutions has got strong footprint across continents.We have successfully
                  deployed key projects  in  continents spaning APAC , MIDDLE EAST,us, europe and africa.
                 We support operations for global customers from our global NOC in Mumbai.
              </p>
            </>
          )}
        </div>
        <div className="our-image">
          <img
            src={showFirst ? map1 : map2}
            alt={showFirst ? "India Map" : "Global Map"}
          />
        </div>
      </div>
    </div>
  );
};

export default Our;

