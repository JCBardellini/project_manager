import React, { useContext } from "react";
import dashboard from "../../assets/imgs/Dashboard.png";
import launch from "../../assets/imgs/launch.png";
import money from "../../assets/imgs/money-bag.png";
import clock from "../../assets/imgs/cuckoo-clock.png";
import grabAndDrop from "../../assets/imgs/grabanddrop.png";
import crm from "../../assets/icons/CRM.png";
import task from "../../assets/icons/Task.png";
import template from "../../assets/icons/Templates.png";
import backup from "../../assets/icons/Backup.png";
import files from "../../assets/icons/Files.png";
import edit from "../../assets/icons/Edit.png";
import widget from "../../assets/icons/Widget.png";
import integrations from "../../assets/icons/intergrations.png";
import "./index.css";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Reviews from "../../components/Reviews";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const createUser = () => {
    navigate("/user/create");
  };
  const keyPoints = [
    {
      title: "Boost Your Productivity",
      description:
        "Our powerful and intuitive platform streamlines task management, ensuring efficiency and organization.",
      image: launch,
      alt: "Launch icon",
    },
    {
      title: "Maximize Your Profits",
      description:
        "Our interactive platform empowers you to handle multiple projects simultaneously, driving financial success.",
      image: money,
      alt: "Money icon",
    },
    {
      title: "Simplify Project Management",
      description:
        "Delegate the task of enhancing your management skills to Project Pulse and enjoy more free time.",
      image: clock,
      alt: "Clock icon",
    },
  ];
  const dragAndDropFeature = {
    title: "Intuitive Drag & Drop for Tasks and Projects",
    description:
      "Simplify your project and task management with our intuitive drag and drop feature. Easily reorganize, prioritize, and streamline your work in a visually intuitive way. Whether you're juggling multiple projects or simply need to sort your tasks efficiently, our drag and drop functionality makes it a breeze. Save time and stay in control of your workload with this user-friendly feature.",
    image: grabAndDrop,
  };
  const features = [
    {
      title: "Contact Management",
      description:
        "Efficiently store and manage all your contacts and leads to nurture your relationships.",
      image: crm,
    },
    {
      title: "Task Boards",
      description:
        "Visualize your tasks from across all your projects on a unified board for quick and easy tracking.",
      image: task,
    },
    {
      title: "Project Templates",
      description:
        "Simplify the creation of new project templates with user-friendly tools.",
      image: template,
    },
    {
      title: "Data Backups",
      description:
        "Ensure the safety of your data with regular automated backups.",
      image: backup,
    },
    {
      title: "File Management",
      description: "Duplicate projects and save valuable time with ease.",
      image: files,
    },
    {
      title: "File Editing",
      description: "Edit any file effortlessly with just a few clicks.",
      image: edit,
    },
    {
      title: "Customizable Dashboard",
      description:
        "Tailor your dashboard layout to match your unique preferences and needs.",
      image: widget,
    },
    {
      title: "Integration Capabilities",
      description:
        "Seamlessly connect and integrate multiple platforms to streamline your workflow.",
      image: integrations,
    },
  ];

  return (
    <div id="home">
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
          <button className="homeButton">Learn More</button>
          <button onClick={createUser} className="homeButton">
            Begin Your adventure
          </button>
        </div>
        <img src={dashboard} alt="dashboard image" className="landingPageImg" />
      </header>
      <main id="mainContainer">
        <section>
          <h2 className="keyPointTitle">Get Everything Done</h2>
          <div className="keyPointsContainer">
            {keyPoints.map((item) => {
              return (
                <div key={item.title} className="keyPoints">
                  <img src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="dragAndDrop">
          <div className="dragDropContainer">
            <h2>{dragAndDropFeature.title}</h2>
            <p>{dragAndDropFeature.description}</p>
          </div>
          <img
            src={dragAndDropFeature.image}
            alt="drag and drop feature"
            className="dragDropImg"
          />
        </section>
        <section className="featureSection">
          <h2>Our system is full of features! The ones our clients love</h2>
          <div className="featureContainer">
            {features.map((feature) => {
              return (
                <div key={feature.title} className="featureBox">
                  <div className="featureTitleImg">
                    <div className="featureIcon">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="featureImg"
                      />
                    </div>
                    <h4>{feature.title}</h4>
                  </div>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <Reviews />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
