import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Regex to validate full email structure including domain and TLD (e.g. user@domain.com)
const EMAIL_DOMAIN_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Read environment variables or fallback to placeholders
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [errors, setErrors] = useState({ user_name: '', user_email: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error' | 'validation_error' | 'unconfigured'

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'user_name') {
      // Allow ONLY alphabetic characters (a-z, A-Z) and spaces
      const alphabetOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData((prev) => ({ ...prev, [name]: alphabetOnly }));

      if (value !== alphabetOnly) {
        setErrors((prev) => ({ ...prev, user_name: 'Name can only contain alphabetic letters.' }));
      } else {
        setErrors((prev) => ({ ...prev, user_name: '' }));
      }
      return;
    }

    if (name === 'user_email') {
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear email error while typing if valid domain format
      if (value === '' || EMAIL_DOMAIN_REGEX.test(value)) {
        setErrors((prev) => ({ ...prev, user_email: '' }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailBlur = () => {
    if (formData.user_email && !EMAIL_DOMAIN_REGEX.test(formData.user_email)) {
      setErrors((prev) => ({
        ...prev,
        user_email: 'Please enter a valid email with a domain (e.g. user@domain.com).'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check before sending
    let hasError = false;
    const newErrors = { user_name: '', user_email: '' };

    if (!formData.user_name.trim() || /[^a-zA-Z\s]/.test(formData.user_name)) {
      newErrors.user_name = 'Name must only contain alphabetic letters.';
      hasError = true;
    }

    if (!formData.user_email || !EMAIL_DOMAIN_REGEX.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address with a valid domain (e.g. user@domain.com).';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      setStatus('validation_error');
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    // Check if EmailJS keys are configured or still placeholders
    const isConfigured =
      SERVICE_ID !== 'YOUR_SERVICE_ID' &&
      TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
      PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
      SERVICE_ID.trim() !== '' &&
      TEMPLATE_ID.trim() !== '' &&
      PUBLIC_KEY.trim() !== '';

    if (!isConfigured) {
      console.warn(
        'EmailJS credentials are not configured yet. Set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, and REACT_APP_EMAILJS_PUBLIC_KEY in your .env file.'
      );
      
      // Fallback: Open mailto link so user message is never lost
      const mailtoSubject = encodeURIComponent(`Portfolio Message from ${formData.user_name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.user_name}\nEmail: ${formData.user_email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:sangathamizh07@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatus('unconfigured');
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setStatus('sending');
    setErrors({ user_name: '', user_email: '' });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
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

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Name Field (Only Alphabet Typable) */}
        <motion.div
          className={`input-group ${errors.user_name ? 'invalid' : ''}`}
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
            pattern="[a-zA-Z\s]+"
            title="Only alphabetic letters and spaces allowed"
          />
        </motion.div>
        {errors.user_name && <span className="field-error">{errors.user_name}</span>}

        {/* Email Field (Domain Validation Check) */}
        <motion.div
          className={`input-group ${errors.user_email ? 'invalid' : ''}`}
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
            placeholder="Your Email (e.g. user@domain.com)"
            value={formData.user_email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
          />
        </motion.div>
        {errors.user_email && <span className="field-error">{errors.user_email}</span>}

        {/* Message Field */}
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

      {/* Toast notifications */}
      <AnimatePresence>
        {status === 'unconfigured' && (
          <motion.div
            className="contact-toast error"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fas fa-envelope-open-text" /> Opening mail app to send email directly... (Configure EmailJS keys in .env)
          </motion.div>
        )}
        {status === 'validation_error' && (
          <motion.div
            className="contact-toast error"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fas fa-exclamation-circle" /> Please fix the highlighted errors before submitting.
          </motion.div>
        )}
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
            <i className="fas fa-exclamation-triangle" /> EmailJS error: Check your Service ID, Template ID, and Public Key.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
