import { createContext, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  // state
  const [customerForm, setCustomerForm] = useState([]);

  // return
  return (
    <primaryContext.Provider
      // values
      value={{
        customerForm,
        setCustomerForm,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
