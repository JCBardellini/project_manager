import React from "react";
import dashboard from "../../assets/imgs/Dashboard.png";
import "./index.css";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header id="header">
        <h1 className="title">
          Unleash your project management potential with
          <br />
          ProjectPulse: Your Intelligent Project Management Tool
        </h1>
        <p>
          Supercharge your project management skills and surprise your clients
          with lighting-fast project deliveries, beating every deadline!
        </p>
        <div className="buttons">
          <button>Learn More</button>
          <button>Begin Your adventure</button>
        </div>
        <img src={dashboard} alt="dashboard image" className="landingPageImg" />
      </header>
      <main>
        <div></div>
      </main>
    </div>
  );
};

export default Home;
