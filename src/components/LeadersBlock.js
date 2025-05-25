import React from "react";
import useScrollTop from '../hooks/useScrollTop';
const leaders = [
  {
    name: "Pawan Chandana",
    title: "Co-Founder",
    description: "Rocket Engineer turned Space Entrepreneur with a decade of experience in space launch vehicles.",
    image: "/images/pawan.jpg",
  },
  {
    name: "Bharath Daka",
    title: "Co-Founder",
    description: "Leads various tech teams and strategic initiatives. Experienced Electronics and Software Engineer.",
    image: "/images/bharath.jpg",
  },
  {
    name: "Gnanagandhi V",
    title: "Liquid Propulsion",
    description: "Padma Shri awardee & pioneer of cryogenic rocket technology in India. 40+ years of experience.",
    image: "/images/gnanagandhi.jpg",
  },
];

const LeadersBlock = () => {
  useScrollTop();
  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">
        Leadership and Core Team
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="relative mb-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gray-800 clip-path-custom"></div>
            </div>

            {/* Text Section */}
            <h3 className="text-lg font-bold text-gray-200">{leader.name}</h3>
            <p className="text-sm text-gray-400">{leader.title}</p>
            <p className="text-xs md:text-sm text-gray-300 mt-2">{leader.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadersBlock;
