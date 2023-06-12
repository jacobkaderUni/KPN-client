import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import customers from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/customers.json";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";
import { toast } from "react-toastify";

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
};

function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state.inputValue;

  const typedCustomers: Client[] = customers as any;
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<Customer>({
    number: value,
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

  const fetchClient = async () => {
    const querySnapshot = await getDocs(collection(db, "Clients"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData.number === value) {
        setAccount((prevAccount) => ({
          ...prevAccount,
          first_name: docData.first_name,
          last_name: docData.last_name,
          dob: docData.dob,
          email: docData.email,
          address: {
            street: docData.address.street,
            city: docData.address.city,
            postcode: docData.address.postcode,
            country: docData.address.country,
          },
        }));
      }
    });
    setIsLoading(false);
  };

  const updateClientDetails = async (
    clientId: string,
    updatedDetails: Customer
  ) => {
    try {
      await updateDoc(doc(db, "Clients", clientId), updatedDetails);
      toast.success("Details successfully updated!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.warning("Error: " + error, {
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

  const handleUpdateClient = () => {
    updateClientDetails(value, account);
    fetchClient();
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      fetchClient();
    }
  }, [isLoading, account, typedCustomers]);

  const goBack = () => {
    navigate("/search");
  };
  if (isLoading) {
    return <Background>Loading...</Background>;
  }
  return (
    <Background>
      <div>
        <div className="search-txt">Client Information</div>
        <div className="account-d">
          <div className="account-details1">
            {" "}
            <div className="account-input-container">
              <a>First Name</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.first_name}
                onChange={(text) =>
                  setAccount({ ...account, first_name: text.target.value })
                }
              />
            </div>
            <div className="account-input-container">
              <a>Last Name</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.last_name}
                onChange={(text) =>
                  setAccount({ ...account, last_name: text.target.value })
                }
              />
            </div>
            <div className="account-input-container">
              <a>Date of Birth</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.dob}
                onChange={(text) =>
                  setAccount({ ...account, dob: text.target.value })
                }
              />
            </div>
            <div className="account-input-container">
              <a>Email</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.email}
                onChange={(text) =>
                  setAccount({ ...account, email: text.target.value })
                }
              />
            </div>
          </div>
          <div className="account-details2">
            {" "}
            <div className="account-input-container">
              <a>Street</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.address.street}
                onChange={(text) =>
                  setAccount({
                    ...account,
                    address: { ...account.address, street: text.target.value },
                  })
                }
              />
            </div>
            <div className="account-input-container">
              <a>City</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.address.city}
                onChange={(text) =>
                  setAccount({
                    ...account,
                    address: { ...account.address, city: text.target.value },
                  })
                }
              />
            </div>
            <div className="account-input-container">
              <a>Postcode</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
                value={account.address.postcode}
                onChange={(text) =>
                  setAccount({
                    ...account,
                    address: {
                      ...account.address,
                      postcode: text.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="account-input-container">
              <a>country</a>{" "}
              <InptSI
                ph=""
                style2="inpt-sml"
                type=""
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
        </div>
        <Btn text={"Verify"} style={"btn-med"} click={handleUpdateClient} />
        <Btn text={"Cancel"} style={"btn-cancel"} click={goBack} />
      </div>
    </Background>
  );
}

export default Account;
