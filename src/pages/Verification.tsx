import React, { useState } from "react";
import Background from "../components/Background";
import customers from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/customers.json";

type clientNumberProp = {
  clientNumber: string;
};

type FormState = {
  dob: string;
  start_date: string;
  nick_name: string;
};
function Verification({ clientNumber }: clientNumberProp) {
  const [form, setForm] = useState<FormState>({
    dob: "",
    start_date: "",
    nick_name: "",
  });

  const [error, setError] = useState<string | null>(null); //take care of error handling afterwards!

  const handleVerifyClient = () => {
    const clientVerified = customers.find(
      (customer) => customer.number === clientNumber
    );
    if (clientVerified) {
      if (
        clientVerified.dob === form.dob &&
        clientVerified.start_date === form.start_date &&
        clientVerified.nick_name === form.nick_name
      ) {
        setError(null);
        console.log("VERIFIED!");
      } else {
        setError("Incorrect date of birth, start date, or nickname.");
        console.log("WRONG, TRY AGAIN!");
      }
    } else {
      setError("Client not found!");
      console.log("error");
    }
  };
  return (
    <Background>
      <div>
        <a>Security Verification Check</a>
        <div>
          <a>Date of birth</a>
          <input
            name="dob"
            placeholder="yyyy-mm-dd"
            type="string"
            required
            value={form.dob}
            onChange={(text) => {
              setForm({ ...form, dob: text.target.value });
            }}
          />
        </div>
        <div>
          <a>When did you join KPN?</a>
          <input
            name="startdate"
            placeholder="YYYY"
            type="string"
            required
            value={form.start_date}
            onChange={(text) =>
              setForm({ ...form, start_date: text.target.value })
            }
          />
        </div>
        <div>
          <a>Nickname</a>
          <input
            name="nickname"
            placeholder="your nickname"
            type="string"
            required
            value={form.nick_name}
            onChange={(text) =>
              setForm({ ...form, nick_name: text.target.value })
            }
          />
        </div>
        <button onClick={handleVerifyClient}>Verify</button>
        <button>Cancel</button>
      </div>
    </Background>
  );
}

export default Verification;
