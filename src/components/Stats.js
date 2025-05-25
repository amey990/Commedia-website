// // src/components/Stats.js
// import React, { useEffect, useState, useRef } from "react";
// import "./Stats.css";

// const statsData = [
//   { id: 1, label: "Projects Completed", target: 1000, suffix: "+" },
//   { id: 2, label: "Founded in", target: 2012, suffix: "" },
//   { id: 3, label: "Team Size", target: 150, suffix: "+" },
//   { id: 4, label: "Served In Countries", target: 100, suffix: "+" }
// ];

// const Stats = () => {
//   const [counts, setCounts] = useState(statsData.map(() => 0));
//   const [animated, setAnimated] = useState(false);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const node = statsRef.current;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !animated) {
//           setAnimated(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5 // Trigger when 50% of component is visible
//       }
//     );

//     if (node) {
//       observer.observe(node);
//     }

//     return () => {
//       if (node) {
//         observer.unobserve(node);
//       }
//     };
//   }, [animated]);

//   useEffect(() => {
//     if (!animated) return;

//     const intervals = statsData.map((stat, index) => {
//       let start = 0;
//       const increment = Math.ceil(stat.target / 100);

//       return setInterval(() => {
//         start += increment;
//         if (start >= stat.target) {
//           setCounts(prev => {
//             const newCounts = [...prev];
//             newCounts[index] = stat.target;
//             return newCounts;
//           });
//           clearInterval(intervals[index]);
//         } else {
//           setCounts(prev => {
//             const newCounts = [...prev];
//             newCounts[index] = start;
//             return newCounts;
//           });
//         }
//       }, 20);
//     });

//     return () => intervals.forEach(clearInterval);
//   }, [animated]);

//   return (
//     <div className="stats-container" ref={statsRef}>
//       <h2 className="stats-title">STATS</h2>
//       <div className="stats-grid">
//         {statsData.map((stat, index) => (
//           <div key={stat.id} className="stat-item">
//             <p className="stat-label">{stat.label}</p>
//             <span className="count-number">
//               {counts[index]}
//               {stat.suffix}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stats;

import React, { useState, useRef, useEffect } from "react";
import "./Stats.css";
import useScrollTop from '../hooks/useScrollTop';

const statsData = [
  { label: "Projects Completed",     value: 1000, suffix: "+" },
  { label: "Founded In",             value: 2012, suffix: ""  },
  { label: "Team Size",              value: 150,  suffix: "+" },
  { label: "Served in Countries",    value: 100,  suffix: "+" },
];

export default function Stats() {
  useScrollTop();
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const containerRef = useRef();
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function runAnimation() {
    const duration = 2000; // ms
    const startTime = performance.now();

    // simple ease-out quad
    const easeOutQuad = (t) => t * (2 - t);

    const step = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(rawProgress);

      setCounts(
        statsData.map((stat) => Math.floor(stat.value * eased))
      );

      if (rawProgress < 1) {
        requestAnimationFrame(step);
      } else {
        // ensure final values
        setCounts(statsData.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(step);
  }

  return (
    <section className="stats-section" ref={containerRef}>
      <h2 className="stats-header">Stats</h2>
      <div className="stats-grid">
        {statsData.map((stat, i) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-value">
              {counts[i]}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
