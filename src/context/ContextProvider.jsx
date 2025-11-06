import React, { createContext, useEffect, useState } from "react";
import { all_products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Accordion
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Search
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(all_products);

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Cart
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist wishlist & cart
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [wishlist, cart]);

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (!exists) return [...prev, product];
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  // Cart functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Search function (filter as you type)
   const searchFun = (value) => {
    setInput(value); // update input state
    const filtered = all_products.filter((product) =>
      product.type.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <MyContext.Provider
      value={{
        openIndex,
        setOpenIndex,
        toggleAccordion,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        cart,
        addToCart,
        removeFromCart,
        input,
        setInput,
        filteredProducts,
        searchFun,
        navigate,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
