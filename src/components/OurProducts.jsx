import React from 'react';
import './OurProducts.css';

const products = [
 
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461767/IMG-20250803-WA0054_by701u.jpg',
    title: 'Agro Boost',
    description: 'A broad spectrum fungicide with control over a wide range of fungal disease in different crops such as Onion,beans, maize,rice, pepper,  tomato, potato, cocoa',
  },
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461808/IMG-20250803-WA0052_ll6ici.jpg',
    title: 'Agro Boost',
    description: '',
  },
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    title: 'Ikore',
    description: 'Ikore is a NAFDAC and CRIN approved fungicide For Black pot and pot rot Cherrel will Flower abortion Moss'

  },
{
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461890/IMG-20250803-WA0051_d4xah8.jpg',
    title: 'Ikore',
    description: '',
  },

  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    title: 'Ikore',
    description: '',
  },

  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461850/IMG-20250802-WA0159_clqcru.jpg',
    title: 'Agro boost',
    description: '',
  },


];

export default function OurProducts() {
  return (
    
    <section className="our-products-section py-2 bg-white ">
      <h2 className="text-center text-success mb-4">Our Products</h2>
      <div className="container">
        <div className="row g-4">
          {products.map(({ image, title, description }, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4">
              <div className="product-card p-3 bg-light rounded shadow-sm h-100">
                <img src={image} alt={title} className="img-fluid mb-3 rounded" />
                <h5 className="mb-1 text-success">{title}</h5>
                <p className="small">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

console.log("TEST CHANGE");
