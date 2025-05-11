// import React, { useState } from 'react';
// import axios from 'axios';
// import './FootComp.css';
// import companyLogo from '../assets/commedialogo.jpg';
// import nlog from '../assets/nlog.jpg';
// import phoneIcon from '../assets/phone.png';
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// const FootComp = () => {
//   const [email, setEmail] = useState('');
//   const [statusMsg, setStatusMsg] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatusMsg('');
//     try {
//       await axios.post('/api/stay-in-touch', { email });
//       setStatusMsg('Thanks! We’ll be in touch soon.');
//       setEmail('');
//     } catch (err) {
//       console.error(err);
//       setStatusMsg('Oops—could not send your request.');
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo */}
//         <div className="left-section">
//           <img
//             src={companyLogo}
//             alt="Commedia Logo"
//             className="company-logo"
//           />
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Headquarters */}
//         <div className="middle-section">
//           <h3 className="section-title">HEADQUARTERS</h3>
//           <p className="address-text">
//             Commedia Solutions Private Ltd.<br />
//             408, Shelton Cubix, Sector 15,<br />
//             Plot no.87, CBD Belapur, Navi Mumbai - 400 614
//           </p>
//           <div className="contact-with-icon">
//             <img
//               src={phoneIcon}
//               alt="Phone"
//               className="footer-icon"
//             />
//             <p className="contact-text">+91 22 4965 8000</p>
//           </div>
//           <p className="contact-text">
//             ✉ sales@commediaindia.com
//           </p>
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Stay in Touch */}
//         <div className="right-section">
//           <h3 className="section-title">STAY IN TOUCH</h3>
//           <form
//             className="form-container"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="email"
//               placeholder="Enter your Mail"
//               className="email-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="submit-button"
//             >
//               SUBMIT
//             </button>
//           </form>
//           {statusMsg && (
//             <p className="status-message">{statusMsg}</p>
//           )}
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Follow Us */}
//         <div className="far-right-section">
//           <h3 className="section-title">FOLLOW US ON</h3>
//           <div className="social-icons">
//             <a
//               href="https://www.facebook.com/Commedia.Solutions.Pvt.Ltd/about/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF className="social-icon" />
//             </a>
//             <a
//               href="https://in.linkedin.com/company/commedia-solutions-pvt-ltd"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn className="social-icon" />
//             </a>
//             <a
//               href="https://twitter.com/commedia"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter className="social-icon" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Curve & Copyright */}
//       <div className="bottom-section">
//         <img
//           src={nlog}
//           alt="nlog"
//           className="red-curve"
//         />
//         <p className="website-text">www.commediaindia.com</p>
//       </div>
//     </footer>
//   );
// };

// export default FootComp;



////////////////v2 /////////////
// src/components/FootComp.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './FootComp.css';
// import companyLogo from '../assets/commedialogo.jpg';
// import nlog from '../assets/nlog.jpg';
// import phoneIcon from '../assets/phone.png';
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// const FootComp = () => {
//   const [email, setEmail] = useState('');
//   const [statusMsg, setStatusMsg] = useState('');
//   const [statusType, setStatusType] = useState(''); // 'success' | 'error'
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatusMsg('');
//     setStatusType('');
//     setLoading(true);

//     try {
//       await axios.post('/api/stay-in-touch', { email });
//       setStatusMsg('Thanks! We’ll be in touch soon.');
//       setStatusType('success');
//       setEmail('');
//     } catch (err) {
//       console.error(err);
//       setStatusMsg('Oops—could not send your request.');
//       setStatusType('error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo */}
//         <div className="left-section">
//           <img
//             src={companyLogo}
//             alt="Commedia Logo"
//             className="company-logo"
//           />
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Headquarters */}
//         <div className="middle-section">
//           <h3 className="section-title">HEADQUARTERS</h3>
//           <p className="address-text">
//             Commedia Solutions Private Ltd.<br />
//             408, Shelton Cubix, Sector 15,<br />
//             Plot no.87, CBD Belapur, Navi Mumbai - 400 614
//           </p>
//           <div className="contact-with-icon">
//             <img
//               src={phoneIcon}
//               alt="Phone"
//               className="footer-icon"
//             />
//             <p className="contact-text">+91 22 4965 8000</p>
//           </div>
//           <p className="contact-text">
//             ✉ sales@commediaindia.com
//           </p>
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Stay in Touch */}
//         <div className="right-section">
//           <h3 className="section-title">STAY IN TOUCH</h3>
//           <form
//             className="form-container"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="email"
//               placeholder="Enter your Mail"
//               className="email-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               disabled={loading}
//             />
//             <button
//               type="submit"
//               className="submit-button"
//               disabled={loading}
//             >
//               {loading ? <div className="loader"></div> : 'SUBMIT'}
//             </button>
//           </form>
//           {statusMsg && (
//             <p className={`status-message ${statusType}`}>
//               {statusMsg}
//             </p>
//           )}
//         </div>

//         <div className="vertical-divider"></div>

//         {/* Follow Us */}
//         <div className="far-right-section">
//           <h3 className="section-title">FOLLOW US ON</h3>
//           <div className="social-icons">
//             <a
//               href="https://www.facebook.com/Commedia.Solutions.Pvt.Ltd/about/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF className="social-icon" />
//             </a>
//             <a
//               href="https://in.linkedin.com/company/commedia-solutions-pvt-ltd"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn className="social-icon" />
//             </a>
//             <a
//               href="https://twitter.com/commedia"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter className="social-icon" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Curve & Copyright */}
//       <div className="bottom-section">
//         <img
//           src={nlog}
//           alt="nlog"
//           className="red-curve"
//         />
//         <p className="website-text">www.commediaindia.com</p>
//       </div>
//     </footer>
//   );
// };

// export default FootComp;

import React, { useState } from 'react';
import axios from 'axios';
import './FootComp.css';
import companyLogo from '../assets/commedialogo.jpg';
import nlog from '../assets/nlog.jpg';
import phoneIcon from '../assets/phone.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const FootComp = () => {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const clearStatus = () => {
    setTimeout(() => {
      setStatusMsg('');
      setStatusType('');
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('');
    setStatusType('');
    setLoading(true);

    try {
      await axios.post('/api/stay-in-touch', { email });
      setStatusMsg('Thanks! We’ll be in touch soon.');
      setStatusType('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatusMsg('Oops—could not send your request.');
      setStatusType('error');
    } finally {
      setLoading(false);
      clearStatus();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="left-section">
          <img src={companyLogo} alt="Commedia Logo" className="company-logo" />
        </div>
        <div className="vertical-divider" />

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
        <div className="vertical-divider" />

        {/* Stay in Touch */}
        <div className="right-section">
          <h3 className="section-title">STAY IN TOUCH</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Mail"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? <div className="loader" /> : 'SUBMIT'}
            </button>
          </form>
          {statusMsg && (
            <p className={`status-message ${statusType}`}>{statusMsg}</p>
          )}
        </div>
        <div className="vertical-divider" />

        {/* Follow Us */}
        <div className="far-right-section">
          <h3 className="section-title">FOLLOW US ON</h3>
          <div className="social-icons">
            <a href="https://facebook.com/Commedia.Solutions.Pvt.Ltd/about/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://linkedin.com/company/commedia-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://twitter.com/commedia" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Curve & Copyright */}
      <div className="bottom-section">
        <img src={nlog} alt="nlog" className="red-curve" />
        <p className="website-text">www.commediaindia.com</p>
      </div>
    </footer>
  );
};

export default FootComp;
