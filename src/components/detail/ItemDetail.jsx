import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";
import { formatPrice } from "../../services/services";

const ItemDetail = ({ item = [] }) => {
  const [cartStock, setCartStock] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    if (cartStock !== 0) {
      addItem(item, cartStock);
    }
    // eslint-disable-next-line
  }, [cartStock]);

  return (
    <div className="text-start my-3">
      {item.stock === undefined ? null : (
        <div className="row align-items-start">
          <div className="bg-light d-flex align-items-center justify-content-center col-3">
            <img
              src={item.url}
              style={{
                maxWidth: 250,
                maxHeight: 350,
              }}
              alt={item.description}
            />
          </div>
          <div className=" col-9">
            <h1 className="fs-2">Detalles de {item.title}</h1>
            <span>Precio de lista: $ {formatPrice(item.price)}</span>
            <p className="fs-5">Caracteristicas: {item.detail}</p>
            {cartStock === 0 ? (
              <ItemCount stockInicial={item.stock} onAdd={setCartStock} />
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
