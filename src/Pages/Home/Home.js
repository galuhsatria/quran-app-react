import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "../../component/Header/Header";

import DaftarSurah from "../../component/DaftarSurah/DaftarSurah";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <DaftarSurah />
    </div>
  );
};

export default Home;
