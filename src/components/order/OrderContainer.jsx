import { useParams } from "react-router-dom";
import { useState } from "react";
import OrderLogic from "./OrderLogic";

const OrderContainer = () => {
  const { orderId } = useParams();
  const [id, setId] = useState(orderId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(e.target.findOrder.value);
  };

  return (
    <div>
      {id === "0" ? (
        <form onSubmit={handleSubmit}>
          <h1>Buscar orden de compra</h1>
          <input
            type="text"
            name="findOrder"
            id="findOrder"
            placeholder="Ingrese ID de compra"
            required
          />
          <input type="submit" value="Buscar" />
        </form>
      ) : (
        <OrderLogic orderId={id} />
      )}
    </div>
  );
};

export default OrderContainer;
