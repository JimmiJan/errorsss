import React from "react";
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import { Login, Signup, Homepage } from "../Screen";


import {Login,Signup,Homepage} from "../Screen"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
