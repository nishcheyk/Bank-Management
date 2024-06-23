import React, { useState } from "react";
import "./App.css";
import Signup from "./Components/signUp";
import Login from "./Components/Login";
import PdfValidation from "./Components/pdfValidation"; // Ensure correct import path and casing

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forgotPasswordUsername, setForgotPasswordUsername] = useState("");

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setIsRegistered(false); // Ensure the signup form is hidden after login
  };

  const handleForgotPassword = (username) => {
    setForgotPasswordUsername(username); // Store the username for forgot password flow
    // Implement your logic for forgot password here, e.g., sending reset instructions
    alert(`Forgot Password functionality for ${username} will be implemented.`);
  };

  return (
    <div className="App">
      <nav>
        {!isLoggedIn && (
          <>
            <button onClick={handleRegister}>Signup</button>
            <button onClick={() => setIsRegistered(false)}>Login</button>
          </>
        )}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>

      {!isLoggedIn && !isRegistered && (
        <Login
          onLogin={handleSuccessfulLogin}
          onForgotPassword={handleForgotPassword}
        />
      )}
      {!isLoggedIn && isRegistered && <Signup onRegister={handleRegister} />}
      {isLoggedIn && <PdfValidation />}
    </div>
  );
}

export default App;
