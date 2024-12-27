import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Categories from './Categories.js';
import Banner from './Banner.js';
import ProductSection from './ProductSection.js';
import Login from './Login.js';
import Cart from './Cart.js';
import BecomeSeller from './BecomeSeller.js';
import PaymentPage from './Paymentpage.js';
import CategoryItems from './CategoryItems.js';
import Footer from './Footer.js';
import ProductDetail from './ProductDetail.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />

        <Routes>
          {/* Starting page route */}
          <Route
            path="/"
            element={
              <>
                <Categories />
                <Banner />
                <ProductSection handleAddToCart={handleAddToCart} />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <PaymentPage
                onReset={() => {
                  window.location.href = "/"; // Redirect to the starting page
                }}
              />
            }
          />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/category/:category" element={<CategoryItems />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/product/:category/:productName" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
