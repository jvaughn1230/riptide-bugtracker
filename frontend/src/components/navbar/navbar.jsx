import React from "react";

import { Link } from "react-router-dom";
import mainLogo from "../../assets/riptide-white.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={mainLogo} alt="riptide logo" className="navbar-logo" />
      <div className="navbar-links-container">
        <Link to="/account/viewbugs" className="navbar-link">
          View Bugs
        </Link>
        <Link to="/account/addbug" className="navbar-link">
          Add Bugs
        </Link>
      </div>
      <Link to="/" className="logout-link navbar-link">
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
