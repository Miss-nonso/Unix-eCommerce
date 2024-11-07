import React, { createContext, useState, useEffect } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
