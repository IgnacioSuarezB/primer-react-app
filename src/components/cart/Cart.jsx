import { useContext } from "react";
import CartContext from "./CartContext";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const handleQuantity = () => null;
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>No hay items</h2>
      ) : (
        <div>
          <h1 className="mb-4 text-start">Carrito de compras</h1>
          <div className="d-flex">
            <div className="items col-9">
              {cartItems.map((item) => (
                <div className="items d-flex flex-row mb-4" key={item.id}>
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-5 ">
                    <h3>{item.title}</h3>
                    <p className="text-start fs-5 mx-3">{item.description}</p>
                  </div>
                  <div className="col-2 mt-4">
                    <input
                      className="col-3 text-center"
                      type="number"
                      defaultValue={item.quantity}
                      onChange={() => handleQuantity(item.id)}
                    />
                    <span> x {item.price}</span>
                  </div>
                  <div className="col-2 mt-4">
                    <span>$ {item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="resumen col-3">
              <div className="border m-4 p-4 border-info border-0 rounded rounded-2 bg-dark bg-gradient ">
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
                <button className="mt-3">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => removeItem(0)}>Remover item id 0</button>
    </div>
  );
};

export default Cart;
