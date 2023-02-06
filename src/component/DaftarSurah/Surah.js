import React from "react";
import { Link } from "react-router-dom";
import "./Surah.css";
const Surah = (props) => {
  return (
    <Link className="surah gap-3 text-decoration-none" to={`/surah/${props.nomor}`}>
      <div className="surah-detail d-flex gap-4">
        <p className="nomor">{props.nomor} </p>
        <div className="name-surah">
          <p>{props.nama_latin}</p>
          <p className="arti">
            {props.arti} (<span>{props.jumlah_ayat}</span>)
          </p>
        </div>
      </div>
      <div className="nama-surah-arab">
        <p>{props.nama}</p>
      </div>
    </Link>
  );
};

export default Surah;
