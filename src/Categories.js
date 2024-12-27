import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

// Import category images
import groceryImage from './assets/grocery.png';
import mobilesImage from './assets/mobiles.png';
import fashionImage from './assets/fashion.png';
import electronicsImage from './assets/electronics.png';
import homeFurnitureImage from './assets/home-furniture.png';
import appliancesImage from './assets/appliances.png';
import beautyToysImage from './assets/beauty-toys.png';
import twoWheelersImage from './assets/two-wheelers.png';

const Categories = () => {
  const categories = [
    { name: 'Grocery', img: groceryImage },
    { name: 'Mobiles', img: mobilesImage },
    { name: 'Fashion', img: fashionImage },
    { name: 'Electronics', img: electronicsImage },
    { name: 'Furniture', img: homeFurnitureImage },
    { name: 'Appliances', img: appliancesImage },
    { name: 'BeautyToys', img: beautyToysImage },
    { name: 'TwoWheelers', img: twoWheelersImage },
  ];

 import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

// Import category images
import groceryImage from './assets/grocery.png';
import mobilesImage from './assets/mobiles.png';
import fashionImage from './assets/fashion.png';
import electronicsImage from './assets/electronics.png';
import homeFurnitureImage from './assets/home-furniture.png';
import appliancesImage from './assets/appliances.png';
import beautyToysImage from './assets/beauty-toys.png';
import twoWheelersImage from './assets/two-wheelers.png';

const Categories = () => {
  const categories = [
    { name: 'Grocery', img: groceryImage },
    { name: 'Mobiles', img: mobilesImage },
    { name: 'Fashion', img: fashionImage },
    { name: 'Electronics', img: electronicsImage },
    { name: 'Furniture', img: homeFurnitureImage },
    { name: 'Appliances', img: appliancesImage },
    { name: 'BeautyToys', img: beautyToysImage },
    { name: 'TwoWheelers', img: twoWheelersImage },
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Link
          to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
          key={index}
          className="category"
        >
          <img src={category.img} alt={category.name} />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

