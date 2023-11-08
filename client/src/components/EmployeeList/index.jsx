import React, { useContext, useState } from "react";
import "./index.css";
import { primaryContext } from "../../Context/primaryContext";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import user from "../../assets/userImg/user1.png";
import user2 from "../../assets/userImg/user2.png";
import user3 from "../../assets/userImg/user3.png";
import user4 from "../../assets/userImg/user4.jpg";
import user5 from "../../assets/userImg/user5.jpg";
import user6 from "../../assets/userImg/user6.jpg";
import user7 from "../../assets/userImg/user7.jpg";
import user8 from "../../assets/userImg/user8.jpg";
import user9 from "../../assets/userImg/user9.jpg";
import user10 from "../../assets/userImg/user10.jpg";
import axios from "axios";
import CreateEmployee from "../CreateEmployee";
import UpdateEmployee from "../updateEmployee";
import Modal from "react-modal";

const EmployeeList = () => {
  const { employee, setEmployee } = useContext(primaryContext);
  const [newEmployeeForm, setNewEmployeeForm] = useState(false);
  const [updatedEmployee, setsUpdatedEmployee] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  //   console.log(employee);
  const usersImg = [
    user,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ];
  // it adds an image to each user based on the usersImg
  //   need to fix this, find another way make it run faster
  const shuffledUserImg = [...usersImg];
  for (let i = shuffledUserImg.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledUserImg[i], shuffledUserImg[j]] = [
      shuffledUserImg[j],
      shuffledUserImg[i],
    ];
  }
  const updateEmployee = (id) => {
    setEmployeeToEdit(id);
    setsUpdatedEmployee(true);
  };

  const handleAddEmployee = () => {
    setNewEmployeeForm(true);
  };
  const handleCloseModal = () => {
    setNewEmployeeForm(false);
    setsUpdatedEmployee(false);
  };
  const handleCloseModale = () => {
    setIsUpdateModalOpen(false);
    setEmployeeToEdit(null);
  };
  // delete function for each employee, takes it away from mongodb too
  const handleDelete = (id) => {
    try {
      axios({
        method: "DELETE",
        url: `/server/dashboard/employees/${id}`,
      }).then(() => {
        let newEmployees = employee.filter((employee) => {
          return employee._id !== id;
        });
        setEmployee(newEmployees);
      });
    } catch (err) {
      console.error("Error deleting employee", err);
    }
  };
  const getEmployeeToEdit = () => {
    return employee.find((person) => person._id === employeeToEdit);
  };

  return (
    <div id="employeeList">
      <div className="employeeHeader">
        <h3 className="employeeTitle">Meet your Team</h3>
        <div className="employeeCatalog">
          <ul className="employeeNav">
            <li>Name</li>
          </ul>
          <PersonAddIcon className="employeeAdd" onClick={handleAddEmployee} />
        </div>
      </div>
      <div className="employeesListContainer">
        {employee.map((person, index) => {
          return (
            <div key={person._id} className="employeeContainer">
              <img
                src={shuffledUserImg[index % shuffledUserImg.length]}
                alt={person.name}
                className="employeeImg"
              />
              <p>{person.name}</p>
              <EditIcon
                className="employeeEdit"
                onClick={() => updateEmployee(person._id)}
              />
              <PersonRemoveIcon
                className="employeeRemove"
                onClick={() => handleDelete(person._id)}
              />
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={newEmployeeForm}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            width: "900px", // Set the desired width
            height: "600px", // Set the desired height
            margin: "auto", // Center the modal horizontally
            padding: "0",
            borderRadius: "15px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxShadow: "0px 5px 10px rgba(226, 226, 226, 0.2)",
          },
        }}
      >
        <CreateEmployee />
      </Modal>
      <Modal
        isOpen={updatedEmployee}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            width: "900px", // Set the desired width
            height: "600px", // Set the desired height
            margin: "auto", // Center the modal horizontally
            padding: "0",
            borderRadius: "15px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxShadow: "0px 5px 10px rgba(226, 226, 226, 0.2)",
          },
        }}
      >
        <UpdateEmployee
          employeeToEdit={getEmployeeToEdit()}
          setEmployeeToEdit={setEmployeeToEdit}
          isOpen={isUpdateModalOpen}
          onRequestClose={handleCloseModale}
        />
      </Modal>
    </div>
  );
};

export default EmployeeList;
