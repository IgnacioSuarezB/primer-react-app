import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/firebase";
import LoginForm from "./LoginForm";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(e.target.email.value, e.target.password.value);
  };
  return (
    <div>
      <h1>Hola! Ingresá tu e‑mail y contraseña</h1>
      <LoginForm handleLogin={handleLogin} />
      <Link to="/singup">Crear un nuevo usuario</Link>
    </div>
  );
};

export default Login;
