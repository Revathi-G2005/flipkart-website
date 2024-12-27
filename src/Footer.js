import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ABOUT</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>GROUP COMPANIES</h3>
          <ul>
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>HELP</h3>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONSUMER POLICY</h3>
          <ul>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Mail Us:</h3>
          <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Become a Seller | Advertise | Gift Cards | Help Center</p>
        </div>
        <div className="footer-bottom-right">
          <p>&copy; 2007-2024 Flipkart.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;