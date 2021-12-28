import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = ({ height }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="d-flex">
      <span className="pe-3 fs-2 " style={{ color: "orange" }}>
        {cartItems.length === 0
          ? null
          : cartItems.reduce((total, item) => total + item.quantity, 0)}
      </span>
      <img
        style={{ height: height }}
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png"
        alt="Carrito de compra"
      />
    </div>
  );
};

export default CartWidget;
