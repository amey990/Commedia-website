import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Solutions from "./components/Solutions";
import SolutionMain from "./components/SolutionMain";
import Products from "./components/Products";
import ProductMain from "./components/ProductMain";
import Achievements from "./components/Achievements";
import Customers from "./components/Customers";
import Partnerships from "./pages/Partnerships";
import Verticals from "./components/Verticals";
import Career from "./components/Career";
import VerticalDetail from "./components/VerticalDetail";
import AboutUs from "./components/AboutUs";
import FootComp from "./components/FootComp";
import CaseStudies from "./components/CaseStudies";
import Bio from "./components/Bio";

// Case Study Categories
import DC from "./components/DC";
import SD from "./components/SD";
import NS from "./components/NS";
import WN from "./components/WN";
import DM from "./components/DM";

// Vertical Case Study Pages
import Ver1 from "./components/ver1";
import Ver2 from "./components/ver2";
import Ver3 from "./components/ver3";
import Ver4 from "./components/ver4";

import "./styles.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/solutions" component={SolutionMain} />
            <Route exact path="/products" component={ProductMain} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/partnerships" component={Partnerships} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/careers" component={Career} />
            <Route exact path="/bio" component={Bio} />

            {/* ✅ Case Study Main Page */}
            <Route exact path="/case-studies" component={CaseStudies} />

            {/* ✅ Case Study - Solutions Categories */}
            <Route exact path="/case-studies/data-center" component={DC} />
            <Route exact path="/case-studies/sd-wan" component={SD} />
            <Route exact path="/case-studies/network-security" component={NS} />
            <Route exact path="/case-studies/wireless-networking" component={WN} />
            <Route exact path="/case-studies/digital-media" component={DM} />

            {/* ✅ Vertical Case Study Pages (IMPORTANT: put before /verticals/:id) */}
            <Route exact path="/verticals/ver1" component={Ver1} />
            <Route exact path="/verticals/ver2" component={Ver2} />
            <Route exact path="/verticals/ver3" component={Ver3} />
            <Route exact path="/verticals/ver4" component={Ver4} />

            {/* ✅ Other Vertical Routes */}
            <Route exact path="/verticals" component={Verticals} />
            <Route path="/verticals/:id" component={VerticalDetail} />
          </Switch>
        </div>
        <FootComp />
      </div>
    </Router>
  );
}

export default App;
