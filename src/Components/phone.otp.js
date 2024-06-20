import { Button } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneSumbit = (event) => {
    event.preventDefault();
    //phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    //call BE api
    //show otp field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful",otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit= {handlePhoneSumbit}>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
          <Button type="submit" >Submit</Button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};
export default PhoneOtpForm;
