import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailSurah.css";

import { Link } from "react-router-dom";

import bismilah from "./Vector.png";

const DetailSurah = () => {
  let { nomor } = useParams();

  let [fetchData, updateFetchData] = useState([]);

  let api = `https://equran.id/api/surat/${nomor}`;

  const getData = async () => {
    const response = await fetch(api).then((response) => response.json());
    updateFetchData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  let { nama_latin, jumlah_ayat, tempat_turun, arti, audio, ayat } = fetchData;

  let mapAyat;

  if (ayat) {
    mapAyat = ayat.map((x) => {
      return (
        <div className="ayat">
          <div id="nomor">
            <p>{x.nomor}</p>
          </div>
          <div id="ayat">
            <h3>{x.ar}</h3>
          </div>
          <div className="arti">
            <p>{x.idn}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="detail-ayat">
      <div className="back">
        <Link to="/daftar-surah" className="text-white">
          <i class="bi bi-arrow-left"></i>
        </Link>
        <h3>{nama_latin}</h3>
      </div>
      <div id="top-element">
        <p id="nama-latin">{nama_latin}</p>
        <p id="arti">{arti}</p>
        <p id="tempat-turun">
          {tempat_turun}{" "}
          <span>
            {" "}
            <i className="bi bi-dot fs-3"></i> {jumlah_ayat} Ayat
          </span>
        </p>
        <div className="image-top">
          <img src={bismilah} alt="" />
        </div>
      </div>
      <audio controls>
        <source src={audio} type="audio/mp3" />
      </audio>
      <>{mapAyat}</>
    </div>
  );
};

export default DetailSurah;
