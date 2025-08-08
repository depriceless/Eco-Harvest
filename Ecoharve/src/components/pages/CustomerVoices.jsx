import React from 'react';
import './CustomerVoices.css';

const testimonials = [
  {
    name: 'Grace U.',
    location: 'Benue State',
    message: 'EcoHarvest fertilizers completely changed my maize yield this season. I’m beyond impressed!',
    rating: 5,
  },
  {
    name: 'Emeka I.',
    location: 'Anambra State',
    message: 'No more crop burns. The natural ingredients really work well with my soil.',
    rating: 4,
  },
  {
    name: 'Aisha T.',
    location: 'Kano',
    message: 'I love that they deliver on time and their customer support is very responsive.',
    rating: 5,
  },
  {
    name: 'Musa A.',
    location: 'Niger State',
    message: 'Ever since I switched to EcoHarvest’s organic pesticides, my vegetables are thriving.',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return <div className="text-warning fs-5 mb-2">{fullStars}{emptyStars}</div>;
};

export default function CustomerVoices() {
  return (
    <div className="customer-voices-page">
      {/* Green Banner Header */}
      <div className="green-banner text-center text-white py-4">
        <h2 className="fw-bold mb-2">What Our Customers Say</h2>
        <p className="mb-0">Real stories from real farmers across Nigeria</p>
      </div>

      {/* Testimonial Cards */}
      <div className="container testimonial-section">
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="testimonial-card h-100">
                <StarRating rating={testimonial.rating} />
                <p className="mb-3 fst-italic">"{testimonial.message}"</p>
                <h6 className="fw-bold mb-0 text-success">{testimonial.name}</h6>
                <small className="text-muted">{testimonial.location}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
  );
}
