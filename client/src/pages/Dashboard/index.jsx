import React from "react";
import "./index.css";
import DashboardNav from "../../components/DashboardNav";
import EmployeeList from "../../components/EmployeeList";

const Dashboard = () => {
  const category = "Dashboard";
  return (
    <div id="dashboard">
      <h2 className="dashboardTitle">Project Pulse</h2>
      <DashboardNav />
      <aside>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </aside>
      <main>
        <EmployeeList />
      </main>
    </div>
  );
};

export default Dashboard;
