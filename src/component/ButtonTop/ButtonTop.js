import React, { useState } from "react";
import "./ButtonTop.css";

const ButtonTop = () => {
  let [visible, setVisible] = useState(false);

  const tonggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", tonggleVisible);

  return (
    <div>
      <button onClick={scrollTop} id="myBtn" title="Go to top" style={{ display: visible ? "inline" : "none" }}>
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
};

export default ButtonTop;
