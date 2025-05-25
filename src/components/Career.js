
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Career.css';
import careerImage1 from '../assets/caa.jpeg';
import Chatbot from '../components/Chatbot';
import useScrollTop from '../hooks/useScrollTop';

const Career = () => {
  useScrollTop();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [resume, setResume] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' | 'error'
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const clearStatus = () => {
    setTimeout(() => {
      setStatusMsg('');
      setStatusType('');
    }, 3000);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      setResume(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setResume(null);
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('');
    setStatusType('');
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('role', department);
    formData.append('resume', resume);

    try {
      await axios.post('/api/careers-apply', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatusMsg('Application submitted successfully.');
      setStatusType('success');
      // reset form
      setName('');
      setPhone('');
      setEmail('');
      setDepartment('');
      clearFile();
    } catch (err) {
      console.error('Careers submit error:', err);
      setStatusMsg('Submission failed—please try again.');
      setStatusType('error');
    } finally {
      setLoading(false);
      clearStatus();
    }
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
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />

          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <label>Preferred Role</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Select Role</option>
            <option value="Business Development">Business Development</option>
            <option value="Business Solution Group">Business Solution Group</option>
            <option value="Project Management">Project Management</option>
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
                required
                disabled={loading}
              />
              {resume && !loading && (
                <div
                  className="remove-file"
                  onClick={clearFile}
                  title="Remove file"
                >
                  ×
                </div>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? <div className="loader" /> : 'Submit'}
            </button>
          </div>
        </form>

        {statusMsg && (
          <p className={`status-message ${statusType}`}>
            {statusMsg}
          </p>
        )}
      </div>

      {/* Chatbot (unchanged) */}
      <Chatbot />
    </div>
  );
};

export default Career;

