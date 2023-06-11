import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import customers from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/customers.json";

type clientNumberProp = {
  clientNumber: string;
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
  [key: string]: any;
};

type Customer = {
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
  [key: string]: any;
};

function Account({ clientNumber }: clientNumberProp) {
  const typedCustomers: Client[] = customers as any;
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<Customer>({
    number: clientNumber,
    first_name: "",
    last_name: "",
    dob: "",
    email: "",
    address: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
  });

  useEffect(() => {
    if (isLoading) {
      fetchClientDetails();
    }
  }, [isLoading, account, typedCustomers]);

  const fetchClientDetails = () => {
    const client: Client | undefined = customers.find(
      (customer) => customer.number === clientNumber
    );

    if (client) {
      const currentClient = { ...account };
      for (const key in client) {
        if (currentClient.hasOwnProperty(key)) {
          currentClient[key] = client[key];
        }
      }
      setAccount(currentClient);
    } else {
      console.log("error");
    }
    setIsLoading(false);
  };

  const handleSaveDetails = () => {
    setIsLoading(true);

    console.log(account);
  };
  if (isLoading) {
    return <Background>Loading...</Background>;
  }
  return (
    <Background>
      <div>
        <a>Client Information</a>
        <div>
          {" "}
          <div>
            <a>First Name</a>{" "}
            <input
              name="firstname"
              placeholder=""
              type="string"
              value={account.first_name}
              onChange={(text) =>
                setAccount({ ...account, first_name: text.target.value })
              }
            />
          </div>
          <div>
            <a>Last Name</a>{" "}
            <input
              name="lastname"
              placeholder=""
              type="string"
              value={account.last_name}
              onChange={(text) =>
                setAccount({ ...account, last_name: text.target.value })
              }
            />
          </div>
          <div>
            <a>Date of Birth</a>{" "}
            <input
              name="dob"
              placeholder=""
              type="string"
              value={account.dob}
              onChange={(text) =>
                setAccount({ ...account, dob: text.target.value })
              }
            />
          </div>
          <div>
            <a>Email</a>{" "}
            <input
              name="email"
              placeholder=""
              type="string"
              value={account.email}
              onChange={(text) =>
                setAccount({ ...account, email: text.target.value })
              }
            />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <a>Street</a>{" "}
            <input
              name="street"
              placeholder=""
              type="string"
              value={account.address.street}
              onChange={(text) =>
                setAccount({
                  ...account,
                  address: { ...account.address, street: text.target.value },
                })
              }
            />
          </div>
          <div>
            <a>City</a>{" "}
            <input
              name="city"
              placeholder=""
              type="string"
              value={account.address.city}
              onChange={(text) =>
                setAccount({
                  ...account,
                  address: { ...account.address, city: text.target.value },
                })
              }
            />
          </div>
          <div>
            <a>Postcode</a>{" "}
            <input
              name="postcode"
              placeholder=""
              type="string"
              value={account.address.postcode}
              onChange={(text) =>
                setAccount({
                  ...account,
                  address: { ...account.address, postcode: text.target.value },
                })
              }
            />
          </div>
          <div>
            <a>country</a>{" "}
            <input
              name="country"
              placeholder=""
              type="string"
              value={account.address.country}
              onChange={(text) =>
                setAccount({
                  ...account,
                  address: { ...account.address, country: text.target.value },
                })
              }
            />
          </div>
        </div>
        <button onClick={handleSaveDetails}>save</button>
        <button>cancel</button>
      </div>
    </Background>
  );
}

export default Account;
