import React, { useState } from "react";
import "./CareerForm.css"; // Make sure to create and import this CSS file

const CareerForm = () => {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <div className="career-container">
      <h2 className="career-title">Transform Your Career with Us</h2>
      <form className="career-form">
        <input type="text" placeholder="Enter your name" required />
        <input type="text" placeholder="Enter your phone number" required />
        <input type="email" placeholder="Enter your email" required />
        
        <div className="file-upload">
          <label>Upload Your Resume:</label>
          <input type="file" onChange={handleResumeUpload} />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CareerForm;
