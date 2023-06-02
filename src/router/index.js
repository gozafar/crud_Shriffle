import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Header from "../components/Header";
const index = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/create"} element={<Create />} />
      </Routes>
    </Router>
  );
};

export default index;
