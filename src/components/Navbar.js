import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="#cart">Cart ({cartItems.length}) </a>
      {/* <Link to="/cart">Cart ({cartItems.length})</Link> */}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
