import React from "react";
import StartedImage from "./Group 36.png";
import "./Started.css";
import { Link } from "react-router-dom";

const Started = () => {
  return (
    <div id="started">
      <h3>Quran App</h3>
      <p>Belajar Quran dan Membaca Sekali Setiap Hari</p>
      <div className="started-image mt-4">
        <img src={StartedImage} alt="" />
      </div>
      <Link to="/daftar-surah" id="btn-started">
        Get Strated
      </Link>
    </div>
  );
};

export default Started;
