import React from "react";
import "./PTG.css";
import commediaLogo from "../assets/commedialogo.jpg";
import nlogImage from "../assets/nlog.jpg";

const PTGReusable = ({ onClose, caseStudy, bottomRightImg }) => {
  if (!caseStudy) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        
        {/* Top-left fixed logo */}
        <img src={commediaLogo} alt="Commedia Logo" className="popup-logo" />

        {/* Top-right close button */}
        <button className="popup-close" onClick={onClose}>✖</button>

        {/* Main content */}
        <div className="popup-content">
          <h2 className="popup-title">{caseStudy.title}</h2>

          {/* Section content */}
          {caseStudy.sections?.map((section, index) => (
            <section key={index} className="popup-section">
              <h3 className="popup-section-heading">{section.heading}</h3>
              <p className="popup-section-content">
                {section.content.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              {/* Optional image per section */}
              {section.image && (
                <img
                  src={section.image}
                  alt={`Section ${index + 1}`}
                  className="popup-section-img"
                />
              )}
            </section>
          ))}
        </div>

        {/* Case study image (bottom right above nlog) */}
        {caseStudy.img && (
          <img
            src={caseStudy.img}
            alt={caseStudy.title}
            className="popup-bottom-image"
          />
        )}

        {/* Optional extra image (bottom right) */}
        {bottomRightImg && (
          <img
            src={bottomRightImg}
            alt="Extra Visual"
            className="popup-bottom-right"
          />
        )}

        {/* Bottom left static logo */}
        <img src={nlogImage} alt="Nlog" className="popup-nlog" />
      </div>
    </div>
  );
};

export default PTGReusable;
