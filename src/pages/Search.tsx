import React, { useState } from "react";
import Background from "../components/Background";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";
import { toast } from "react-toastify";

function SearchScreen() {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState<string>("number");
  const [inputValue, setInputValue] = useState<string>("");
  let clientFound = false;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(event.target.value);
  };

  const handleSearchCustomer = async () => {
    const querySnapshot = await getDocs(collection(db, "Clients"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (inputType === "number" && docData.number === inputValue) {
        clientFound = true;
        toast.success("Found client, " + docData.first_name, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
      } else if (inputType === "email" && docData.email === inputValue) {
        clientFound = true;
        toast.success("Found client, " + docData.first_name, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
      } else if (
        inputType === "accountid" &&
        docData.account_id === inputValue
      ) {
        clientFound = true;
        toast.success("Found client, " + docData.first_name, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/verification", {
          state: { inputValue: docData.number },
        });
      }
    });
    if (!clientFound) {
      toast.warning("Client not found, try again", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
