import React, { useContext, useState } from "react";
import "./index.css";
import { primaryContext } from "../../Context/primaryContext";
import axios from "axios";

const ContactForm = () => {
  const { customerForm, setCustomerForm } = useContext(primaryContext);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    interested: "",
    message: "",
  });

  const contactOptions = [
    { id: 1, title: "Product Inquiry" },
    { id: 2, title: "Technical Support" },
    { id: 3, title: "Account Assistance" },
    { id: 4, title: "Billing and Payments" },
    { id: 5, title: "Feedback and Suggestions" },
    { id: 6, title: "Customization and Integration" },
    { id: 7, title: "Training and Onboarding" },
    { id: 8, title: "Project Management Best Practices" },
    { id: 9, title: "Data Security and Privacy" },
    { id: 10, title: "Partnerships or Collaborations" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", contactFormData);
    // now we have to send the data to backend
    try {
      const formResponse = await axios({
        method: "POST",
        url: "/server/",
        data: {
          ...contactFormData,
          number: contactFormData.number.replace(/\s/g, ""),
        }, // data is found in req.body
      });
      console.log(formResponse); // logging the data
      setCustomerForm([...customerForm, formResponse.data]);

      setContactFormData({
        name: "",
        email: "",
        number: "",
        company: "",
        interested: "",
        message: "",
      });
    } catch (err) {
      console.error(err.message); // log any error
    }
  };
  return (
    <div id="contactForm">
      <div className="contactFormContainer">
        <h2>Discover the Power of Project Pulse</h2>
        <p>
          Are you still unsure about how Project Pulse can transform your
          project management? Don't worry, we're here to help! Fill out the form
          below, and our experts will get in touch with you. Let us show you how
          you can supercharge your project management skills, beat every
          deadline, and surprise your clients with lightning-fast project
          deliveries.
        </p>
      </div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="contactFormName"
          value={contactFormData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          id="contactFormEmail"
          value={contactFormData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <br />
        <br />
        <input
          type="text"
          name="number"
          id="contactFormNumber"
          value={contactFormData.number}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="company"
          id="contactFormCompany"
          value={contactFormData.company}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <br />
        <br />
        <select
          name="interested"
          id="contactFormInterested"
          value={contactFormData.interested}
          onChange={handleChange}
        >
          <option value="" disabled>
            Interested In
          </option>
          {contactOptions.map((option) => (
            <option key={option.id} value={option.title}>
              {option.title}
            </option>
          ))}
        </select>
        <br />
        <br />
        <textarea
          name="message"
          id="contactFormMessage"
          value={contactFormData.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
        <br />
        <br />
        <button type="submit" className="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
