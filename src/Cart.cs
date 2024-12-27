/* Cart Page */
.cart-page {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Cart Header */
.cart-header {
  background-color: #2874f0;
  color: white;
  padding: 20px;
  text-align: center;
}

/* Cart Container */
.cart-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap; /* Allow items to wrap on mobile */
}

/* Cart Items Section */
.cart-items {
  flex: 2;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 50%;
}

/* Cart Item */
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-item img {
  max-width: 100px;
  height: auto;
  margin-right: 15px;
}

.cart-item-info {
  flex-grow: 1;
}

.cart-item-name {
  font-size: 1.1rem;
  font-weight: bold;
}

.cart-item-price {
  color: #888;
  font-size: 1rem;
}

.remove-item {
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
}

.remove-item:hover {
  background-color: #e64a19;
}

/* Cart Summary Section */
.cart-summary {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-summary h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.cart-summary p {
  font-size: 1.1rem;
  color: #333;
}

.checkout {
  background-color: #2874f0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  width: 100%;
  transition: background-color 0.3s ease;
}

.checkout:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.checkout:hover {
  background-color: #1a5db8;
}

/* Checkout Confirmation Message */
.checkout-message {
  text-align: center;
  background-color: #e8f5e9;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
}

.checkout-message h3 {
  font-size: 1.4rem;
  color: #388e3c;
}

.checkout-message p {
  color: #555;
}

/* Footer */
.cart-footer {
  text-align: center;
  background-color: #2874f0;
  color: white;
  padding: 10px;
  font-size: 0.9rem;
  margin-top: 30px;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  /* Stack cart items and summary vertically */
  .cart-container {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  /* Adjust cart-items section width for mobile */
  .cart-items {
    width: 100%; /* Full width on mobile */
    margin-bottom: 20px; /* Add space below */
  }

  /* Adjust cart-summary section width for mobile */
  .cart-summary {
    width: 100%; /* Full width on mobile */
  }

  /* Make cart item images smaller */
  .cart-item img {
    max-width: 80px;
  }

  /* Adjust remove item button size for mobile */
  .remove-item {
    font-size: 0.8rem;
    padding: 4px 8px;
  }

  /* Adjust checkout button font size for mobile */
  .checkout {
    font-size: 1rem;
    padding: 8px 16px;
  }

  /* Cart Header Font */
  .cart-header {
    font-size: 1.2rem;
    padding: 15px;
  }

  /* Cart Footer Font */
  .cart-footer {
    font-size: 0.8rem;
  }
}



  