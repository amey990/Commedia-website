// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";
// import logo from "../assets/commedialogo.jpg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [showSolutions, setShowSolutions] = useState(false);
//   const [showVerticals, setShowVerticals] = useState(false);
//   const closeTimeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(closeTimeoutRef.current);
//     setOpen(true);
//   };
//   const handleMouseLeave = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setOpen(false);
//       setShowSolutions(false);
//       setShowVerticals(false);
//     }, 300);
//   };

//   const handleLinkClick = () => {
//     setDrawerOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="Commedia Logo" />
//             </Link>
//           </div>

//           {/* hamburger only on mobile */}
//           <div
//             className="mobile-menu-icon"
//             onClick={() => setDrawerOpen(true)}
//           >
//             <Menu size={24} />
//           </div>

//           <ul className="nav-links">
//             <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
//             <li><Link to="/verticals" onClick={handleLinkClick}>VERTICALS</Link></li>
//             <li><Link to="/products" onClick={handleLinkClick}>PRODUCTS</Link></li>
//             <li><Link to="/solutions" onClick={handleLinkClick}>SOLUTIONS</Link></li>
//             <li><Link to="/partnerships" onClick={handleLinkClick}>PARTNERSHIPS</Link></li>

//             <li
//               className="dropdown"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link to="/case-studies" className="dropdown-toggle" onClick={handleLinkClick}>
//                 CASE STUDIES ▾
//               </Link>

//               {open && (
//                 <div
//                   className="dropdown-menu full-vertical"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="menu-sections">
//                     <div
//                       className="dropdown-item"
//                       onMouseEnter={() => {
//                         setShowSolutions(true);
//                         setShowVerticals(false);
//                       }}
//                     >
//                       <span className="dropdown-heading">SOLUTIONS&gt;</span>
//                     </div>
//                     <div
//                       className="dropdown-item"
//                       onMouseEnter={() => {
//                         setShowVerticals(true);
//                         setShowSolutions(false);
//                       }}
//                     >
//                       <span className="dropdown-heading">VERTICALS&gt;</span>
//                     </div>
//                   </div>

//                   {showSolutions && (
//                     <ul className="submenu-panel">
//                       <li><Link to="/case-studies/data-center" onClick={handleLinkClick}>Data Center</Link></li>
//                       <li><Link to="/case-studies/sd-wan" onClick={handleLinkClick}>SD-WAN</Link></li>
//                       <li><Link to="/case-studies/network-security" onClick={handleLinkClick}>Network Security</Link></li>
//                       <li><Link to="/case-studies/wireless-networking" onClick={handleLinkClick}>Wireless Networking</Link></li>
//                       <li><Link to="/case-studies/digital-media" onClick={handleLinkClick}>Digital Media</Link></li>
//                     </ul>
//                   )}
//                   {showVerticals && (
//                     <ul className="submenu-panel">
//                       <li><Link to="/verticals/ver1" onClick={handleLinkClick}>Service Provider</Link></li>
//                       <li><Link to="/verticals/ver2" onClick={handleLinkClick}>Digital Media</Link></li>
//                       <li><Link to="/verticals/ver3" onClick={handleLinkClick}>Enterprise</Link></li>
//                       <li><Link to="/verticals/ver4" onClick={handleLinkClick}>Government</Link></li>
//                     </ul>
//                   )}
//                 </div>
//               )}
//             </li>

//             <li><Link to="/careers" onClick={handleLinkClick}>CAREERS</Link></li>
//             <li><Link to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* mobile drawer (only visible ≤768px) */}
//       <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
//         <div className="close-icon" onClick={() => setDrawerOpen(false)}>
//           <X size={24} />
//         </div>
//         <ul className="mobile-nav-links">
//           <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
//           <li><Link to="/verticals" onClick={handleLinkClick}>VERTICALS</Link></li>
//           <li><Link to="/products" onClick={handleLinkClick}>PRODUCTS</Link></li>
//           <li><Link to="/solutions" onClick={handleLinkClick}>SOLUTIONS</Link></li>
//           <li><Link to="/partnerships" onClick={handleLinkClick}>PARTNERSHIPS</Link></li>
//           <li><Link to="/case-studies" onClick={handleLinkClick}>CASE STUDIES</Link></li>
//           <li><Link to="/careers" onClick={handleLinkClick}>CAREERS</Link></li>
//           <li><Link to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/commedialogo.jpg";

