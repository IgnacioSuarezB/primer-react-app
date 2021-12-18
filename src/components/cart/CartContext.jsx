import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (item) => setCartItems([...cartItems, item]);
  const removeItem = (itemId) => {
    let newCart = cartItems;
    let index = cartItems.map((item) => item.id).indexOf(itemId);
    newCart.splice(index, 1);
    setCartItems([...newCart]);
  };
  const clearCart = () => setCartItems([]);
  const ItemInCart = (cartItems, itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, ItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
