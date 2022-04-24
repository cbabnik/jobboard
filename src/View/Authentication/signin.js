// taken from https://github.com/LuminousIT/auth-protected-route/blob/master/src/View/Authentication/Signin.js

import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  
async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username === "admin" && userData.password === "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/"; // should probably use Navigate
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <div>
      <div style={{width: '200px', height: '200px'}} />
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <Authenticator hideSignUp >
          
        </Authenticator>
      </div>
    </div>
  );
}

export default Signin;