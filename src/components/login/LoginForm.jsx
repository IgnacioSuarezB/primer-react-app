import React from "react";

const LoginForm = ({ handleLogin }) => {
  return (
    <form onSubmit={handleLogin} className="text-start fs-3 mt-5">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Dirección Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Constreseña
        </label>
        <input
          type="password"
          className="form-control "
          id="password"
          aria-describedby="password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;
