import React from "react";
import HeaderImg from "./Frame 33.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header text-white">
      <h2>
        Al-Quran App <span className="fs-6 text-secondary">by Galuh Satria</span>
      </h2>
      <h3>Assalamualaikum</h3>
      <div className="header-img m-auto">
        <img src={HeaderImg} alt="" className="w-100" />
      </div>
    </div>
  );
};

export default Header;
