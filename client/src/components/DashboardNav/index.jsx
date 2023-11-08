import React from "react";
import "./index.css";
import userImg from "../../assets/userImg/user1.png";

const DashboardNav = () => {
  return (
    <div id="dashboardContainer">
      <nav id="dashboardNav">
        <ul className="dashNavLinks">
          <li>Your Work</li>
          <li>Templates</li>
          <li>Team</li>
          <li>App</li>
        </ul>
      </nav>
      <form>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="search for anything...."
        />
      </form>
      <div className="dashUserContainer">
        <img src={userImg} alt="" />
        Robert Saul
      </div>
    </div>
  );
};

export default DashboardNav;
