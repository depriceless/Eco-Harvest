import React from 'react';
import './MissionVision.css';

export default function MissionVision() {
  return (
    
    <section className="mission-vision-section py-5 bg-white">
    <h4 className="section-title text-center text-success mb-5">Our Mission & Vision</h4>
      <div className="container">
        <div className="mission-vision-wrapper">
          <div className="mission">
            <h2 className="subheading">Our Mission</h2>
            <p>
              To empower sustainable agricultural practices by providing premium, eco-friendly solutions 
              that enrich local communities, promote biodiversity, and ensure food security for future generations.
            </p>
          </div>
          <div className="vision">
            <h4 className="subheading">Our Vision</h4>
            <p>
              To be the leading innovator in sustainable farming, recognized globally for transforming agriculture 
              through technology, education, and environmental stewardship, creating thriving ecosystems and prosperous communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
