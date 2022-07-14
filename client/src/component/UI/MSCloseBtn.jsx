import React from "react";
import cl from "./MSCloseBtn.module.css";

function MSCloseBtn({ onClick }) {
  return (
    <div className={cl.msBtn}>
      <span onClick={onClick}>╳</span>
    </div>
  );
}

export default MSCloseBtn;
