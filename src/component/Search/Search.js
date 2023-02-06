import React from "react";
import "./Search.css";

const Search = ({ setSearch }) => {
  return (
    <div className="mb-4">
      <div className="d-flex search">
        <input type="text" className="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <i className="bi bi-search text-secondary"></i>
      </div>
    </div>
  );
};

export default Search;
