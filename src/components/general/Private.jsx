import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Private = () => {
  const { user } = useContext(UserContext);
  return (
    user && <div style={{ color: "orange" }}>El usuario esta logueado</div>
  );
};

export default Private;
