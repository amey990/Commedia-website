// import React, { useState } from "react";
// import "./Career.css";
// import uploadIcon from "../assets/upload-icon.png";
// import careerImage1 from "../assets/caa.jpeg";
// import Chatbot from "../components/Chatbot"; // Import chatbot component

// const Career = () => {
//   const [resume, setResume] = useState(null);
//   const [department, setDepartment] = useState("");

//   const handleFileChange = (event) => {
//     setResume(event.target.files[0]);
//   };

//   return (
//     <div className="career-container">
//       {/* Left Side - Static Image */}
//       <div className="career-left">
//         <div className="career-image-container">
//           <img src={careerImage1} alt="Career Future" className="career-image" />
//         </div>
//       </div>

//       {/* Right Side - Form Section */}
//       <div className="career-right">
//         <h2>Transform Your Career with Us</h2>
//         <form>
//           <label>Name</label>
//           <input type="text" placeholder="Enter your name" required />

//           <label>Phone Number</label>
//           <input type="tel" placeholder="Enter your phone number" required />

//           <label>Email ID</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Preferred Role</label>
//           <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
//             <option value="">Select Role</option>
//             <option value="Business Development">Business Development</option>
//             <option value="Business Solution Group">Business Solution Group</option>
//             <option value="PMGT">Project Management</option>
//             <option value="Software">Software</option>
//             <option value="Finance">Finance</option>
//             <option value="Cloud Solutions">Cloud Solutions</option>
//             <option value="HR">HR</option>
//             <option value="Service Delivery">Service Delivery</option>
//             <option value="Network Operations">Network Operations</option>
//           </select>

//           <label>Upload Your Resume</label>
//           <div className="resume-submit-container">
//             <div className="file-upload">
//               <input type="file" onChange={handleFileChange} />
//               <div className="upload-box">
//                 <img src={uploadIcon} alt="Upload" />
//                 <span>{resume ? resume.name : "Click to Upload"}</span>

               
//               </div>
//             </div>

//             <button type="submit" className="submit-btn">Submit</button>
//           </div>
//         </form>
//       </div>
//       <Chatbot /> {/* Add Chatbot here */}
//     </div>
//   );
// };

// export default Career;



/// test ///

import React, { useState, useRef } from "react"; 
import "./Career.css";
import uploadIcon from "../assets/upload-icon.png";
import careerImage1 from "../assets/caa.jpeg";
import Chatbot from "../components/Chatbot";

const Career = () => {
  const [resume, setResume] = useState(null);
  const [department, setDepartment] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      setResume(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setResume(null);
    // reset the actual file input so you can re-select the same file if needed
    fileInputRef.current.value = "";
  };

  return (
    <div className="career-container">
      {/* Left Side - Static Image */}
      <div className="career-left">
        <div className="career-image-container">
          <img
            src={careerImage1}
            alt="Career Future"
            className="career-image"
          />
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="career-right">
        <h2>Transform Your Career with Us</h2>
        <form>
        <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Email ID</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Preferred Role</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Business Development">Business Development</option>
            <option value="Business Solution Group">
              Business Solution Group
            </option>
            <option value="PMGT">Project Management</option>
            <option value="Software">Software</option>
            <option value="Finance">Finance</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="HR">HR</option>
            <option value="Service Delivery">Service Delivery</option>
            <option value="Network Operations">Network Operations</option>
          </select>
          <label>Upload Your Resume</label>
          <div className="resume-submit-container">
            <div className="file-upload">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
              />
              {resume && (
                <div
                  className="remove-file"
                  onClick={clearFile}
                  title="Remove file"
                >
                  ×
                </div>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Chatbot />
    </div>
  );
};

export default Career;
