import React from 'react';

export default function ContactInfo() {
  return (
    <div className="mb-5" style={{ paddingLeft: '3.3rem' }}>
      <h4 className="text-success fw-bold blink-text">Need to talk to us?</h4>

      <p className="mb-1">
        <strong>Phone:</strong>{' '}
        <a href="tel:+2349151311892">+234 915 131 1892</a>
      </p>
      <p className="mb-1">
        <strong>Email:</strong>{' '}
        <a href="mailto:info@ecoharvest.com">Ecoharvestfarmsandagro@gmail.com</a>
      </p>
      <p className="mb-0">
        <strong>Address:</strong> No 16 Asu Egbe Street, Ikom, Cross River State, Nigeria
      </p>

      {/* Inline CSS for blinking */}
      <style jsx>{`
        .blink-text {
          animation: blink 1.2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
