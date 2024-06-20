import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.status === 200) {
        setLoginSuccess(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setPasswordError("Invalid email or password");
      } else {
        setPasswordError("An error occurred. Please try again.");
      }
    }
  };


  if (loginSuccess) {
    // Render the next form or redirect
    return <div>Next Form Component</div>;
  }

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <div className="inputContainer">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email or phone no."
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputBox"
          placeholder="Enter your password"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <Button className="button" onClick={onButtonClick}>
        Login
      </Button>
    </div>
  );
}

export default Login;
