import React, { useState } from 'react';
import './BecomeSeller.css';

const BecomeSeller = () => {
  // State to hold product list
  const [products, setProducts] = useState([]);
  
  // State to hold form values
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');

  // Handle form submission to add a new product
  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription,
    };

    setProducts([...products, newProduct]);

    // Reset the form
    setProductName('');
    setProductPrice('');
    setProductImage('');
    setProductDescription('');
  };

  // Handle deleting a product
  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="become-seller">
      {/* Add Product Form */}
      <section className="add-product">
        <h2>Add New Product</h2>
        <form onSubmit={handleAddProduct}>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label>Price:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />

          <label>Product Image URL:</label>
          <input
            type="url"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />

          <label>Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />

          <button type="submit">Add Product</button>
        </form>
      </section>

      {/* Product List Section */}
      <section className="product-list">
        <h2>Your Listed Products</h2>
        {products.length === 0 ? (
          <p>No products listed yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.image} alt={product.name} width="50" />
                  </td>
                  <td>{product.description}</td>
                  <td>
                    <button onClick={() => handleDeleteProduct(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default BecomeSeller;