import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { registerUser } from "../../services/firebase";
import SingUpForm from "./SingUpForm";

const SingUp = () => {
  const { setUser } = useContext(UserContext);
  const handleSingUp = (e) => {
    e.preventDefault();
    registerUser(
      e.target.email.value,
      e.target.password.value,
      e.target.name.value,
      e.target.phone.value
    ).then((user) => {
      setUser(user);
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
