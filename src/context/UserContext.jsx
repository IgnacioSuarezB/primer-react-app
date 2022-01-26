import React, { useEffect, useState } from "react";
import { authChanged } from "../services/firebase";

const UserContext = React.createContext([]);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    authChanged(setUser);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
