import React from "react";
import MainButton from "./MainButton";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="head-cont">
        <MainButton />
        <h1 id="main-title">MOVIE SCREENER</h1>
      </div>

      <Search />
    </header>
  );
}

export default Header;
