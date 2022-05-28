import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signup.css"

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });


  const navigate = useNavigate();
  // const local = localStorage.setItem("user",userData.email,userData.password)
  // console.log(local)
  const signupHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:5000/api/signup", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/*  */}






      <div className='MainDIv'>
        <div >
          <div className=''>
            <form onSubmit={signupHandler}>
              <div className='container borderDiv'>
                <h1 className='text-center margin colo'>SingUp Form</h1>
                <div className='w-50 mx-auto '>
                  <h5 className=' pt-2'>
                    Name:
                  </h5>
                  <input className='input-group ' placeholder="User Name" value={userData?.username}
                    onChange={(e) => {
                      setUserData({ username: e.target.value });
                    }} type="text" />
                  <h5 className=' pt-2'>
                    Email:
                  </h5>
                  <input className='input-group ' placeholder='Email Address' onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}

                    value={userData?.email} type="email" />


                  <h5 className=' pt-2'>
                    Password:
                  </h5>
                  <input className='input-group ' placeholder='Enter Password' onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}

                    value={userData?.password} type="password" />


                  <h5 className=' pt-2'>
                    Number:
                  </h5>
                  <input className='input-group ' placeholder='Enter Number' onChange={(e) => {
                    setUserData({ ...userData, contact: e.target.value });
                  }}

                    value={userData?.contact} />


                  <div className='pt-2  text-center '>


                    <button className='btn btn-info pr-2' >Singup</button>
                    <button className='btn btn-secondary ' onClick={() => navigate("/")}>Login</button>

                  </div>

                </div>


              </div>

            </form>
          </div>
        </div>


      </div>
























    </div>
  );
};

export default Signup;
