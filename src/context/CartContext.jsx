import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === product.name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increment = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Retorna quantidade do produto pelo nome
  const getProductQuantity = (name) => {
    const product = cart.find((item) => item.name === name);
    return product ? product.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, getProductQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto
export const useCart = () => useContext(CartContext);
