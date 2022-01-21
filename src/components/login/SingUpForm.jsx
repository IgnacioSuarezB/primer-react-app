import React from "react";

const SingUpForm = ({ handleSingUp }) => {
  return (
    <form
      onSubmit={handleSingUp}
      className="text-start fs-3 cartContainer mt-5"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre y Apellido
        </label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Número de Celular
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          required
          pattern="[0-9]*"
        />
      </div>
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
        <label htmlFor="emailcheck" className="form-label">
          Verificar Email
        </label>
        <input
          type="email"
          className="form-control "
          id="emailcheck"
          aria-describedby="emailcheck"
          required
        />
        <div id="emailcheck" className="invalid-feedback">
          Los emails no coinciden
        </div>
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
        Crear una cuenta nueva
      </button>
    </form>
  );
};

export default SingUpForm;
