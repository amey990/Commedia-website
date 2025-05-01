import React from "react";
import "./PTG.css";
import commediaLogo from "../assets/commedialogo.jpg"; // Adjust path if needed
import nlogImage from "../assets/nlog.jpg"; // Adjust path if needed

const PTG = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Top Left: Commedia Logo */}
        <img src={commediaLogo} alt="Commedia Logo" className="popup-logo" />

        {/* Main Content */}
        <div className="popup-content">
          <h2>Case Study:Video Conference Telecom</h2>
          
          <section>
            <h3>Customer Situation</h3>
            <p>
              The client, a leading telecom service provider,needed a strategic presales<br/> 
              framework to enhance global operations and customer engagement.
            </p>
          </section>

          <section>
            <h3>Challenges</h3>
            <p>
              - Lack of structured presales processes <br />
              - Inconsistent engagement models across regions <br />
              - Need for automation in proposal management
            </p>
          </section>

          <section>
            <h3>Actions Taken</h3>
            <p>
              - Implemented an AI-driven presales tool <br />
              - Standardized global engagement workflows <br />
              - Integrated data analytics for insights
            </p>
          </section>

          <section>
            <h3>Results & Benefits</h3>
            <p>
              - 30% increase in presales efficiency <br />
              - Improved customer response time <br />
              - Enhanced deal closure rates
            </p>
          </section>
        </div>

        {/* Bottom Left: Nlog Image */}
        <img src={nlogImage} alt="Nlog" className="popup-nlog" />

        {/* Close Button */}
        <button className="popup-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default PTG;
