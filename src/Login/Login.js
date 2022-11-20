import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  function validateForm() {
    if(email.length > 0 && password.length > 0){
        navigate('./Products');
        clearForm()

    }
    handleSubmit()
    clearForm()
        alert("Wrong email or passwod")
  }
  const clearForm = () => {
    setEmail("")
    setPassword("")
  };
  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log(email);
  return (
    <div className="form" onSubmit={handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Please Login</div>
      <div className="input-container ic1">
        <input
          id="email"
          className="input"
          type="email"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="input"
          type="password"
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <button type="text" className="submit" onClick={validateForm}>
        Login
      </button>
    </div>
  );
}
