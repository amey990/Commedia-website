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


// v2 working one //
// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
// import "./Navbar.css";
// import logo from "../assets/commedialogo.jpg";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
//   const [mobileSolOpen, setMobileSolOpen] = useState(false);
//   const [mobileVerOpen, setMobileVerOpen] = useState(false);

//   const closeDrawer = () => {
//     setDrawerOpen(false);
//     setMobileCaseOpen(false);
//     setMobileSolOpen(false);
//     setMobileVerOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="logo">
//             <img src={logo} alt="Commedia Logo" />
//           </Link>
//           <div
//             className="mobile-menu-icon"
//             onClick={() => setDrawerOpen(true)}
//           >
//             <Menu size={24} />
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/">HOME</Link></li>
//             <li><Link to="/verticals">VERTICALS</Link></li>
//             <li><Link to="/products">PRODUCTS</Link></li>
//             <li><Link to="/solutions">SOLUTIONS</Link></li>
//             <li><Link to="/partnerships">PARTNERSHIPS</Link></li>
//             <li className="dropdown">
//               <span className="dropdown-toggle">CASE STUDIES ▾</span>
//               <div className="dropdown-menu full-vertical">
//                 {/* desktop dropdown… */}
//               </div>
//             </li>
//             <li><Link to="/careers">CAREERS</Link></li>
//             <li><Link to="/about">ABOUT US</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       <div className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
//         <div className="close-icon" onClick={closeDrawer}>
//           <X size={24} />
//         </div>

//         <ul className="mobile-nav-links">
//           <li><Link to="/" onClick={closeDrawer}>HOME</Link></li>
//           <li><Link to="/verticals" onClick={closeDrawer}>VERTICALS</Link></li>
//           <li><Link to="/products" onClick={closeDrawer}>PRODUCTS</Link></li>
//           <li><Link to="/solutions" onClick={closeDrawer}>SOLUTIONS</Link></li>
//           <li><Link to="/partnerships" onClick={closeDrawer}>PARTNERSHIPS</Link></li>

//           {/* Case Studies Accordion */}
//           <li
//             className="mobile-accordion-header"
//             onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
//           >
//             <span>CASE STUDIES</span>
//             {mobileCaseOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
//           </li>

//           {mobileCaseOpen && (
//             <>
//               <li
//                 className="mobile-sub-toggle"
//                 onClick={() => {
//                   setMobileSolOpen(!mobileSolOpen);
//                   setMobileVerOpen(false);
//                 }}
//               >
//                 <span>SOLUTIONS</span>
//                 {mobileSolOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
//               </li>
//               {mobileSolOpen && (
//                 <ul className="mobile-submenu">
//                   <li><Link to="/case-studies/data-center"   onClick={closeDrawer}>Data Center</Link></li>
//                   <li><Link to="/case-studies/sd-wan"        onClick={closeDrawer}>SD-WAN</Link></li>
//                   <li><Link to="/case-studies/network-security" onClick={closeDrawer}>Network Security</Link></li>
//                   <li><Link to="/case-studies/wireless-networking" onClick={closeDrawer}>Wireless Networking</Link></li>
//                   <li><Link to="/case-studies/digital-media" onClick={closeDrawer}>Digital Media</Link></li>
//                 </ul>
//               )}

//               <li
//                 className="mobile-sub-toggle"
//                 onClick={() => {
//                   setMobileVerOpen(!mobileVerOpen);
//                   setMobileSolOpen(false);
//                 }}
//               >
//                 <span>VERTICALS</span>
//                 {mobileVerOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
//               </li>
//               {mobileVerOpen && (
//                 <ul className="mobile-submenu">
//                   <li><Link to="/verticals/ver1" onClick={closeDrawer}>Service Provider</Link></li>
//                   <li><Link to="/verticals/ver2" onClick={closeDrawer}>Digital Media</Link></li>
//                   <li><Link to="/verticals/ver3" onClick={closeDrawer}>Enterprise</Link></li>
//                   <li><Link to="/verticals/ver4" onClick={closeDrawer}>Government</Link></li>
//                 </ul>
//               )}
//             </>
//           )}

//           <li><Link to="/careers" onClick={closeDrawer}>CAREERS</Link></li>
//           <li><Link to="/about" onClick={closeDrawer}>ABOUT US</Link></li>
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileVerOpen, setMobileVerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileCaseOpen(false);
    setMobileSolOpen(false);
    setMobileVerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Commedia Logo" />
          </Link>
          <div
            className="mobile-menu-icon"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={24} />
          </div>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/verticals">VERTICALS</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/solutions">SOLUTIONS</Link></li>
            <li><Link to="/partnerships">PARTNERSHIPS</Link></li>
            <li className="dropdown">
              <span className="dropdown-toggle">CASE STUDIES ▾</span>
              <div className="dropdown-menu full-vertical">
                {/* desktop dropdown… */}
              </div>
            </li>
            <li><Link to="/careers">CAREERS</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
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

          {/* Case Studies Accordion */}
          <li
            className="mobile-accordion-header"
            onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
          >
            <span>CASE STUDIES</span>
            {mobileCaseOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </li>

          {mobileCaseOpen && (
            <>
              <li
                className="mobile-sub-toggle"
                onClick={() => {
                  setMobileSolOpen(!mobileSolOpen);
                  setMobileVerOpen(false);
                }}
              >
                <span>SOLUTIONS</span>
                {mobileSolOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
              </li>
              {mobileSolOpen && (
                <ul className="mobile-submenu">
                  <li><Link to="/case-studies/data-center"   onClick={closeDrawer}>Data Center</Link></li>
                  <li><Link to="/case-studies/sd-wan"        onClick={closeDrawer}>SD-WAN</Link></li>
                  <li><Link to="/case-studies/network-security" onClick={closeDrawer}>Network Security</Link></li>
                  <li><Link to="/case-studies/wireless-networking" onClick={closeDrawer}>Wireless Networking</Link></li>
                  <li><Link to="/case-studies/digital-media" onClick={closeDrawer}>Digital Media</Link></li>
                </ul>
              )}

              <li
                className="mobile-sub-toggle"
                onClick={() => {
                  setMobileVerOpen(!mobileVerOpen);
                  setMobileSolOpen(false);
                }}
              >
                <span>VERTICALS</span>
                {mobileVerOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
              </li>
              {mobileVerOpen && (
                <ul className="mobile-submenu">
                  <li><Link to="/verticals/ver1" onClick={closeDrawer}>Service Provider</Link></li>
                  <li><Link to="/verticals/ver2" onClick={closeDrawer}>Digital Media</Link></li>
                  <li><Link to="/verticals/ver3" onClick={closeDrawer}>Enterprise</Link></li>
                  <li><Link to="/verticals/ver4" onClick={closeDrawer}>Government</Link></li>
                </ul>
              )}
            </>
          )}

          <li><Link to="/careers" onClick={closeDrawer}>CAREERS</Link></li>
          <li><Link to="/about" onClick={closeDrawer}>ABOUT US</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
