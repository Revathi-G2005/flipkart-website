import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleOtpRequest = () => {
    // Here you can add logic to handle OTP request
    console.log("OTP requested for:", email);
  };

  return (
    <main className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist, and Recommendations</p>
        <input
          type="text"
          placeholder="Enter Email/Mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="otp-btn" onClick={handleOtpRequest}>Request OTP</button>
        <p className="terms">
          By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>
        <p className="new-account">New to Flipkart? <a href="#">Create an account</a></p>
      </div>
    </main>
  );
};

export default Login;