import React from 'react';
import './OurProducts.css';

const products = [
 
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461767/IMG-20250803-WA0054_by701u.jpg',
    title: 'Green Lettuce',
    description: 'Crisp, clean, farm-fresh lettuce leaves.',
  },
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461808/IMG-20250803-WA0052_ll6ici.jpg',
    title: 'Eggplant',
    description: 'Plump and flavorful organic eggplants.',
  },
  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    title: 'Pumpkin',
    description: 'Nutritious pumpkins ideal for soups and pies.',
  },
{
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461890/IMG-20250803-WA0051_d4xah8.jpg',
    title: 'Pumpkin',
    description: 'Nutritious pumpkins ideal for soups and pies.',
  },

  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    title: 'Pumpkin',
    description: 'Nutritious pumpkins ideal for soups and pies.',
  },

  {
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461850/IMG-20250802-WA0159_clqcru.jpg',
    title: 'Pumpkin',
    description: 'Nutritious pumpkins ideal for soups and pies.',
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
