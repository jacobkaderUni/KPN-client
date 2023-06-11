import React from "react";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

function Btn({ text, style }: { text: string; style: string }) {
  return (
    <>
      <button className={style}>{text}</button>
    </>
  );
}

export default Btn;
