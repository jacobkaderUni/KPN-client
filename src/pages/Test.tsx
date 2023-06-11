import React from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

function Test() {
  return (
    <Background>
      <div className="new-container">
        {/* <Btn text={"Sign in"} style={"btn-lrg"} /> */}
        {/* <Btn text={"Search"} style={"btn-lrg"} /> */}
        {/* <Btn text={"Verify"} style={"btn-med"} />
        <Btn text={"Cancel"} style={"btn-cancel"} /> */}
        {/* <Btn text={"Save"} style={"btn-med"} />
        <Btn text={"Cancel"} style={"btn-cancel"} /> */}
        <div>
          {" "}
          {/* <InptSI ph="User id" style={"inpt-sml"} />
          <InptSI ph="User id" style={"inpt-sml"} /> */}
        </div>
      </div>
    </Background>
  );
}

export default Test;
