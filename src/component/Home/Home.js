import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "../Header/Header";

import DaftarSurah from "../DaftarSurah/DaftarSurah";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <DaftarSurah />
    </div>
  );
};

export default Home;
