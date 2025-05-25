import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ArrowUp size={24} />
      <span className="back-to-top-text">Back to top</span>
    </button>
  );
}
