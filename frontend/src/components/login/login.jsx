import React, { useState } from "react";
import logo from "../../assets/riptide-white.png";

import "./login.css";

const Login = () => {
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="login-page">
      <img className="login-logo" src={logo} alt="riptide logo" />
      <div className="login-container">
        <h1>Log In</h1>
        <form className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-input"
            value={input.userName}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={input.password}
            onChange={inputChange}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
