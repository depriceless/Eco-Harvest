import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-page-wrapper">
        <section className="about-hero-section">
          <div className="about-header-wrapper d-flex justify-content-center my-4">
            <div className="about-header px-4 py-3 rounded text-center">
              <h1 className="display-12 fw-bold text-white mb-0 font-size-3 mt-3">
                About Eco Harvest and Agro Chemicals Nigeria Limited
              </h1>
            </div>
          </div>
        </section>

        <section className="about-intro container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://res.cloudinary.com/dnm19jzvu/image/upload/v1754207501/about_zjfy1b.jpg"
                alt="Eco Harvest facility"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-success">Who We Are</h3>
              <p>
                At EcoHarvest, we believe that the future of farming lies in harmony with nature. Founded with a mission to transform agriculture across Africa, we provide organic fertilizers, eco-friendly pesticides, and sustainable farming solutions that help farmers grow healthier crops while preserving soil integrity and the environment.

                Our commitment is to empower local farmers with tools and knowledge that promote long-term productivity, reduce harmful chemicals, and enhance food security. From smallholder farms to commercial growers, EcoHarvest partners with communities to improve yields, increase income, and promote biodiversity.

                We’re not just selling agricultural products — we’re building a movement toward responsible farming, environmental stewardship, and economic resilience.
              </p>
              <p>
                We are driven by science, guided by integrity, and committed to the future of farming.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values bg-light py-5">
          <h3 className="text-success text-center mb-4">Our Core Values</h3>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <h5>Innovation</h5>
                <p>We invest in research and technology to provide cutting-edge solutions for modern agriculture.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Sustainability</h5>
                <p>Our products are designed to minimize environmental impact and preserve soil health.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Integrity</h5>
                <p>We maintain transparency and honesty in every partnership and process.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-mission-vision py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <h4 className="text-success">Our Mission</h4>
                <p>
                  To support farmers with eco-conscious products that improve yields and protect natural ecosystems.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="text-success">Our Vision</h4>
                <p>
                  To be Africa’s most trusted provider of sustainable agrochemical solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section text-center py-5 bg-white border-top border-bottom">
          <div className="container">
            <h3 className="fw-bold mb-3 text-dark">Want to learn more?</h3>
            <p className="mb-4 text-secondary">
              Contact our team or visit one of our demo farms to see sustainable farming in action.
            </p>
            <Link to="/contact" className="btn btn-success px-4 py-2 fw-semibold">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
