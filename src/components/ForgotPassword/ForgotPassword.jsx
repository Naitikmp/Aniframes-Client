// src/components/ForgotPassword.js
import React, { useState } from "react";
import "./ForgotPassword.scss"; // Import the SCSS file
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function ForgotPassword() {
  const [UserInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a password reset request with the inputValue (email or username) to your server.

    // Display a confirmation message based on the response from the server.
    setMessage("Password reset link sent to your email or username.");
  };

  return (
    <>
    <Header />
    <div className="forgot-password"> {/* Use the class name */}
      <h2>Forgot Password?</h2>
      <p>Enter your email or username below, and we'll send you a password reset link.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailOrUsername">Email or Username:</label>
        <input
          type="text"
          id="emailOrUsername"
          value={UserInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
    <Footer />
    </>
  );
}

export default ForgotPassword;
