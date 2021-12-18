import { useContext } from "react";
import CartContext from "./CartContext";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>No hay items</h2>
      ) : (
        <div>
          <h1>{cartItems[0].title}</h1>
          <h2>{cartItems[0].quantity}</h2>
        </div>
      )}
      <button onClick={() => removeItem(0)}>Remover item id 0</button>
    </div>
  );
};

export default Cart;
