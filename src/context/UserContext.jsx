import React, { useState } from "react";

const UserContext = React.createContext([]);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const setUsuario = (usuario) => {
    setUser(usuario);
    console.log("context", usuario);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
