import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = ({ height }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <span className="pe-3 fs-2 " style={{ color: "orange" }}>
      {cartItems.length === 0
        ? null
        : cartItems.reduce((total, item) => total + item.quantity, 0)}
    </span>
  );
};

export default CartWidget;
