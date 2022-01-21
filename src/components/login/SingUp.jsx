import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { registerUser } from "../../services/firebase";
import SingUpForm from "./SingUpForm";

const SingUp = () => {
  const { setUsuario } = useContext(UserContext);
  const handleSingUp = (e) => {
    e.preventDefault();
    registerUser(e.target.email.value, e.target.password.value).then((user) => {
      setUsuario(user);
    });
  };
  return (
    <div>
      <h1>¡Hola! Create una cuenta</h1>
      <SingUpForm handleSingUp={handleSingUp} />
    </div>
  );
};

export default SingUp;
