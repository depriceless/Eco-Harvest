import React from 'react';
import './Footer.css';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Eco Harvest Farms</h3>
          <p>
            Leading the way in sustainable farming and eco-friendly agricultural solutions. 
            Connecting communities to nature with care and innovation.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61579004541621" aria-label="Facebook" target="_blank" rel="noopener noreferrer"> 
              <FaFacebookF />
            </a>
            <a href="https://x.com/ecofarms_Ltd?t=fSAqZaHpltmVkWw_-e8tsQ&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer"> 
              <FaTwitter />
            </a>
            <a href="https://vm.tiktok.com/ZMSTa9EHT/" aria-label="TikTok" target="_blank" rel="noopener noreferrer"> 
              <SiTiktok />
            </a>
            <a href="https://www.instagram.com/ecoharvestfarmsandagro" aria-label="Instagram" target="_blank" rel="noopener noreferrer"> 
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/testimonial">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍No 16 Asu Egbe Street, Ikom, Cross River State, Nigeria</p>
          <p>📞 +234 915 131 1892</p>
          <p>✉️ Ecoharvestfarmsandagro@gmail.com</p>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get our latest updates and offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              aria-label="Email Address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eco Harvest Farms. All rights reserved.</p>
      </div>
    </footer>
  );
}
