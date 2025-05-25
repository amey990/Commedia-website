import React from "react";
import visionImg from "../assets/vis.png";
import missionImg from "../assets/mis.jpg";
import valuesImg from "../assets/val.jpg";
import "./Vision.css";
import useScrollTop from '../hooks/useScrollTop';

const Vision = () => {
  useScrollTop();
  return (
    <div className="vision-container">
      <h2 className="section-title">Commedia Vision, Mission & Values</h2>

      {/* Vision & Mission Cards */}
      <div className="cards-container">
        {/* Vision Image */}
        <div className="card">
          <img src={visionImg} alt="Vision" />
        </div>

        {/* Vision Text */}
        <div className="card">
          <div className="text-overlay">
            <p>"To be a premier provider of communication and media solutions. "</p>
          </div>
        </div>

        {/* Mission Image */}
        <div className="card">
          <img src={missionImg} alt="Mission" />
        </div>

        {/* Mission Text */}
        <div className="card">
          <div className="text-overlay">
            <p>
              "Constant focus on customer expectations and value creation. Provide innovative solutions, making a difference in the marketplace."</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-container">
        <div className="values-content">
          <p>
            " Commedia is a Pan India service provider with a growing global
            presence, delivering innovative IT solutions tailored for
            enterprises. Our passion lies in creating scalable, secure, and
            smart digital products that drive business transformation. With
            deep industry expertise and a future-ready approach, we help
            organizations thrive in a digital world. Experience the power of
            Commedia — where technology meets purpose. "</p>
        </div>
        <div className="values-image-container">
          <img src={valuesImg} alt="Values" className="values-image" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
