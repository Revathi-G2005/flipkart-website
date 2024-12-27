import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Add styling for the product detail page
import { productData } from './CategoryItems'; // Ensure this path is correct

const ProductDetail = () => {
  const { category, productName } = useParams(); // Get category and productName from URL

  // Flatten product data and find the product by name
  const categoryItems = productData[category];
  const product = categoryItems?.find((item) => item.name.toLowerCase().replace(/\s+/g, '-') === productName);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.img} alt={product.name} className="product-img" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>Price: ₹{product.price}</p>
        <p>Description: {product.description || 'No description available.'}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;