import React, { ReactNode } from "react";
import logo from "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/logo.png";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

type BackgroundProps = {
  children: ReactNode;
};
const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="background-component">
      <img src={logo} alt="logo" className="logo" />
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Background;
