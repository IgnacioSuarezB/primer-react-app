import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (item) =>
    setCartItems([...cartItems, item].sort((a, b) => a.id - b.id));
  const removeItem = (itemId) => {
    let newCart = cartItems;
    let index = cartItems.map((item) => item.id).indexOf(itemId);
    newCart.splice(index, 1);
    setCartItems([...newCart]);
  };
  const clearCart = () => setCartItems([]);
  const itemInCart = (cartItems, itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };
  const changeQuantity = (item, quantity) => {
    if (quantity !== "") {
      removeItem(item.id);
      let change = item;
      change.quantity = parseInt(quantity);
      addItem(change);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearCart,
        itemInCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
