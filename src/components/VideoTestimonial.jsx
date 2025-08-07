import React from 'react';
import './VideoTestimonial.css';

export default function VideoTestimonial() {
  return (
    
    <section className="video-testimonial-section container my-5 text-center">
      
      <div className="video-wrapper d-inline-block" style={{ width: "600px", height: "425px" }}>
        <iframe
          width="600"
          height="425"
          src="https://www.youtube.com/embed/0jUejbRbPjA"
          title="Video Testimonial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>
    </section>
  );
}

