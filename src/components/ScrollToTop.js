// // src/components/ScrollToTop.js
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly scroll to top
    // Optional: Smooth scrolling (uncomment if preferred)
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;