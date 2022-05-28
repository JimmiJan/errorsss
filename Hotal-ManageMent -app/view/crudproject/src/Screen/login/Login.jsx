import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../../store/action/authAction";

import "../signup/signup.css"

const Login = () => {
  const dispatch = useDispatch();
  const { userDataMessage } =
    useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      return alert("ENTER EMPTY FIELDS");
    }

    const userObj = {
      email,
      password,
    };
    dispatch(LoginAction(userObj));
  };

  useEffect(() => {
    if (userDataMessage) {
      navigate("/", { replace: true });
    }
  }, [userDataMessage]);

  useEffect(() => {
    if (userData) {
      return navigate("/todo");
    }
  }, [userDataMessage]);

  return (
    <div className="container align-items-center mt-5">
      <h1>LOGIN FORM</h1>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          value={email}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          value={password}
        />
        <br />
        <br />




        

        <button className="btn btn-info">LOGIN</button>
        <button className="btn btn-secondary" onClick={() => navigate("/signup")}>SIGNUP</button>
      </form>
    </div>
  );
};

export default Login;
