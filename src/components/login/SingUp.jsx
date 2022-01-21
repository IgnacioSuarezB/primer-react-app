import React from "react";
import { registerUser } from "../../services/firebase";
import SingUpForm from "./SingUpForm";

const SingUp = () => {
  const handleSingUp = (e) => {
    e.preventDefault();
    registerUser(e.target.email.value, e.target.password.value);
  };
  return (
    <div>
      <h1>¡Hola! Create una cuenta</h1>
      <SingUpForm handleSingUp={handleSingUp} />
    </div>
  );
};

export default SingUp;
