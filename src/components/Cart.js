import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="cart" id="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleDecrease(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
