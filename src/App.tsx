import React from "react";
import "firebase/firestore";
import Main from "./main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <div>
        <Main />
      </div>
      <ToastContainer />
    </>
  );
}
