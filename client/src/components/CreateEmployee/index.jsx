import React, { useContext, useState } from "react";
import "./index.css";
import axios from "axios";
import { primaryContext } from "../../Context/primaryContext";

const CreateEmployee = () => {
  const { employee, setEmployee } = useContext(primaryContext);
  // the state we have for the form in our employees, based on our schema
  const [newEmployeeForm, setNewEmployeeForm] = useState({
    name: "",
    email: "",
    isAdmin: false,
    jobTitle: "",
    department: "",
    location: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setNewEmployeeForm((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newEmployeeForm);
    try {
      const employeeData = await axios({
        method: "POST",
        url: "/server/dashboard/new/employee",
        data: newEmployeeForm,
      });
      //   console.log(employeeData); // logging the data
      setEmployee([...employee, employeeData.data]);

      setNewEmployeeForm({
        name: "",
        email: "",
        isAdmin: false,
        jobTitle: "",
        department: "",
        location: "",
        bio: "",
      });
    } catch (err) {
      console.log("error sending adding a new employee", err);
    }
  };

  return (
    <div id="createEmployee">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newEmployeeForm.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newEmployeeForm.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Is Admin:</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={newEmployeeForm.isAdmin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={newEmployeeForm.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={newEmployeeForm.department}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newEmployeeForm.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={newEmployeeForm.bio}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
