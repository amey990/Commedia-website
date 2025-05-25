import React from "react";
import { useHistory } from "react-router-dom";
import "./VerticalDetail.css";
import digitalMediaImage from "../assets/digital-media.jpg";
import Chatbot from "../components/Chatbot"; // Import chatbot component
import useScrollTop from '../hooks/useScrollTop';

const DigitalMedia = () => {
  useScrollTop();
  const history = useHistory();

  return (
    <div className="vertical-detail-container">
      <div className="vertical-cover" style={{ backgroundImage: `url(${verticalsImage})` }}>
        <h1 className="vertical-title">VERTICALS</h1>
      </div>
      <h1 className="vertical-detail-header">DIGITAL MEDIA / BROADCAST</h1>
      {/* Image & First Paragraph */}
      <div className="vertical-section">
        <div className="vertical-text">
          <p>
            Broadcast industry in India is undergoing a shift in terms of technology on multiple fronts.
            In the production area, we see baseband and non-automated workflows giving way to IP-based 
            and automated workflows. Compression is undergoing a shift with the newer HEVC standard, 
            reducing operational costs.
          </p>
        </div>
        <div className="vertical-image">
          <img src={digitalMediaImage} alt="Digital Media" />
        </div>
      </div>

      {/* Additional Details */}
      <p className="vertical-detail-content">
        Latest technologies like AI, AR, VR are being used in different areas in the broadcast domain, 
        especially with the online platform exploding at an exponential rate. Most telcos, broadcasters, 
        content producers, and aggregators are venturing into OTT/IPTV platforms, offering customers a 
        wholesome experience with 4G/5G LTE technology setting in.
      </p>

      <p className="vertical-detail-content">
        Commedia is working closely with some of the major broadcasters in India and abroad. Our experienced 
        team handles all kinds of projects, from setting up a satellite/cable channel to managing teleport operations.
      </p>

      {/* Bullet Points */}
      <ul className="vertical-detail-list">
        <li>SITC of Turnkey projects / Headend / Teleport infrastructure projects.</li>
        <li>PCR / MCR / Studio setups.</li>
        <li>MAM/DAM, Storage and Archival solutions.</li>
        <li>ENG Cameras, News Room Control Systems, Online-Offline Graphics, Video Graphics.</li>
        <li>OTT, IPTV, Streaming Solutions.</li>
        <li>DSNG, OB vans setup with fabrication.</li>
        <li>Compliance Monitoring, QoS/QoE service level monitoring.</li>
        <li>Annual Maintenance of Television Receive antenna farms.</li>
        <li>Managed Services for broadcast-related activities and event-based activities.</li>
      </ul>

      {/* Back Button */}
      <button className="back-button" onClick={() => history.push("/verticals")}>
        ← Back to Verticals
      </button>
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

<div>
    
</div>
export default DigitalMedia;











