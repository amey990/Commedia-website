import LAC from "./LAC";
import TeamGrid from "./TeamGrid";
import Vision from "./Vision";
import Journey from "./Journey";
import Customers from "./Customers";
import teamBg from "../assets/team.jpg"; // ✅ Import team.jpg
import Our from "./Our";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const AboutUs = () => {
  return (
    <div>
      {/* 🔴 Background Image Section Before LAC */}
      <div 
        style={{
          backgroundImage: `url(${teamBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // ✅ Adjust height if needed
          width: "100%",
        }}
      >
      </div>
      <Vision />
      <LAC/>
      <TeamGrid />
      <Journey/>
      <Our/>
      <Customers/>
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default AboutUs;
