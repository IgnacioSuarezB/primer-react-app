import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { loginUser } from "../../services/firebase";
import LoginForm from "./LoginForm";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(e.target.email.value, e.target.password.value).then((user) => {
      setUser(user);
    });
  };
  return (
    <div>
      {user && <Redirect to="/cart" />}
      <h1>Hola! Ingresá tu e‑mail y contraseña</h1>
      <LoginForm handleLogin={handleLogin} />
      <Link to="/singup">Crear un nuevo usuario</Link>
    </div>
  );
};

export default Login;
