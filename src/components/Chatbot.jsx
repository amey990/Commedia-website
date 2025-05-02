// // src/components/Chatbot.jsx
// import React, { useState } from 'react';
// import './Chatbot.css';
// import { MessageCircle } from 'lucide-react'; // Icon from lucide-react

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="chatbot-container">
//           <iframe
//             src="https://csplcpal.com/"
//             title="Chatbot"
//             className="chatbot-iframe"
//           ></iframe>
//         </div>
//       )}

//       <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
//         <MessageCircle size={30} color="#fff" />
//       </button>
//     </>
//   );
// };

// export default Chatbot;


// import React, { useState } from 'react';
// import './Chatbot.css';
// import { MessageCircle, X } from 'lucide-react';
// // import { RiRobot2Line } from 'react-icons/ri';
// import { RiRobot3Line } from "react-icons/ri";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {isOpen && (
//         <div className="chatbot-container">
//           <div className="chatbot-header">
//             <div className="bot-info">
//               {/* <div className="bot-icon"></div> */}
//               <div className="bot-icon">
//                 <RiRobot3Line className="bot-icon-svg" />
//               </div>
//               <div className="bot-status">
//                 <span className="bot-title">CPAL</span>
//                 <div className="status-indicator">
//                   <span className="status-dot"></span>
//                   <span className="status-text">Online Now</span>
//                 </div>
//               </div>
//             </div>
//             <button 
//               className="close-btn" 
//               onClick={() => setIsOpen(false)}
//             >
//               <X size={20} color="#fff" />
//             </button>
//           </div>
//           <iframe
//             src="https://csplcpal.com/"
//             title="Chatbot"
//             className="chatbot-iframe"
//           />
//         </div>
//       )}

//       <button 
//         className="chatbot-toggle-btn" 
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <MessageCircle size={30} color="#fff" />
//       </button>
//     </>
//   );
// };

// export default Chatbot;



/// test ///
import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { MessageCircle, X } from 'lucide-react';
import { RiRobot2Line } from 'react-icons/ri';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preload the iframe on component mount
  useEffect(() => {
    const preloadIframe = document.createElement('iframe');
    preloadIframe.src = "https://csplcpal.com/";
    preloadIframe.style.display = 'none';
    document.body.appendChild(preloadIframe);

    return () => {
      document.body.removeChild(preloadIframe);
    };
  }, []);

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="chatbot-header">
          <div className="bot-info">
            <div className="bot-icon">
              <RiRobot2Line className="bot-icon-svg" />
            </div>
            <div className="bot-status">
              <span className="bot-title">c-PAL</span>
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Online Now</span>
              </div>
            </div>
          </div>
          <button 
            className="close-btn" 
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        {isLoading && (
          <div className="chatbot-loader">
            <div className="loading-spinner"></div>
          </div>
        )}
        <iframe
          src="https://csplcpal.com/"
          title="Chatbot"
          className="chatbot-iframe"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>

      <button 
        className="chatbot-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={30} color="#fff" />
      </button>
    </>
  );
};

export default Chatbot;
