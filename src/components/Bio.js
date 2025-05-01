import React, { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./Bio.css";
import leader1 from "../assets/leader1.jpg";
import leader2 from "../assets/leader2.jpg";
import leader3 from "../assets/leader3.jpg";
import leader4 from "../assets/leader4.jpg";
import leader5 from "../assets/leader5.jpg";
import leader6 from "../assets/leader6.jpg";
import leader7 from "../assets/leader7.jpg";
import leader8 from "../assets/leader8.jpg";
import Customers from "./Customers";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const bios = [
    {
      img: leader1,
      name: "C S Raghava Rao",
      title: "FOUNDER AND MD",
      description: `He has more than 30 years of experience in the telecom industry, including setting up businesses, business development, product development, service delivery, and contract management. He has proven expertise in establishing businesses, building customer relationships, leading teams, and delivering superior quality services.
  
  He holds a degree in Electronics and Communication Engineering from REC Warangal and is a Management Graduate from SOM, IIT Powai. He has worked across organizations such as Bharti Airtel Ltd (Gurgaon), Comsat Max Ltd (Mumbai), C-DoT (Bangalore), Indian Broadcasting Service, and HAL (Hyderabad). He last served as Vice President at Bharti Airtel Ltd. before founding Commedia Solutions.`
    },
    {
      img: leader2,
      name: "Shri C Subba Rao",
      title: "DIRECTOR",
      description: `Shri C Subba Rao received his Master’s in Engineering from JNTU Hyderabad. A dynamic and versatile leader, he has over 40 years of industry experience and has held major roles in BHEL, Hyderabad.
  
  His specialization includes managing mega projects, commercial and financial operations, contract management, program management, and project delivery. He is the Advisor of Commedia Solutions and was instrumental in the formation of the company.`
    },
    {
      img: leader3,
      name: "C V Ramani",
      title: "DIRECTOR",
      description: `C V Ramani is a Postgraduate from Osmania University, Hyderabad. She has rich expertise in handling multidimensional assignments and has played an anchoring role since the inception of the company.
  
  She is the Director of Commedia Solutions Pvt. Ltd. and was instrumental in its formation.`
    },
    {
      img: leader4,
      name: "Prof.G.Padmavati",
      title: "ADVISOR - FINANCE",
      description: `She holds a Master's degree in Commerce from Osmania University and is currently working as a Finance Professor at IBS. She has over 15 years of strong academic experience at ICFAI University and 3 years of professional experience as an Articled Trainee with M/s Komandoor & Co, Chartered Accountants, Hyderabad.
  
  She is a Fellow Member of the Institute of Chartered Accountants of India and also holds a Cost and Works Accountants (Intermediate) Degree from The Institute of Cost Accountants of India. She serves as a member of the Internal Audit Committee at Commedia Solutions.`
    },
    {
      img: leader5,
      name: "Harshad Awasare",
      title: "CHIEF OPERATING OFFICER",
      description: `Harshad has more than 22 years of experience in sales, marketing, and business development, with 15 years in the telecom domain. He has been associated with Commedia since 2018 and drives various business verticals, managing both global and domestic business operations.
  
  He holds an Engineering degree from SPCE, Mumbai, and a Master's in Management Studies from Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai. His previous roles span Bharti Airtel, Philips, iSAT Africa, and Ingram Micro. He has worked across geographies and has strong expertise in mentoring sales, pre-sales, and product management teams.`
    },
    {
      img: leader6,
      name: "Subeeth Kotian",
      title: "VICE PRESIDENT - COMMERCIAL",
      description: `Subeeth has been associated with Commedia since 2013. He brings over 30 years of experience in supply chain, commercial functions, and finance. He currently heads the Commercial, Supply Chain, and Admin functions.
  
  Previously, he led the Supply Chain function for the Enterprise Division (West) at Bharti Airtel Ltd. He specializes in handling international supplies and logistics and has experience across industries such as engineering and pharmaceuticals.`
    },
    {
      img: leader7,
      name: "Sajan John",
      title: "SENIOR VICE PRESIDENT - BSG & MANAGED SERVICES",
      description: `Sajan has been with Commedia since 2018. He heads Service Delivery and has over 17 years of rich experience in Telecom Engineering, Project Management, and Operations & Maintenance.
  
  He is a double CCIE-certified professional in Routing & Switching and Security, with proficiency in designing and implementing large-scale IP/MPLS VPN networks and SDH/PDH networks. He leads multiple teams and projects across various locations.`
    },
    {
      img: leader8,
      name: "Deepak Trisal",
      title: "VICE PRESIDENT - SERVICE DELIVERY",
      description: `Deepak joined Commedia in March 2023 and heads the Service Delivery team. He has over 24 years of experience in telecom engineering, project management, and operations.
  
  Previously, he led the Government and ISP vertical for service delivery at Bharti Airtel Ltd. (West), where he successfully deployed large projects for oil companies and banking clients. He holds a degree in Electronics and Communication Engineering from Kolkata University and an MBA from Sikkim Manipal University.`
    }
  ];
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const Bio = () => {
  const history = useHistory();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // wait for DOM to load
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bio-page">
      <button onClick={() => history.push("/about")} className="back-btn">
        ← Back to About Us
      </button>

      <h1 className="bio-heading">LEADERSHIP</h1>

      <div className="bios-container">
        {bios.map((person, index) => (
          <div key={index} id={slugify(person.name)} className="bio-card">
            <img src={person.img} alt={person.name} className="bio-img" />
            <div className="bio-text">
              <h2>{person.name}</h2>
              <h4>{person.title}</h4>
              <p>{person.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="customers-container">
        <Customers />
      </div>
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default Bio;