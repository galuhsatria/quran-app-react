import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonTop from "./component/ButtonTop/ButtonTop";
import Started from "./Pages/Started/Started";
import DetailSurah from "./Pages/DetailSurah/DetailSurah";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonTop />
      </div>
      <ButtonTop />
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="/daftar-surah" element={<Home />} />
        <Route path="surah/:nomor" element={<DetailSurah />} />
      </Routes>
    </Router>
  );
}

export default App;
