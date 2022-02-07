import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { registerUser } from "../../services/firebase";
import SingUpForm from "./SingUpForm";

const SingUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleSingUp = (e) => {
    e.preventDefault();
    registerUser(
      e.target.email.value,
      e.target.password.value,
      e.target.name.value,
      e.target.phone.value
    )
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError({ ...err });
        document.getElementById("formSingUp").reset();
      });
  };
  return (
    <div>
      <h1>¡Hola! Create una cuenta</h1>
      <SingUpForm handleSingUp={handleSingUp} error={error} />

      {user && <Redirect to="/checkemail" />}
    </div>
  );
};

export default SingUp;
