import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    itemInCart(item.id)
      ? changeQuantity(item, quantity)
      : setCartItems(
          [...cartItems, { ...item, quantity }].sort(
            (a, b) => a.price - b.price
          )
        );
  };

  const removeItem = (itemId) => {
    let newCart = cartItems;
    let index = cartItems.map((item) => item.id).indexOf(itemId);
    newCart.splice(index, 1);
    setCartItems([...newCart]);
  };

  const clearCart = () => setCartItems([]);

  const itemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const changeQuantity = (item, quantity) => {
    if (quantity !== "") {
      let stock = item.stock;
      let newQuantity = 0;
      removeItem(item.id);
      if (stock > quantity && quantity >= 0) newQuantity = parseInt(quantity);
      if (stock <= quantity) newQuantity = stock;
      if (quantity < 0) newQuantity = 0;
      addItem(item, newQuantity);
    }
  };
  const itemsQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearCart,
        itemInCart,
        changeQuantity,
        itemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
