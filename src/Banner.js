import React, { useState } from 'react';
import './Banner.css';
import bannerImage from './assets/banner.png';
import bannerImage2 from './assets/banner2.png';
import bannerImage3 from './assets/banner3.png';


const Banner = () => {
  const banners = [bannerImage, bannerImage2, bannerImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner">
        <img src={banners[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
      </div>
      <button className="arrow arrow-left" onClick={handlePrev}>
        &#9664; {/* Left arrow */}
      </button>
      <button className="arrow arrow-right" onClick={handleNext}>
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Banner;

