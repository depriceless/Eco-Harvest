import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path to your firebase.js

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    try {
      await addDoc(collection(db, 'contactMessages'), {
        fullName: formData.fullName,
        subject: formData.subject,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      setStatus({
        type: 'success',
        message: 'Thank you for contacting Eco Harvest and Agro Chemicals. We will reach out to you shortly.',
      });
      setFormData({ fullName: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-4 bg-white shadow-lg" noValidate>
      {/* ✅ Status message moved to top */}
      {status && (
        <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
          {status.message}
        </div>
      )}

      <h3 className="mb-4 text-success fw-bold text-center">Send Us a Message</h3>

      {/* Full Name */}
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="form-control"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Subject */}
      <div className="mb-3">
        <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
        <input
          type="text"
          id="subject"
          className="form-control"
          placeholder="Message subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label htmlFor="message" className="form-label fw-semibold">Message</label>
        <textarea
          id="message"
          className="form-control"
          rows="5"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit */}
      <div className="d-grid">
        <button type="submit" className="btn btn-success btn-lg">
          Send Message
        </button>
      </div>

      {/* Inline styling */}
      <style jsx>{`
        .form-control:focus {
          border-color: #198754;
          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        }
        .btn-success:hover {
          background-color: #157347;
          box-shadow: 0 6px 20px rgba(21, 115, 71, 0.3);
          transition: 0.3s ease;
        }
      `}</style>
    </form>
  );
}
