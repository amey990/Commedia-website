// // src/components/ScrollToTop.js
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     // As soon as the URL (pathname) changes, jump to the top
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// src/components/ScrollToTop.js
import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // try scrolling the main-content div
      const main = document.querySelector(".main-content");
      if (main) {
        main.scrollTop = 0;
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
