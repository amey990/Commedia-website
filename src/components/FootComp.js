// import React, { useState } from 'react';
// import './FootComp.css';
// import companyLogo from '../assets/commedialogo.jpg';
// import nlog from '../assets/nlog.jpg';
// import facebookIcon from '../assets/facebook.jpg';
// import linkedinIcon from '../assets/linkedin.jpg';
// import twitterIcon from '../assets/twitter.png';
// import phoneIcon from '../assets/phone.png';
// import axios from 'axios';

// const FootComp = () => {
//   const [email, setEmail] = useState('');
//   const [statusMsg, setStatusMsg] = useState('');

//   const handleSubmit = async () => {
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setStatusMsg('Please enter a valid email address.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/send-email', { from: email });
//       setStatusMsg('Thanks! We have received your message.');
//       setEmail('');
//     } catch (error) {
//       setStatusMsg('Oops! Something went wrong.');
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Left Section - Logo */}
//         <div className="left-section">
//           <img src={companyLogo} alt="Commedia Logo" className="company-logo" />
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Middle Section - Address */}
//         <div className="middle-section">
//           <h3 className="section-title">HEADQUARTERS</h3>
//           <p className="address-text">
//             Commedia Solutions Private Ltd.<br />
//             408, Shelton Cubix, Sector 15,<br />
//             Plot no.87, CBD Belapur, Navi Mumbai - 400 614
//           </p>
//           <div className="contact-with-icon">
//             <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />
//             <p className="contact-text">+91 22 4965 8000</p>
//           </div>
//           <p className="contact-text">✉ sales@commediaindia.com</p>
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Right Section - Stay in Touch */}
//         <div className="right-section">
//           <h3 className="section-title">STAY IN TOUCH</h3>
//           <div className="form-container">
//             <input
//               type="email"
//               placeholder="Enter your Mail"
//               className="email-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
//           </div>
//           {statusMsg && <p className="status-message">{statusMsg}</p>}
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Social Media Section */}
//         <div className="far-right-section">
//           <h3 className="section-title">FOLLOW US ON</h3>
//           <div className="social-icons">
//             <a href="https://www.facebook.com/Commedia.Solutions.Pvt.Ltd/about/" target="_blank" rel="noopener noreferrer">
//               <img src={facebookIcon} alt="Facebook" className="social-icon" />
//             </a>
//             <a href="https://in.linkedin.com/company/commedia-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer">
//               <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
//             </a>
//             <a href="https://twitter.com/commedia" target="_blank" rel="noopener noreferrer">
//               <img src={twitterIcon} alt="Twitter" className="social-icon" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bottom-section">
//         <img
//           src={nlog}
//           alt="nlog"
//           className="red-curve"
//           style={{ width: "100%", maxWidth: "1000px", height: "auto", maxHeight: "600px", marginTop: "-110px" }}
//         />
//         <p className="website-text">www.commediaindia.com</p>
//       </div>
//     </footer>
//   );
// };

// export default FootComp;

import React, { useState } from 'react';
import './FootComp.css';
import companyLogo from '../assets/commedialogo.jpg';
import nlog from '../assets/nlog.jpg';
import phoneIcon from '../assets/phone.png';
import axios from 'axios';

// import our new SVG icon components
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const FootComp = () => {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatusMsg('Please enter a valid email address.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/send-email', { from: email });
      setStatusMsg('Thanks! We have received your message.');
      setEmail('');
    } catch {
      setStatusMsg('Oops! Something went wrong.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="left-section">
          <img src={companyLogo} alt="Commedia Logo" className="company-logo" />
        </div>

        <div className="vertical-divider"></div>

        {/* Headquarters */}
        <div className="middle-section">
          <h3 className="section-title">HEADQUARTERS</h3>
          <p className="address-text">
            Commedia Solutions Private Ltd.<br />
            408, Shelton Cubix, Sector 15,<br />
            Plot no.87, CBD Belapur, Navi Mumbai - 400 614
          </p>
          <div className="contact-with-icon">
            <img src={phoneIcon} alt="Phone" className="footer-icon" />
            <p className="contact-text">+91 22 4965 8000</p>
          </div>
          <p className="contact-text">✉ sales@commediaindia.com</p>
        </div>

        <div className="vertical-divider"></div>

        {/* Stay in Touch */}
        <div className="right-section">
          <h3 className="section-title">STAY IN TOUCH</h3>
          <div className="form-container">
            <input
              type="email"
              placeholder="Enter your Mail"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
          {statusMsg && <p className="status-message">{statusMsg}</p>}
        </div>

        <div className="vertical-divider"></div>

        {/* Follow Us */}
        <div className="far-right-section">
          <h3 className="section-title">FOLLOW US ON</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Commedia.Solutions.Pvt.Ltd/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://in.linkedin.com/company/commedia-solutions-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
            <a
              href="https://twitter.com/commedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Curve & Copyright */}
      <div className="bottom-section">
        {/* <img
          src={nlog}
          alt="nlog"
          className="red-curve"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: 'auto',
            maxHeight: '600px',
            marginTop: '-110px',
          }}
        /> */}
        <img
        src={nlog}
        alt="nlog"
        className="red-curve"
      />
        <p className="website-text">www.commediaindia.com</p>
      </div>
    </footer>
  );
};

export default FootComp;
