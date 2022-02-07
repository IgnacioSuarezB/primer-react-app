import React from "react";

const CheckEmail = () => {
  return (
    <div className="d-flex row justify-content-center mt-3">
      <div className="w-75">
        <h1>Verifica tu correo electrónico</h1>
        <div className=" text-start my-3">
          Gracias por registrarte en Deporto2. Por favor revisa su correo
          electrónico y verifique su email.
        </div>
      </div>
      <div className="mt-5">
        <hr />
        <span>¿No recibio ningun correo electrónico?</span>
        <button className="ms-3 btn btn-primary">Reenviar verificación</button>
      </div>
    </div>
  );
};

export default CheckEmail;
