import { useEffect, useState } from "react/cjs/react.development";
import { getOrder } from "../../services/firebase";
import Loader from "../general/Loader";

const OrderDetail = ({ orderId }) => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    getOrder(orderId)
      .then((order) => {
        setOrder(order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderId]);

  return (
    <div>
      {Object.keys(order).length === 0 ? (
        <Loader />
      ) : Object.keys(order).length === 1 ? (
        <div>
          <h2>No existe orden de compra con la siguiente ID</h2>
          <h3>ID: {order.id}</h3>
          <h3>Comuniquese con Soporte</h3>
        </div>
      ) : (
        <div>
          <h1>Resumen de Compra</h1>
          <h3 className="mb-5">Numero de Orden: {order.id}</h3>
          {order.items.map((item) => (
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
                <p className="text-start fs-6 mx-3 my-0">{item.description}</p>
              </div>
              <div className="col-2">
                <span>{item.quantity}</span>
                <span> x {item.price}</span>
              </div>
              <div className="col-2">
                <span>$ {item.price * item.quantity}</span>
              </div>
              <div className="col-1"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
