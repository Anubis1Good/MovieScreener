import React from "react";

import cl from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const url = "/api/search-movie/:";

  const navigate = useNavigate();

  const submitReq = (e) => {
    
    localStorage.setItem("url", url + e.target.searchfilm.value);
    navigate(`/seacrh?${e.target.searchfilm.value}`, { replace: true });
    e.target.searchfilm.value = ''
  };

  return (
    <>
      <form id="form" onSubmit={submitReq}>
        <input
          name="searchfilm"
          type="text"
          placeholder="🔎"
          className={cl.search}
        />
      </form>
    </>
  );
}

export default Search;
