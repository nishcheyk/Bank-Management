<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import Signup from "./Components/signUp";
import Login from "./Components/Login";
import PdfValidation from "./Components/pdfValidation"; // Ensure correct import path and casing

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleRegister = () => {
    setIsRegistered(true);
  };



  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setIsRegistered(false);
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

        />
      )}
      {!isLoggedIn && isRegistered && <Signup onRegister={handleRegister} />}
      {isLoggedIn && <PdfValidation />}
    </div>
=======
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>

>>>>>>> abhinav
  );
}

export default App;
