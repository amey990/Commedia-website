import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this



import "./TeamGrid.css";
import leader1 from "../assets/leader1.jpg";
import leader2 from "../assets/leader2.jpg";
import leader3 from "../assets/leader3.jpg";
import leader4 from "../assets/leader4.jpg";
import leader5 from "../assets/leader5.jpg";
import leader6 from "../assets/leader6.jpg";
import leader7 from "../assets/leader7.jpg";
import leader8 from "../assets/leader8.jpg";

const leaders = [
  { img: leader1, name: "C S Raghava Rao", title: "Founder & MD", class: "member-1" },
  { img: leader2, name: "Shri C Subba Rao", title: "Director", class: "member-2" },
  { img: leader3, name: "C V Ramani", title: "Director", class: "member-3" },
  { img: leader4, name: "Prof.G.Padmavati", title: "Advisor Finance ", class: "member-4" },
  { img: leader5, name: "Harshad Awasare", title: "Chief Operating Officer", class: "member-5" },
  { img: leader6, name: "Subeeth Kotian", title: "Vice-President Commercial", class: "member-6" },
  { img: leader7, name: "Sajan John", title: "Senior Vice president-BSG & Managed Services", class: "member-7" },
  { img: leader8, name: "Deepak Trisal", title: "Vice President-Service Delivery", class: "member-8" }
];

const TeamGrid = () => {
  return (
    <div className="team-grid-container">
      <div className="team-box">
        <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
          Leadership and Core Team
        </h2>
        
        <div className="team-grid">
          {leaders.map((leader, index) => (
            <div key={index} className={`team-member ${leader.class}`}>
              <div className="member-box">
                <div className="custom-shape">
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h3>{leader.name}</h3>
                <p>{leader.title}</p>
                <Link
  to={{
    pathname: "/bio",
    state: { leader } // ✅ Pass leader data here
  }}
  className="read-bio-btn"
>
  Read Bio
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
