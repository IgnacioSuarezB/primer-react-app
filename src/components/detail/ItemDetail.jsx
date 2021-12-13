import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "./ItemCount";
const ItemDetail = ({ item = [] }) => {
  const [cartStock, setCartStock] = useState(0);
  function handleCount(addCart) {
    setCartStock(addCart);
  }
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
              <ItemCount stockInicial={item.stock} onAdd={handleCount} />
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
