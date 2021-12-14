import { useContext } from "react";
import CartContext from "./CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>{cartItems[0].title}</h1>
    </div>
  );
};

export default Cart;
