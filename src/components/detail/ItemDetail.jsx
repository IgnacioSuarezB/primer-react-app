import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item = [] }) => {
  const [cartStock, setCartStock] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const { cartItems, addItem, itemInCart } = useContext(CartContext);

  useEffect(() => {
    if (cartStock !== 0) {
      if (itemInCart(cartItems, item.id)) {
        setIsInCart(true);
      } else {
        item.quantity = cartStock;
        addItem(item);
      }
    }
    // eslint-disable-next-line
  }, [cartStock]);

  return (
    <div className="text-start my-3">
      {item.stock === undefined ? null : (
        <div className="row align-items-start">
          <img src={item.url} className="col-3" alt={item.description} />
          <div className=" col-9">
            <h1>Detalles de {item.title}</h1>
            <span>Precio de lista: $ {item.price}</span>
            <p className="fs-5">Caracteristicas: {item.detail}</p>
            {cartStock === 0 ? (
              <ItemCount stockInicial={item.stock} onAdd={setCartStock} />
            ) : isInCart ? (
              <div class="alert alert-warning text-center" role="alert">
                Ya posee este producto en el carrito{" "}
                <Link className="ms-4" to={"/cart"}>
                  Ir al carrito
                </Link>
              </div>
            ) : (
              <div>
                <h4>
                  Se agregaron {cartStock} {item.title} al carrito
                </h4>
                <Link to={"/"}>Seguir comprando</Link>
                <Link className="ms-4" to={"/cart"}>
                  Terminar compra
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
