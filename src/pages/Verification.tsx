import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";

type FormState = {
  dob: string;
  start_date: string;
  nick_name: string;
};

type Client = {
  number: string;
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
  account_id: string;
  start_date: string;
  nick_name: string;
};
function Verification() {
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state.inputValue;
  const [form, setForm] = useState<FormState>({
    dob: "",
    start_date: "",
    nick_name: "",
  });
  const [isLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      console.log("notworkijg");
    }
  }, [isLoading, value]);
  const [error, setError] = useState<string | null>(null); //take care of error handling afterwards!

  const compareFormFields = (docData: Client) => {
    return (
      docData.dob === form.dob &&
      docData.start_date === form.start_date &&
      docData.nick_name === form.nick_name
    );
  };

  const handleVerifyClient = async () => {
    const querySnapshot = await getDocs(collection(db, "Clients"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data() as Client;
      if (docData.number === value) {
        if (compareFormFields(docData)) {
          console.log("succeess");
          navigate("/account", {
            state: { inputValue: value },
          });
        }
      }
    });
  };

  const goBack = () => {
    navigate("/search");
  };
  return (
    <Background>
      <div>
        <div className="search-txt">Security Verification Check</div>
        <div className="verify-dob">
          <div className="verify-txt">Date of birth</div>

          <InptSI
            ph="YYYY-MM-DD"
            style2="inpt-lrg-verify"
            type=""
            value={form.dob}
            onChange={(text) => {
              setForm({ ...form, dob: text.target.value });
            }}
          />
        </div>
        <div className="verify-sd">
          <div className="verify-txt">When did you join KPN?</div>

          <InptSI
            ph="YYYY"
            style2="inpt-lrg-verify"
            type=""
            value={form.start_date}
            onChange={(text) =>
              setForm({ ...form, start_date: text.target.value })
            }
          />
        </div>
        <div className="verify-nn">
          <div className="verify-txt">Nickname</div>
          <InptSI
            ph="name"
            style2="inpt-lrg-verify"
            type=""
            value={form.nick_name}
            onChange={(text) =>
              setForm({ ...form, nick_name: text.target.value })
            }
          />
        </div>

        <Btn text={"Verify"} style={"btn-med"} click={handleVerifyClient} />
        <Btn text={"Cancel"} style={"btn-cancel"} click={goBack} />
      </div>
    </Background>
  );
}

export default Verification;
