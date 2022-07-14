import React from "react";
import MSCloseBtn from "./MSCloseBtn";
import cl from "./MSModal.module.css";

function MSModal({ children, visible, setVisible }) {
  const rootCl = [cl.msModal];
  if (visible) {
    rootCl.push(cl.active);
  }
  return (
    <div
      className={rootCl.join(" ")}
      onClick={(e) => {
        setVisible(false);
        e.stopPropagation();
      }}
    >
      <div className={cl.msModalContent} onClick={(e) => e.stopPropagation()}>
        <MSCloseBtn onClick={() => setVisible(false)} />
        {children}
      </div>
    </div>
  );
}

export default MSModal;
