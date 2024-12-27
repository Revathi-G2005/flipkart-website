import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryItems.css';

// Import image assets
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
import washingImage from './assets/washing.png';
import fridgeImage from './assets/fridge.png';
import acImage from './assets/ac.png';
import microwaveImage from './assets/microwave.png';
import makeupImage from './assets/makeup.png';
import carImage from './assets/car.png';
import dollImage from './assets/doll.png';
import perfumeImage from './assets/perfume.png';
import escooterImage from './assets/escooter.png';
import bikeImage from './assets/motor.png';
import cycleImage from './assets/cycle.png';
import motorImage from './assets/scooter.png';

// Product data
export const productData = {
  electronics: [
    { name: 'Smartphone', price: 999, img: smartphoneImage },
    { name: 'Bluetooth Headphones', price: 1299, img: headphonesImage },
    { name: 'Smartwatch', price: 2499, img: smartwatchImage },
    { name: 'LED TV', price: 79999, img: ledTvImage },
  ],
  fashion: [
    { name: 'T-shirt', price: 499, img: tshirtImage },
    { name: 'Jeans', price: 1299, img: jeansImage },
    { name: 'Jacket', price: 2199, img: jacketImage },
    { name: 'Dress', price: 899, img: dressImage },
  ],
  mobiles: [
    { name: 'iPhone 13', price: 69999, img: iphoneImage },
    { name: 'Samsung Galaxy S21', price: 59999, img: samsungImage },
    { name: 'OnePlus 9', price: 49999, img: oneplusImage },
    { name: 'Realme 8', price: 18999, img: realmeImage },
  ],
  grocery: [
    { name: 'Rice (1kg)', price: 40, img: riceImage },
    { name: 'Tomatoes (500g)', price: 30, img: tomatoImage },
    { name: 'Potatoes (1kg)', price: 35, img: potatoImage },
    { name: 'Milk (1L)', price: 45, img: milkImage },
  ],
  furniture: [
    { name: 'Sofa Set', price: 15999, img: sofaImage },
    { name: 'Dining Table', price: 9999, img: diningImage },
    { name: 'Cabinet', price: 7499, img: cabinetImage },
    { name: 'Chair', price: 1299, img: chairImage },
  ],
  appliances: [
    { name: 'Washing Machine', price: 18499, img: washingImage },
    { name: 'Refrigerator', price: 25999, img: fridgeImage },
    { name: 'Air Conditioner', price: 35999, img: acImage },
    { name: 'Microwave', price: 7299, img: microwaveImage },
  ],
  beautytoys: [
    { name: 'Makeup Kit', price: 1299, img: makeupImage },
    { name: 'Toy Car', price: 499, img: carImage },
    { name: 'Doll', price: 799, img: dollImage },
    { name: 'Perfume', price: 999, img: perfumeImage },
  ],
  twowheelers: [
    { name: 'Electric Scooter', price: 45000, img: escooterImage },
    { name: 'Motorbike', price: 120000, img: bikeImage },
    { name: 'Bicycle', price: 5999, img: cycleImage },
    { name: 'Motor Scooter', price: 75000, img: motorImage },
  ],
};

const CategoryItems = () => {
  const { category } = useParams(); // Get category slug from URL

  const categoryItems = productData[category]; // Get the items for the category

  if (!categoryItems) {
    return <p>No items available for this category.</p>;
  }

  return (
    <div className="category-items">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}</h2>
      
      <div className="items-list">
        {categoryItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;