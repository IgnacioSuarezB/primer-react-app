import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    console.log([...cartItems, item]);
    console.log([...cartItems, item]);
    setCartItems([...cartItems, item].sort((a, b) => a.price - b.price));
  };

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
      let stock = item.stock;
      removeItem(item.id);
      let change = item;
      if (stock > quantity && quantity >= 0)
        change.quantity = parseInt(quantity);
      if (stock <= quantity) change.quantity = stock;
      if (quantity < 0) change.quantity = 0;
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
