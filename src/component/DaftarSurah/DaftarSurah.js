import React, { useEffect, useState } from "react";
import Search from "../Search/Search.js";

import Surah from "./Surah.js";

const DaftarSurah = () => {
  let [surah, setSurah] = useState([]);
  // let [ayat, setAyat] = useState();
  const [search, setSearch] = useState("");
  let api = "https://equran.id/api/surat";

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setSurah(data);
    })();
  }, [api]);

  return (
    <div className="daftarSurah">
      <Search setSearch={setSearch} />
      {surah
        .filter((value) => {
          if (search == "") {
            return value;
          } else if (value.nama_latin.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((surah) => {
          return <Surah key={surah.nomor} nomor={surah.nomor} nama={surah.nama} nama_latin={surah.nama_latin} jumlah_ayat={surah.jumlah_ayat} arti={surah.arti} />;
        })}
    </div>
  );
};

export default DaftarSurah;
