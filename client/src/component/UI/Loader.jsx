import React from "react";
import cl from "./Loader.module.css";

function Loader() {
  return (
    <div className={cl.loaderCont}>
      <div className={cl.loader}>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
