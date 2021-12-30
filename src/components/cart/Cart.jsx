import { useContext, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import CartContext from "../../context/CartContext";
import {
  addDoc,
  doc,
  collection,
  writeBatch,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase";
/// clase firebase 2

const Cart = () => {
  const [formInput, setFormInput] = useState(false);
  const [redirect, setRedirect] = useState("false");
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
    }, 100);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arrayItems = [...cartItems];
    const batch = writeBatch(db);
    const outOfStock = [];
    arrayItems.forEach((item) => {
      getDoc(doc(db, "items", item.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= item.quantity) {
          console.log("update", documentSnapshot.id);
          batch.update(doc(db, "items", documentSnapshot.id), {
            stock: documentSnapshot.data().stock - item.quantity,
          });
        } else {
          outOfStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
      });
    });
    if (outOfStock.length === 0) {
      const shopoutForm = {
        buyer: {
          name: e.target.name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        },
        items: [...cartItems],
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      sendData(shopoutForm, batch);
      setTimeout(() => {
        console.log("5 seg");
      }, 5000);
    }
  };
  const sendData = (form, batch) => {
    addDoc(collection(db, "orders"), form).then(({ id }) => {
      batch.commit().then(() => console.log("La orden fue confirmada"));
      console.log("Su número de compra es", id);
      clearCart();
      setFormInput(false);
      setRedirect(id);
    });
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
        <div className="cartContainer">
          <h1 className="mb-4 text-start">Carrito de compras</h1>
          <div className="d-flex">
            <div className="items col-9">
              {cartItems.map((item) => (
                <div
                  className="items d-flex flex-row align-items-center mb-4"
                  key={item.id}
                >
                  <div className="col-2 bg-light">
                    <img
                      className="img-fluid"
                      src={item.url}
                      alt={item.title}
                      style={{
                        maxHeight: 150,
                      }}
                    />
                  </div>
                  <div className="col-5 ms-3 mt-2 align-self-start">
                    <h4 className="fs-5 text-start">{item.title}</h4>
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
        <form
          onSubmit={handleSubmit}
          className="text-start fs-3 cartContainer"
          ref={formRef}
        >
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
              required
            />
          </div>
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

          <button type="submit" className="btn btn-primary">
            Comprar
          </button>
        </form>
      ) : redirect === "false" ? null : (
        <Redirect to={"/order/" + redirect} />
      )}
    </div>
  );
};

export default Cart;