const Navbar = () => {
  // Desktop dropdown state
  const [open, setOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showVerticals, setShowVerticals] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Mobile drawer + accordion state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [verOpen, setVerOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setShowSolutions(false);
      setShowVerticals(false);
    }, 300);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setCaseOpen(false);
    setSolOpen(false);
    setVerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" onClick={closeDrawer}>
              <img src={logo} alt="Commedia Logo" />
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            <li><Link to="/" onClick={closeDrawer}>HOME</Link></li>
            <li><Link to="/verticals" onClick={closeDrawer}>VERTICALS</Link></li>
            <li><Link to="/products" onClick={closeDrawer}>PRODUCTS</Link></li>
            <li><Link to="/solutions" onClick={closeDrawer}>SOLUTIONS</Link></li>
            <li><Link to="/partnerships" onClick={closeDrawer}>PARTNERSHIPS</Link></li>

            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="dropdown-toggle">CASE STUDIES ▾</span>
              {open && (
                <div
                  className="dropdown-menu full-vertical"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="menu-sections">
                    <div
                      className="dropdown-item"
                      onMouseEnter={() => {
                        setShowSolutions(true);
                        setShowVerticals(false);
                      }}
                    >
                      <span className="dropdown-heading">SOLUTIONS&gt;</span>
                    </div>
                    <div
                      className="dropdown-item"
                      onMouseEnter={() => {
                        setShowVerticals(true);
                        setShowSolutions(false);
                      }}
                    >
                      <span className="dropdown-heading">VERTICALS&gt;</span>
                    </div>
                  </div>
                  {showSolutions && (
                    <ul className="submenu-panel">
                      <li><Link to="/case-studies/data-center" onClick={closeDrawer}>Data Center</Link></li>
                      <li><Link to="/case-studies/sd-wan" onClick={closeDrawer}>SD-WAN</Link></li>
                      <li><Link to="/case-studies/network-security" onClick={closeDrawer}>Network Security</Link></li>
                      <li><Link to="/case-studies/wireless-networking" onClick={closeDrawer}>Wireless Networking</Link></li>
                      <li><Link to="/case-studies/digital-media" onClick={closeDrawer}>Digital Media</Link></li>
                    </ul>
                  )}
                  {showVerticals && (
                    <ul className="submenu-panel">
                      <li><Link to="/verticals/ver1" onClick={closeDrawer}>Service Provider</Link></li>
                      <li><Link to="/verticals/ver2" onClick={closeDrawer}>Digital Media</Link></li>
                      <li><Link to="/verticals/ver3" onClick={closeDrawer}>Enterprise</Link></li>
                      <li><Link to="/verticals/ver4" onClick={closeDrawer}>Government</Link></li>
                    </ul>
                  )}
                </div>
              )}
            </li>

            <li><Link to="/careers" onClick={closeDrawer}>CAREERS</Link></li>
            <li><Link to="/about" onClick={closeDrawer}>ABOUT US</Link></li>
          </ul>

          {/* Mobile hamburger */}
          <div className="mobile-menu-icon" onClick={() => setDrawerOpen(true)}>
            <Menu size={24} />
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
        <div className="close-icon" onClick={closeDrawer}>
          <X size={24} />
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeDrawer}>HOME</Link></li>
          <li><Link to="/verticals" onClick={closeDrawer}>VERTICALS</Link></li>
          <li><Link to="/products" onClick={closeDrawer}>PRODUCTS</Link></li>
          <li><Link to="/solutions" onClick={closeDrawer}>SOLUTIONS</Link></li>
          <li><Link to="/partnerships" onClick={closeDrawer}>PARTNERSHIPS</Link></li>

          {/* Case Studies with accordion */}
          <li>
            <div className="mobile-accordion-header">
              <span>CASE STUDIES</span>
              <span
                className="mobile-accordion-arrow"
                onClick={() => setCaseOpen(!caseOpen)}
              >
                {caseOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
              </span>
            </div>
            {caseOpen && (
              <div className="mobile-submenu-block">
                <div
                  className="mobile-sub-toggle"
                  onClick={() => setSolOpen(!solOpen)}
                >
                  <span>SOLUTIONS</span>
                  {solOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                </div>
                {solOpen && (
                  <ul className="mobile-submenu">
                    <li><Link to="/case-studies/data-center" onClick={closeDrawer}>Data Center</Link></li>
                    <li><Link to="/case-studies/sd-wan" onClick={closeDrawer}>SD-WAN</Link></li>
                    <li><Link to="/case-studies/network-security" onClick={closeDrawer}>Network Security</Link></li>
                    <li><Link to="/case-studies/wireless-networking" onClick={closeDrawer}>Wireless Networking</Link></li>
                    <li><Link to="/case-studies/digital-media" onClick={closeDrawer}>Digital Media</Link></li>
                  </ul>
                )}

                <div
                  className="mobile-sub-toggle"
                  onClick={() => setVerOpen(!verOpen)}
                >
                  <span>VERTICALS</span>
                  {verOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                </div>
                {verOpen && (
                  <ul className="mobile-submenu">
                    <li><Link to="/verticals/ver1" onClick={closeDrawer}>Service Provider</Link></li>
                    <li><Link to="/verticals/ver2" onClick={closeDrawer}>Digital Media</Link></li>
                    <li><Link to="/verticals/ver3" onClick={closeDrawer}>Enterprise</Link></li>
                    <li><Link to="/verticals/ver4" onClick={closeDrawer}>Government</Link></li>
                  </ul>
                )}
              </div>
            )}
          </li>

          <li><Link to="/careers" onClick={closeDrawer}>CAREERS</Link></li>
          <li><Link to="/about" onClick={closeDrawer}>ABOUT US</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;


