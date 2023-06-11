import React from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Background from "../components/Background";

function AddClients() {
  const clients = [
    {
      number: "060000002",
      first_name: "Jesse",
      last_name: "Pinkman",
      dob: "1984-09-24",
      email: "jesse.pinkman@example.com",
      address: {
        street: "Hoofdstraat 20",
        city: "Rotterdam",
        postcode: "3011 DN",
        country: "Netherlands",
      },
      account_id: "100002",
      start_date: "2010",
      nick_name: "Diesel",
    },
    {
      number: "060000003",
      first_name: "Skyler",
      last_name: "White",
      dob: "1970-08-11",
      email: "skyler.white@example.com",
      address: {
        street: "Kerkstraat 30",
        city: "The Hague",
        postcode: "2513 CS",
        country: "Netherlands",
      },
      account_id: "100003",
      start_date: "2010",
      nick_name: "Sky",
    },
    {
      number: "060000004",
      first_name: "Hank",
      last_name: "Schrader",
      dob: "1966-06-12",
      email: "hank.schrader@example.com",
      address: {
        street: "Brink 40",
        city: "Utrecht",
        postcode: "3511 TV",
        country: "Netherlands",
      },
      account_id: "100004",
      start_date: "2010",
      nick_name: "Hank",
    },
    {
      number: "060000005",
      first_name: "Marie",
      last_name: "Schrader",
      dob: "1969-12-03",
      email: "marie.schrader@example.com",
      address: {
        street: "Markt 50",
        city: "Eindhoven",
        postcode: "5611 GC",
        country: "Netherlands",
      },
      account_id: "100005",
      start_date: "2010",
      nick_name: "Marie",
    },
    {
      number: "060000006",
      first_name: "Saul",
      last_name: "Goodman",
      dob: "1962-11-20",
      email: "saul.goodman@example.com",
      address: {
        street: "Broekweg 60",
        city: "Tilburg",
        postcode: "5021 LJ",
        country: "Netherlands",
      },
      account_id: "100006",
      start_date: "2010",
      nick_name: "Jimmy",
    },
    {
      number: "060000007",
      first_name: "Mike",
      last_name: "Ehrmantraut",
      dob: "1944-03-22",
      email: "mike.ehrmantraut@example.com",
      address: {
        street: "Gracht 70",
        city: "Groningen",
        postcode: "9711 RM",
        country: "Netherlands",
      },
      account_id: "100006",
      start_date: "2010",
      nick_name: "Bald Gringo",
    },
  ];
  const addClients = async () => {
    try {
      for (const client of clients) {
        const docId = client.number;
        await setDoc(doc(collection(db, "Clients"), docId), client);
      }
      console.log("Documents added successfully.");
    } catch (error) {
      console.error("Error adding documents: ", error);
    }
  };

  // Call the function to add a new client document

  return (
    <>
      <Background>
        <button onClick={addClients}>add</button>
      </Background>
    </>
  );
}

export default AddClients;
