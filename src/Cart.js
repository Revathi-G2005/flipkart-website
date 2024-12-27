import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation
import './Cart.css';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Shopping Cart</h1>
      </header>

      <div className="cart-container">
        <div className="cart-items">
          <h2>Your Cart</h2>
          <div id="cart-items-container">
            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty. Add items to get started!</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">₹{item.price}</p>
                  </div>
                  
                </div>
              ))
            )}
          </div>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p id="total-items">Items in Cart: {cartItems.length}</p>
          <p id="total-price">Total Amount: ₹{totalPrice}</p>
          <Link to="/payment">
            <button className="checkout" id="checkout-btn" disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      <footer className="cart-footer">
        <p>&copy; 2024 Flipkart Replica. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Cart;