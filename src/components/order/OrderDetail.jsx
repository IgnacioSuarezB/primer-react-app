import { useEffect, useState } from "react/cjs/react.development";
import { db } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../general/Loader";

const OrderDetail = ({ orderId }) => {
  const [order, setOrder] = useState({});
  console.log(orderId);
  useEffect(() => {
    getDoc(doc(db, "orders", orderId))
      .then((querySnapshot) => {
        const orderData = { id: querySnapshot.id, ...querySnapshot.data() };
        setOrder(orderData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderId]);
  console.log(order);

  return (
    <div>
      {Object.keys(order).length === 0 ? (
        <Loader />
      ) : (
        <div>Orden {order.id}</div>
      )}
    </div>
  );
};

export default OrderDetail;
