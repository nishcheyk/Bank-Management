import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5050/auth/register', {
        email,
        password,
      });

      console.log('Response:', response.data); // Log the response data for debugging

      // Handle success (redirect, show success message, etc.)
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      // Handle error (display error message to user, etc.)
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
