import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Product.css';

const Product = ({ category, product, handleAddToCart, handleBuyNow, handleProductClick }) => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleBuyNowClick = (item, e) => {
    e.stopPropagation(); // Prevent triggering `onClick` for the parent
    // Navigate to the payment page with the product id or other relevant data
    navigate(`/payment?productId=${item.id}`);
    // Optionally, you can call the handleBuyNow function to perform additional actions
    if (handleBuyNow) {
      handleBuyNow(item);
    }
  };

  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="product-list">
        {product.items.map((item, index) => (
          <div
            className="product-item"
            key={index}
            onClick={() => handleProductClick(item)} // Handle product click to show details
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p className="price">₹{item.price}</p>
            <div className="buttons">
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering `onClick` for the parent
                  handleAddToCart(item);
                }}
              >
                Add to Cart
              </button>
              <button
                className="buy-now"
                onClick={(e) => handleBuyNowClick(item, e)} // Use the custom `handleBuyNowClick`
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
