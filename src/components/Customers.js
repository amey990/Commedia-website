import React, { useRef } from "react";
import "./Customers.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import tata from "../assets/tata.jpg";
import encompass from "../assets/encompass.png";
import airtel from "../assets/airtel.jpg";
import disney from "../assets/disney.png";
import cincom from "../assets/cincom.png";
import globecast from "../assets/globecast.png";
import ntt from "../assets/ntt.png";
import pccw from "../assets/pccw.png";
import ses from "../assets/ses.png";
import sony from "../assets/sony.png";
import stc from "../assets/stc.png";
import star from "../assets/star.png";

const Customers = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const logos = [
    tata,
    encompass,
    airtel,
    disney,
    cincom,
    globecast,
    ntt,
    pccw,
    ses,
    star,
    sony,
    stc
  ];

  return (
    <div className="customers-section">
      <h2 className="customers-heading">VALUABLE CUSTOMERS</h2>
      <div className="customers-wrapper">
        <FaChevronLeft className="arrow left-arrow" onClick={scrollLeft} />
        <div className="customers-slider" ref={sliderRef}>
          {logos.map((logo, index) => (
            <img
            key={index}
            src={logo}
            alt={`Customer ${index + 1}`}
            className={`customer-logo ${
              [ses, sony, stc].includes(logo) ? "small-logo" : ""
            }`}
          />
          
          ))}
        </div>
        <FaChevronRight className="arrow right-arrow" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default Customers;
