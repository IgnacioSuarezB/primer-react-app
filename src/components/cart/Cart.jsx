import { useContext } from "react";
import CartContext from "./CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div>
      {cartItems[0] !== undefined ? (
        <div>
          <h1>{cartItems[0].title}</h1>
          <h2>{cartItems[0].quantity}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
