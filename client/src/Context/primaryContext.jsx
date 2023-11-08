import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  // state
  const [customerForm, setCustomerForm] = useState([]);
  const [employee, setEmployee] = useState([]);

  // API calls
  useEffect(() => {
    // axios call for employees
    try {
      axios({
        method: "GET",
        url: "/server/dashboard/employees",
      }).then((res) => {
        // console.log("EMPLOYEE DATA RESPONSE", res.data);
        setEmployee(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  //   console.log(employee);
  // return
  return (
    <primaryContext.Provider
      // values
      value={{
        customerForm,
        setCustomerForm,
        employee,
        setEmployee,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
