import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2 className="logo">Project Pulse</h2>
      <ul className="navLink">
        <li className="navItem">Home</li>
        <li className="navItem">Features</li>
        <li className="navItem">Pricing</li>
        <li className="navItem">Community</li>
      </ul>
      <div className="loginSection">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
