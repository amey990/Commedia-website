// export default Partnerships;

// src/pages/Partnerships.js
import React from "react";
import "./Partnerships.css";
import handshakeImage from "../assets/handshake.jpg";
import Chatbot from "../components/Chatbot";

// two separate lists
const enterprisePartners = [
"cisco.png", "fortinet.png", "bridge.png", "canon.png",
  "dalet.png", "datavideo.png", "decimator.png", "yamaha.png",
  "cinegy.png", "bose.png", "mediakind.png", "sony.png",
  "ericsson.png", "fora.png", "ikegami.png", "harmonic.png",
  "imagine.png", "netgear.png", "karthavya.png", "raidix.png",
  "quantum.png", "telemetrics.png", "wasp3d.png", "wowza.png",
];
const digitalMediaPartners = [
  "belden.png", "sennheiser.png", "panasonic.png", "aws.png",
  "jbl.png", "3m.png", "samsung.png", "avaya.png",
  "benq.png", "actus.png", "bosch.png", "cpplus.png",
  "sophos.png", "dell.png", "epson.png", "blackmagic.png",
  "hikvision.png", "juniper.png", "huawei.png", "hp.png",
  "lg.png", "lenovo.png", "maudio.png", "yealink.png",
  "aten.png", "polycom.png", "ruckus.png", "luxury.png",

];

export default function Partnerships() {
  return (
    <div className="partners-container">
      <div className="cover">
        <img src={handshakeImage} alt="" className="cover-image"/>
        <h1 className="cover-title">Our Partners</h1>
      </div>

      <div className="partners-grid">
        {enterprisePartners.map((fn,i) => (
          <div className="partner-box" key={`e${i}`}>
            <img
              src={`/partners/Enterprise/${fn}`}
              alt={`Enterprise Partner ${i+1}`}
              className="partner-image"
            />
          </div>
        ))}

        {digitalMediaPartners.map((fn,i) => (
          <div className="partner-box" key={`d${i}`}>
            <img
              src={`/partners/DigitalMedia/${fn}`}
              alt={`Digital Media Partner ${i+1}`}
              className="partner-image"
            />
          </div>
        ))}
      </div>

      <Chatbot />
    </div>
  );
}

