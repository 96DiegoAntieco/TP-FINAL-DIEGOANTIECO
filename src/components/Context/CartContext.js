import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({
  cart: [],
});

export const CardPovider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };

  const totalCantidad = () =>
    cart.reduce(
      (acumulador, productosActual) => acumulador + productosActual.cantidad,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalPrecio,
        totalCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
