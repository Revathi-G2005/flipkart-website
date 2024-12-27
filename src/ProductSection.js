import React, { useState } from 'react';
import Product from './Product.js';
import './ProductSection.css';
import washingImage from './assets/washing.png';
import fridgeImage from './assets/fridge.png';
import acImage from './assets/ac.png';
import microwaveImage from './assets/microwave.png';
import smartphoneImage from './assets/smartphone.png';
import headphonesImage from './assets/headphones.png';
import smartwatchImage from './assets/smartwatch.png';
import ledTvImage from './assets/LED TV.png';
import tshirtImage from './assets/tshirt.png';
import jeansImage from './assets/jeans.png';
import jacketImage from './assets/jacket.png';
import dressImage from './assets/dress.png';
import iphoneImage from './assets/iphone.png';
import samsungImage from './assets/samsung.png';
import oneplusImage from './assets/oneplus.png';
import realmeImage from './assets/realme.png';
import riceImage from './assets/rice.png';
import tomatoImage from './assets/tomato.png';
import potatoImage from './assets/potato.png';
import milkImage from './assets/milk.png';
import sofaImage from './assets/sofa.png';
import diningImage from './assets/dining.png';
import cabinetImage from './assets/cabinet.png';
import chairImage from './assets/chair.png';
import makeupImage from './assets/makeup.png';
import carImage from './assets/car.png';
import dollImage from './assets/doll.png';
import perfumeImage from './assets/perfume.png';
import escooterImage from './assets/escooter.png';
import bikeImage from './assets/motor.png';
import cycleImage from './assets/cycle.png';
import motorImage from './assets/scooter.png';




const ProductSection = ({ handleAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Store the clicked product details
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null); // Close product details view
  };
  

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
  };

  const handleAddToCartWithAlert = (product) => {
    alert('Added To Cart 🛒');  // Alert message
    handleAddToCart(product);  // Call the parent function to actually add to the cart
  };



  const products = [
    {
      category: 'Best of Electronics',
      items: [
        { name: 'Smartphone', price: 999, img: smartphoneImage },
        { name: 'Bluetooth Headphones', price: 1299, img: headphonesImage },
        { name: 'Smartwatch', price: 2499, img: smartwatchImage },
        { name: 'LED TV', price: 79999, img: ledTvImage },
      ],
    },
    {
        category:'Best of Fashion',
        items:[
          { name: 'T-shirt', price: 499, img: tshirtImage },
          { name: 'Jeans', price: 1299, img: jeansImage },
          { name: 'Jacket', price: 2199, img: jacketImage },
          { name: 'Dress', price: 899, img: dressImage },
        ],
    },
    {
        category:'Best of Mobiles',
        items:[
          { name: 'iPhone 13', price: 69999, img: iphoneImage },
          { name: 'Samsung Galaxy S21', price: 59999, img: samsungImage },
          { name: 'OnePlus 9', price: 49999, img: oneplusImage },
          { name: 'Realme 8', price: 18999, img: realmeImage },
        ],
    },
    {
        category:'Best of Grocery',
        items:[
          { name: 'Rice (1kg)', price: 40, img: riceImage },
          { name: 'Tomatoes (500g)', price: 30, img: tomatoImage },
          { name: 'Potatoes (1kg)', price: 35, img: potatoImage },
          { name: 'Milk (1L)', price: 45, img: milkImage },
        ],
    },
    {
        category:'Best of  Home & Furniture',
        items:[
          { name: 'Sofa Set', price: 15999, img: sofaImage },
          { name: 'Dining Table', price: 9999, img: diningImage },
          { name: 'Cabinet', price: 7499, img: cabinetImage },
          { name: 'Chair', price: 1299, img: chairImage },
        ],
    },
    {
        category:'Best of  Appliances',
        items:[
          { name: 'Washing Machine', price: 18499, img: washingImage },
      { name: 'Refrigerator', price: 25999, img: fridgeImage },
      { name: 'Air Conditioner', price: 35999, img: acImage },
      { name: 'Microwave', price: 7299, img: microwaveImage },
        ],
    },
    
    {
        category:'Best of Beauty & Toys',
        items:[
          { name: 'Makeup Kit', price: 1299, img: makeupImage },
          { name: 'Toy Car', price: 499, img: carImage },
          { name: 'Doll', price: 799, img: dollImage },
          { name: 'Perfume', price: 999, img: perfumeImage },
        ],
    },
    {
        category:'Best of Two Wheelers',
        items:[
            { name: 'Electric Scooter', price: 45000, img: escooterImage },
    { name: 'Motorbike', price: 120000, img: bikeImage },
    { name: 'Bicycle', price: 5999, img: cycleImage },
    { name: 'Motor Scooter', price: 75000, img: motorImage }
        ],
    },
    
  ];
  
  return (
    <section className="products">
    {selectedProduct ? (
      <div className="product-details">
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.img} alt={selectedProduct.name} />
        <p>Price: ₹{selectedProduct.price}</p>
        <button onClick={handleCloseDetails}>Close</button>
      </div>
    ) : (
      products.map((product, index) => (
        <Product
          key={index}
          category={product.category}
          product={product}
          handleAddToCart={handleAddToCartWithAlert}  
          handleBuyNow={handleBuyNow}
          handleProductClick={handleProductClick}
         
        />
      ))
    )}
  </section>
  );
};

export default ProductSection;