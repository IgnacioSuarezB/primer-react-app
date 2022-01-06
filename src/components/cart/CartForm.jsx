const CartForm = ({ handleSubmit, formRef }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-start fs-3 cartContainer"
      ref={formRef}
    >
      <h1>Formulario de compra</h1>
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
          className="form-control"
          id="emailcheck"
          aria-describedby="emailcheck"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Comprar
      </button>
    </form>
  );
};

export default CartForm;
