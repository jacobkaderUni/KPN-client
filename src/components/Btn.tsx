import React from "react";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

function Btn({
  text,
  style,
  click,
}: {
  text: string;
  style: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={style} onClick={click}>
      {text}
    </button>
  );
}

export default Btn;
