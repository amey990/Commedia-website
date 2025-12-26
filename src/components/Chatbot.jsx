
import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { MessageCircle } from 'lucide-react';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showTag, setShowTag] = useState(false);

  useEffect(() => {
    const preloadIframe = document.createElement('iframe');
    // preloadIframe.src = "https://csplcpal.com/";
    preloadIframe.src = "https://cpal.cspllabs.com/";
    preloadIframe.style.display = 'none';
    document.body.appendChild(preloadIframe);

    // Show the tag on initial load
    setShowTag(true);

    return () => {
      document.body.removeChild(preloadIframe);
    };
  }, []);

  return (
    <>
      {/* Chatbox Container */}
      <div className={`chatbot-container ${isOpen ? 'visible' : 'hidden'}`}>
        

        {isLoading && (
          <div className="chatbot-loader">
            <div className="loading-spinner"></div>
          </div>
        )}

        <iframe
          src="https://cpal.commedialabs.com"
          title="Chatbot"
          className="chatbot-iframe"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>

      {/* Helper Tag – shows on load and when chatbot is closed */}
      {showTag && !isOpen && (
        <div className="chatbot-tag">Need Help? C-Pal is Here</div>
      )}

      {/* Toggle Button */}
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


