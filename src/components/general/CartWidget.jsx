import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { itemsQuantity } = useContext(CartContext);

  return (
    <span className="pe-3 fs-2 " style={{ color: "orange" }}>
      {itemsQuantity() ? itemsQuantity() : null}
    </span>
  );
};

export default CartWidget;
