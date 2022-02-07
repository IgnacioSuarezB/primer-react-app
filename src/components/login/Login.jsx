import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { loginUser } from "../../services/firebase";
import LoginForm from "./LoginForm";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(e.target.email.value, e.target.password.value)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError({ ...err });
        document.getElementById("formLogin").reset();
      });
  };
  return (
    <div>
      {user && <Redirect to="/cart" />}

      <h1 className="mb-4">Hola! Ingresá tu e‑mail y contraseña</h1>
      {error && (
        <span className="fs-5 bg-danger py-1 px-2 rounded-pill opacity-75">
          Usuario y contraseña no coinciden
        </span>
      )}
      <LoginForm handleLogin={handleLogin} />
      <Link to="/singup">Crear un nuevo usuario</Link>
    </div>
  );
};

export default Login;
