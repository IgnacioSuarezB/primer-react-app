import { useEffect, useState } from "react/cjs/react.development";
import { db } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../general/Loader";

const OrderDetail = ({ orderId }) => {
  const [order, setOrder] = useState({});
  useEffect(() => {
    getDoc(doc(db, "orders", orderId))
      .then((querySnapshot) => {
        const orderData = { id: querySnapshot.id, ...querySnapshot.data() };
        setOrder(orderData);
        console.log(orderData);
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
          <h3>Numero de Orden {order.id}</h3>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
