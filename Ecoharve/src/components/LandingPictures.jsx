import React from 'react';
import './LandingPictures.css';

const images = [
  'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754207515/farmI_gbguds.jpg',
  'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754207507/farmii_yzxmb6.jpg',
  'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754207504/farm_d1btly.jpg',
  'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754208253/farmiii_eivkx2.jpg',
];

export default function LandingPictures() {
  return (
    <section className="landing-pictures-section">
      <h2 className="text-center text-success mb-4">Our Farm Life Moments</h2>
      <div className="horizontal-scroll">
        {images.map((src, idx) => (
          <div key={idx} className="scroll-item">
            <img src={src} alt={`Farm pic ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
