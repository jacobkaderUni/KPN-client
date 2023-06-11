import React from "react";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

interface InptSIProps {
  ph: string;
  style2: string;
  value: string | number;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InptSI: React.FC<InptSIProps> = ({
  ph,
  style2,
  value,
  type,
  onChange,
}) => {
  //div className="inpt-container"
  return (
    <input
      required
      className={style2}
      placeholder={ph}
      value={value}
      type={type}
      onChange={onChange}
    ></input>
  );
};

export default InptSI;
