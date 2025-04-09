import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          At Tomato, we celebrate the art of flavor with a menu crafted for everyone. From wholesome vegetarian delights to indulgent non-vegetarian specialties, our dishes are made with the freshest ingredients and a touch of creativity. Whether you're savoring a hearty meat dish or a vibrant veggie creation, every bite is a tribute to great taste.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9956515444</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyrights'>copyrights 2024 c tomato.com - All Rights Reserved.</p>
    </div>
  );
}
