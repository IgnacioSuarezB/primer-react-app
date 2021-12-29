import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import OrderDetail from "./OrderDetail";

const OrderContainer = () => {
  const { orderId } = useParams();
  const [id, setId] = useState(orderId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(e.target.findOrder.value);
  };

  return (
    <div>
      {id === "find" ? (
        <form onSubmit={handleSubmit}>
          <h1>Buscar orden de compra</h1>
          <input
            type="text"
            name="findOrder"
            id="findOrder"
            placeholder="Ingrese ID de compra"
          />
          <input type="submit" value="Buscar" />
        </form>
      ) : (
        <OrderDetail orderId={id} />
      )}
    </div>
  );
};

export default OrderContainer;
