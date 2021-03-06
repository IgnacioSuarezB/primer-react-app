import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { firestoreSetOrder } from "../../services/firebase";
import { formatPrice } from "../../services/services";
import CartItem from "./CartItem";
import UserContext from "../../context/UserContext";
const Cart = () => {
  const [formInput, setFormInput] = useState(false);
  const [redirect, setRedirect] = useState("false");
  const { cartItems, removeItem, changeQuantity, clearCart } =
    useContext(CartContext);

  const { user } = useContext(UserContext);

  const envio = 300;
  let total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleShopout = () => {
    if (user)
      firestoreSetOrder([...cartItems], user, total + envio)
        .then((id) => {
          clearCart();
          setFormInput(false);
          setRedirect(id);
        })
        .catch((error) => {
          console.error("Error en enviar el formulario ", error);
          setRedirect("error-page");
        });
    else {
      setFormInput(true);
    }
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <h2>No hay items en el carrito</h2>
          <Link to={"/"} className="nav-link">
            Ver productos
          </Link>
        </>
      ) : (
        <div className="cartContainer col-12">
          <h1 className="mb-4 text-start">Carrito de compras</h1>
          <div className="d-flex">
            <div className="items col-9">
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  removeItem={removeItem}
                  changeQuantity={changeQuantity}
                  key={item.id}
                />
              ))}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  clearCart();
                  setFormInput(false);
                }}
              >
                Eliminar todos los items
              </button>
            </div>
            <div className="resumen col-3">
              <div className="border m-4 me-0 p-4 border-info border-0 rounded rounded-2 bg-dark bg-gradient ">
                <h2 className="mb-4">Resumen</h2>
                <div className="text-start fs-4">
                  <p className="mb-0">Productos</p>
                  <p className="pb-0">$ {formatPrice(total)}</p>
                  <p className="mb-0">Envio</p>
                  <p>$ {formatPrice(envio)}</p>
                  <p className="mb-0">Total a pagar</p>
                  <p>$ {formatPrice(total + envio)}</p>
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
        <Link to="/login">Ingrese para finalizar la compra</Link>
      ) : (
        redirect !== "false" && <Redirect to={"/order/" + redirect} />
      )}
    </>
  );
};

export default Cart;
