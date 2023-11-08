import React from "react";
import "./index.css";

const UpdateEmployee = ({
  employeeToEdit,
  setEmployeeToEdit,
  isOpen,
  onRequestClose,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an Axios request to update the employee data on the server
    try {
      // Replace with the actual endpoint to update an employee
      const response = await axios.put(
        `/server/dashboard/employees/${employeeToEdit._id}`,
        {
          name: employeeToEdit.name, // Update with other properties
          // Add other properties here
        }
      );

      // Handle the response, e.g., show a success message
      console.log("Employee updated successfully", response.data);

      // Close the modal and reset the employeeToEdit state
      setEmployeeToEdit(null);
    } catch (error) {
      console.error("Error updating employee", error);
    }
  };

  return (
    <div id="updateEmployee">
      <h3>Update Employee</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employeeToEdit.name}
            // Add an onChange handler to update 'employeeToEdit.name' when the input changes
            onChange={(e) =>
              setEmployeeToEdit({ ...employeeToEdit, name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employeeToEdit.email}
            // Add an onChange handler for 'email' property
            onChange={(e) =>
              setEmployeeToEdit({ ...employeeToEdit, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Is Admin:</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={employeeToEdit.isAdmin}
            // Add an onChange handler for 'isAdmin' property
            onChange={(e) =>
              setEmployeeToEdit({
                ...employeeToEdit,
                isAdmin: e.target.checked,
              })
            }
          />
        </div>

        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={employeeToEdit.jobTitle}
            // Add an onChange handler for 'jobTitle' property
            onChange={(e) =>
              setEmployeeToEdit({ ...employeeToEdit, jobTitle: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employeeToEdit.department}
            // Add an onChange handler for 'department' property
            onChange={(e) =>
              setEmployeeToEdit({
                ...employeeToEdit,
                department: e.target.value,
              })
            }
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={employeeToEdit.location}
            // Add an onChange handler for 'location' property
            onChange={(e) =>
              setEmployeeToEdit({ ...employeeToEdit, location: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={employeeToEdit.bio}
            // Add an onChange handler for 'bio' property
            onChange={(e) =>
              setEmployeeToEdit({ ...employeeToEdit, bio: e.target.value })
            }
            required
          />
        </div>

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
