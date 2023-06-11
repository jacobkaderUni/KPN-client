import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchScreen from "./pages/Search";
import Verification from "./pages/Verification";
import Account from "./pages/Account";
import Test from "./pages/Test";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/Verification" element={<Verification />} />
      <Route path="/account" element={<Account />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};
export default Main;
