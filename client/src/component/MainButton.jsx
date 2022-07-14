import React from "react";
import { Link } from "react-router-dom";

function MainButton() {
  return (
    <div className="main-btn">
      <Link to='/'>
        <img src="tv.png" alt="Return to main page" />
      </Link>
    </div>
  );
}

export default MainButton;
