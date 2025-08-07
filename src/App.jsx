import React, { useEffect } from 'react';  // Import useEffect here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom'; // Only Routes & Route here
import Topbar from './components/Topbar';
import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Productpage from './components/pages/Productpage'; 
import CustomerVoices from './components/pages/CustomerVoices';
import ContactUs from './components/pages/ContactUs';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Only animate once
    });
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/testimonial" element={<CustomerVoices />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />

      <div className="floating-contact-widget">
        <a href="tel:+2349151311892" target="_blank" rel="noopener noreferrer" className="call" title="Call Us">
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="https://wa.me/+2349151311892" target="_blank" rel="noopener noreferrer" className="whatsapp" title="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61579004541621"
          target="_blank"
          rel="noopener noreferrer"
          className="messenger"
          title="Message on Messenger"
        >
          <i className="fab fa-facebook-messenger"></i>
        </a>
      </div>
    </>
  );
}

export default App;
