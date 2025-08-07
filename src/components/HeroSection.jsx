// src/components/HeroSection.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Eco-Harvest Farms and Agro Nig. limited</h1>
        <h2>
          <Typewriter
            words={[
              'Empowering farmers across Nigeria with organic solutions.',
              'eco-friendly fertilizers and sustainable agricultural practices.',
              'solutions that boost yields without harming the soil.',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
       <Link to="/contact" className="hero-btn">Get In Touch</Link>
      </div>
    </section>
  );
}
