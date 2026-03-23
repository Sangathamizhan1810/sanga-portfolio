import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',   // ← Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',  // ← Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'    // ← Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <motion.section
      id="contact"
      className="glass-panel contact-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Shimmer top bar */}
      <div className="contact-shimmer" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's Talk
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        Have a project in mind or just want to say hello? Drop me a message!
      </motion.p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <motion.div
          className="input-group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="input-icon">
            <i className="fas fa-user" />
          </div>
          <input
            type="text"
            name="user_name"
            id="contact-name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="input-icon">
            <i className="fas fa-envelope" />
          </div>
          <input
            type="email"
            name="user_email"
            id="contact-email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="input-icon textarea-icon">
            <i className="fas fa-comment-dots" />
          </div>
          <textarea
            name="message"
            id="contact-message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          id="contact-submit"
          className="contact-btn"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0, 240, 255, 0.5)' }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {status === 'sending' ? (
            <span className="btn-loading">
              <span className="spinner" /> Sending...
            </span>
          ) : (
            <>
              <i className="fas fa-paper-plane" /> Send Message
            </>
          )}
        </motion.button>
      </form>

      {/* Toast notification */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="contact-toast success"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fas fa-check-circle" /> Message sent successfully!
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            className="contact-toast error"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fas fa-exclamation-triangle" /> Failed to send. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
