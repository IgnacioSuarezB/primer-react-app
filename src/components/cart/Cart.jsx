import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

/// clase firebase 2

const Cart = () => {
  const [formInput, setFormInput] = useState(false);
  const { cartItems, removeItem, changeQuantity, clearCart } =
    useContext(CartContext);
  let total =
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
    300;

  const formRef = useRef(null);

  const handleShopout = () => {
    setFormInput(true);
    setTimeout(() => {
      formRef.current.scrollIntoView();
    }, 300);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formularioCompleto = {
      buyer: {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
      items: [...cartItems],
      total: total,
    };
    console.log(formularioCompleto);
  };

  return (
    <div className="mb-5">
      {cartItems.length === 0 ? (
        <>
          <h2>No hay items en el carrito</h2>
          <Link to={"/"} className="nav-link">
            Ver productos
          </Link>
        </>
      ) : (
        <div>
          <h1 className="mb-4 text-start">Carrito de compras</h1>
          <div className="d-flex">
            <div className="items col-9">
              {cartItems.map((item) => (
                <div
                  className="items d-flex flex-row align-items-center mb-4"
                  key={item.id}
                >
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-5">
                    <h3>{item.title}</h3>
                    <p className="text-start fs-5 mx-3 my-0">
                      {item.description}
                    </p>
                    <p className="text-start fs-6 mx-3 my-0">
                      Stock disponible: {item.stock}
                    </p>
                  </div>
                  <div className="col-2">
                    <input
                      className="col-3 text-center"
                      type="number"
                      defaultValue={item.quantity}
                      onChange={(e) => changeQuantity(item, e.target.value)}
                      min={0}
                      max={item.stock}
                      step={1}
                    />
                    <span> x {item.price}</span>
                  </div>
                  <div className="col-2">
                    <span>$ {item.price * item.quantity}</span>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-danger"
                onClick={clearCart}
              >
                Eliminar todos los items
              </button>
            </div>
            <div className="resumen col-3">
              <div className="border m-4 me-0 p-4 border-info border-0 rounded rounded-2 bg-dark bg-gradient ">
                <h2 className="mb-4">Resumen</h2>
                <div className="text-start fs-4">
                  <p className="mb-0">Productos</p>
                  <p className="pb-0">
                    $
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </p>
                  <p className="mb-0">Envio</p>
                  <p>$ 300</p>
                  <p className="mb-0">Total a pagar</p>
                  <p>
                    $
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) + 300}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={handleShopout}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {formInput === true ? (
        <form onSubmit={handleSubmit} className="text-start fs-3" ref={formRef}>
          <h1>Formulario de compra</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Dirección Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre y Apellido
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Número de Celular
            </label>
            <input type="number" className="form-control" id="phone" />
          </div>

          <button type="submit" className="btn btn-primary">
            Comprar
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Cart;
