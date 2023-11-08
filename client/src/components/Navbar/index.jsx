import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav id="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        Project Pulse
      </h2>
      <ul className="navLink">
        <li className="navItem" onClick={() => navigate("/")}>
          Discover
        </li>
        <li className="navItem">Features</li>
        <li className="navItem">Pricing</li>
        <li className="navItem">Community</li>
      </ul>
      <div className="loginSection">
        <Link to="/dashboard">
          <button className="homeButton">Login</button>
        </Link>
        <Link to="/user/create">
          <button className="homeButton">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
