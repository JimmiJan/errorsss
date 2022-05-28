import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import Hotal from "../Hot"
// import Hotal from ".//"
import Hotal from "../Hotal/Hotal"

const Homepage = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!userData) {
      return navigate("/");
    }
  }, []);

   
  

  return (
   <div>
     <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Kilimanjaro Hotel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </div>
        <Hotal />
   </div>
  );
};

export default Homepage;