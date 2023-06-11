import React, { useState } from "react";
import Background from "../components/Background";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

function SearchScreen() {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState<string>("number");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(event.target.value);
  };

  const handleSearchCustomer = async () => {
    const querySnapshot = await getDocs(collection(db, "Clients"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (inputType === "number" && docData.number === inputValue) {
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
        console.log("Client found by number");
      } else if (inputType === "email" && docData.email === inputValue) {
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
        console.log("Client found by email");
      } else if (
        inputType === "accountid" &&
        docData.account_id === inputValue
      ) {
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
        console.log("Client found by account id");
      } else {
        console.log("client not found");
      }
    });
  };

  return (
    <Background>
      <div>
        <div className="search-txt">Search for clients</div>

        <select
          defaultValue="number"
          onChange={handleSelectChange}
          className="select-type"
        >
          <option value="number">number</option>
          <option value="email">email</option>
          <option value="accountid">Account id</option>
        </select>
        <div>
          {" "}
          <InptSI
            ph={inputType}
            style2="inpt-lrg-srch"
            type=""
            value={inputValue}
            onChange={(text) => {
              setInputValue(text.target.value);
            }}
          />
        </div>
        <Btn text={"Search"} style={"btn-lrg"} click={handleSearchCustomer} />
      </div>
    </Background>
  );
}

export default SearchScreen;
