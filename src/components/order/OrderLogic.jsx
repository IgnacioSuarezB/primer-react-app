import { useEffect, useState } from "react";
import { getOrder } from "../../services/firebase";
import Loader from "../general/Loader";
import Order from "./Order";

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
        <Order order={order} />
      )}
    </div>
  );
};

export default OrderDetail;
