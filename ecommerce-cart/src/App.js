import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { InventoryProvider } from "./InventoryContext";
import { InventoryProvider } from "./components/Inventory";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <InventoryProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </InventoryProvider>
  );
}

export default App;
