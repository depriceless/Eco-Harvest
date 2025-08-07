import React from 'react';
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

export default function ContactUs() {
  return (
    <div className="contact-us-page" style={{ background: '#f8f9fa' }}>
      
      {/* Full-width Header */}
      <div className="contact-header text-white text-center py-5 px-5" style={{
        background: 'linear-gradient(135deg, #145524 )',
        marginTop: '-120px',
        height: '30vh',
      
      }}>
        <h1 className="display-5 fw-bold mb-3">Get In Touch</h1>
        <p className="lead mb-0 mx-auto" style={{ maxWidth: '700px' }}>
          We'd love to hear from you — send us a message using the form below.
        </p>
      </div>

      {/* Form Section - Centered */}
      <section className="py-5">
        <div className="container d-flex justify-content-center">
          <div className="col-lg-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Full-width Contact Info Section */}
      <section className="pb-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styles */}
      <style jsx>{`
        .form-control:focus {
          border-color: #198754 !important;
          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25) !important;
        }

        .btn-success:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(25, 135, 84, 0.3) !important;
        }

        .contact-method {
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background-color: #e9ecef !important;
          transform: translateY(-2px);
        }

        .alert {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991.98px) {
          .sticky-top {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
