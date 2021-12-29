import { useParams } from "react-router-dom";
import OrderDetail from "./OrderDetail";

const OrderContainer = () => {
  const { orderId } = useParams();
  console.log("parametro", orderId, "fin");
  //Object.keys(order).length === 0 ?
  return (
    <div>
      {orderId === "find" ? (
        <form>
          <input type="text" name="findOrder" id="findOrder" />
          <input type="submit" value="Buscar" />
        </form>
      ) : (
        <OrderDetail orderId={orderId} />
      )}
    </div>
  );
};

export default OrderContainer;
