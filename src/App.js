import React from "react";
import "./App.css";
import PdfValidation from "./Components/pdfValidation.js"; // Correct import with proper path and casing
import Login from "./Components/login.js";
import Regist from "./Components/regist.js";

import PhoneOtpForm from "./Components/phone.otp.js";
function App() {
  return (
    <div className="App">
    <PhoneOtpForm/>
      <Regist />
      <Login />

    </div>
  );
}

export default App;
