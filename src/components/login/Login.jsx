import React from "react";
import { registerEmail } from "../../services/firebase";
import CartForm from "../cart/CartForm";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Funciona de 10");
    registerEmail(e.target.email.value, e.target.name.value);
  };
  return (
    <div>
      <h1>Hola! Ingresá tu e‑mail o usuario</h1>
      <CartForm handleSubmit={handleLogin} />
    </div>
  );
};

export default Login;
