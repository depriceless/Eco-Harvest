import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './Testismonials.css';

const testimonials = [
  {
    name: 'Amina Yusuf',
    role: 'Local Farmer',
    photo: '/images/testimonials/amina.jpg',
    feedback:
      'Eco Harvest Farms has helped me increase my crop yield using sustainable practices. Their support means a lot!',
  },
  {
    name: 'John Okoro',
    role: 'Organic Food Distributor',
    photo: '/images/testimonials/john.jpg',
    feedback:
      'The quality and consistency of their produce are unmatched. Partnering with Eco Harvest Farms is a win for my business.',
  },
  {
    name: 'Fatima Bello',
    role: 'Community Leader',
    photo: '/images/testimonials/fatima.jpg',
    feedback:
      'Their community empowerment initiatives have truly transformed our local farming families.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5 bg-light">
      <h2 className="text-center text-success mb-5">What Our Clients Say</h2>
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerGroup={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map(({ name, role, photo, feedback }, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card">
                <img src={photo} alt={name} className="testimonial-photo" />
                <p className="testimonial-feedback">“{feedback}”</p>
                <h5 className="testimonial-name">{name}</h5>
                <p className="testimonial-role">{role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
