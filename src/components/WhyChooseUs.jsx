import React from 'react';
import { FaLeaf, FaUsers, FaTractor, FaSeedling } from 'react-icons/fa';

import './WhyChooseUs.css';

const features = [
  {
    icon: <FaLeaf size={40} />,
    title: 'Sustainable Farming',
    description: 'We use eco-friendly techniques to protect the environment.',
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Community Empowerment',
    description: 'Supporting local farmers and communities for mutual growth.',
  },
  {
    icon: <FaTractor size={40} />,
    title: 'Modern Technology',
    description: 'Implementing the latest agro-tech to improve yields.',
  },
  {
    icon: <FaSeedling size={40} />,
    title: 'Premium Quality',
    description: 'Delivering top-quality organic products you can trust.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section bg-light py-5 ">
      <h2 className="why-title">Our Quality Policy</h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card p-4 bg-white rounded shadow-sm text-center h-100">
                <div className="icon mb-3 text-success">{icon}</div>
                <h5 className="mb-2">{title}</h5>
                <p className="mb-0">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
