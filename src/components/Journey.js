import React, { useEffect, useState } from "react";
import "./Journey.css";

const Journey = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const timelineSection = document.querySelector(".timeline-container");
    if (timelineSection) {
      observer.observe(timelineSection);
    }

    return () => {
      if (timelineSection) observer.unobserve(timelineSection);
    };
  }, []);

  const leftEvents = [
    { year: "2012", text: "FOUNDED IN 2012" },
    { year: "2014", text: "1ST DOMESTIC ORDER" },
    { year: "2016", text: "1ST INTERNATIONAL ORDER" },
    { year: "2018", text: "100 PROJECTS COMPLETED" },
  ];

  const rightEvents = [
    { year: "2020", text: "500 PROJECTS COMPLETED" },
    { year: "2022", text: "1000 PROJECTS COMPLETED" },
    { year: "2023", text: "1ST GOVERNMENT ORDER" },
    { year: "2024", text: "1ST DIGITAL MEDIA ORDER" },
  ];

  return (
    <div className="journey-container">
      <h2 className="journey-title">JOURNEY</h2>
      <div className={`timeline-container ${isVisible ? "visible" : ""}`}>
        {/* Left Timeline */}
        <div className="timeline left">
          {leftEvents.map((event, index) => (
            <div className="timeline-row" key={index}>
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-item">{event.text}</div>
            </div>
          ))}
        </div>

        {/* Right Timeline */}
        {/* Right Timeline (Modified to match left) */}
<div className="timeline left"> {/* Change 'right' to 'left' */}
  {rightEvents.map((event, index) => (
    <div className="timeline-row" key={index}>
      <div className="timeline-year">{event.year}</div> {/* Year on left now */}
      <div className="timeline-dot"></div>
      <div className="timeline-item">{event.text}</div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Journey;
