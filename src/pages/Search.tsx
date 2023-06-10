import React, { useState } from "react";
import Background from "../components/Background";
import customers from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/customers.json";

interface Customer {
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
}
function SearchScreen() {
  const [inputType, setInputType] = useState<string>("number");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(event.target.value);
  };

  const handleSearchCustomer = () => {
    const customer = customers.find((customer: Customer) => {
      switch (inputType) {
        case "number":
          return customer.number === inputValue;
        case "email":
          return customer.email === inputValue;
        case "accountid":
          return customer.account_id === inputValue;
        default:
          return false;
      }
    });

    if (customer) {
      console.log(customer);
      console.log("welcome " + customer.first_name);
    } else {
      console.log(inputType);
      console.log("not found");
    }
  };
  return (
    <Background>
      <div>
        <a>Search for clients</a>
        <select defaultValue="number" onChange={handleSelectChange}>
          <option value="number">number</option>
          <option value="email">email</option>
          <option value="accountid">Account id</option>
        </select>
        <input
          name="inputValue"
          placeholder={inputType}
          type="string"
          required
          value={inputValue}
          onChange={(text) => {
            setInputValue(text.target.value);
          }}
        />
        <button onClick={handleSearchCustomer}>Search</button>
      </div>{" "}
      <div>recent clients</div>
    </Background>
  );
}

export default SearchScreen;
