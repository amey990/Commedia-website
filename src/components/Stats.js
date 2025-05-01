// import React, { useEffect, useState } from "react";
// import "./Stats.css";

// const statsData = [
//   { id: 1, label: "Projects Completed", target: 1000, suffix: "+" },
//   { id: 2, label: "Founded in", target: 2012, suffix: "" },
//   { id: 3, label: "Team Size", target: 150, suffix: "+" },
//   { id: 4, label: "Served In Countries", target: 100, suffix: "+" }
// ];

// const Stats = () => {
//   const [counts, setCounts] = useState(
//     statsData.map(() => 0)
//   );
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     if (animated) {
//       let newCounts = [...counts];
//       statsData.forEach((stat, index) => {
//         let start = 0;
//         const increment = Math.ceil(stat.target / 100);
//         const timer = setInterval(() => {
//           start += increment;
//           if (start >= stat.target) {
//             newCounts[index] = stat.target;
//             setCounts([...newCounts]);
//             clearInterval(timer);
//           } else {
//             newCounts[index] = start;
//             setCounts([...newCounts]);
//           }
//         }, 20);
//       });
//     }
//   }, [animated]);

//   return (
//     <div
//       className="stats-container"
//       onMouseEnter={() => setAnimated(true)} // Start counting when hovered
//     >
//       <h2 className="stats-title">STATS</h2>
//       <div className="stats-grid">
//         {statsData.map((stat, index) => (
//           <div key={stat.id} className="stat-item">
//             <p className="stat-label">{stat.label}</p> {/* Label on top */}
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
import React, { useEffect, useState, useRef } from "react";
import "./Stats.css";

const statsData = [
  { id: 1, label: "Projects Completed", target: 1000, suffix: "+" },
  { id: 2, label: "Founded in", target: 2012, suffix: "" },
  { id: 3, label: "Team Size", target: 150, suffix: "+" },
  { id: 4, label: "Served In Countries", target: 100, suffix: "+" }
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Trigger when 50% of component is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animated]);

  useEffect(() => {
    if (animated) {
      const intervals = statsData.map((stat, index) => {
        let start = 0;
        const increment = Math.ceil(stat.target / 100);
        
        return setInterval(() => {
          start += increment;
          if (start >= stat.target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.target;
              return newCounts;
            });
            clearInterval(intervals[index]);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = start;
              return newCounts;
            });
          }
        }, 20);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [animated]);

  return (
    <div className="stats-container" ref={statsRef}>
      <h2 className="stats-title">STATS</h2>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <p className="stat-label">{stat.label}</p>
            <span className="count-number">
              {counts[index]}
              {stat.suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;