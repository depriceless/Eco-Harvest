import React from 'react';
import Header from '../Header';
import './Productpage.css';

const products = [
  {
    id: 1,
    name: 'EcoGrow Fertilizer',
    description: 'Organic fertilizer to boost crop yields sustainably.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461767/IMG-20250803-WA0054_by701u.jpg',
    price: '₦7,500',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'PestShield Insecticide',
    description: 'Eco-friendly pest control with long-lasting protection.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461808/IMG-20250803-WA0052_ll6ici.jpg',
    price: '₦5,200',
    tag: 'New Arrival',
  },


  {
    id: 1,
    name: 'EcoGrow Fertilizer',
    description: 'Organic fertilizer to boost crop yields sustainably.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    price: '₦7,500',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'PestShield Insecticide',
    description: 'Eco-friendly pest control with long-lasting protection.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461890/IMG-20250803-WA0051_d4xah8.jpg',
    price: '₦5,200',
    tag: 'New Arrival',
  },

  {
    id: 1,
    name: 'EcoGrow Fertilizer',
    description: 'Organic fertilizer to boost crop yields sustainably.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461737/IMG-20250803-WA0055_qlxfzr.jpg',
    price: '₦7,500',
    tag: 'Best Seller',
  },
  

  {
    id: 1,
    name: 'EcoGrow Fertilizer',
    description: 'Organic fertilizer to boost crop yields sustainably.',
    image: 'https://res.cloudinary.com/dnm19jzvu/image/upload/v1754461850/IMG-20250802-WA0159_clqcru.jpg',
    price: '₦7,500',
    tag: 'Best Seller',
  },

  // Add more product items here
];

export default function ProductPage() {
  return (
    <>
      <Header />

      <section className="product-hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Our Agrochemical Products</h1>
          <p className="lead">Explore our premium eco-friendly agro solutions for every farming need.</p>
        </div>
      </section>

      <section className="product-grid-section py-5">
        <div className="container">
          <div className="row g-4">
            {products.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="product-card shadow-sm p-3 rounded h-100 position-relative">
                  {product.tag && (
                    <span className="badge bg-success position-absolute top-0 end-0 m-2">
                      {product.tag}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="img-fluid rounded mb-3" />
                  <h5 className="fw-bold">{product.name}</h5>
                  <p className="small">{product.description}</p>
                  <p className="fw-semibold text-success">{product.price}</p>
                  <button className="btn btn-outline-success w-100 mt-2">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
