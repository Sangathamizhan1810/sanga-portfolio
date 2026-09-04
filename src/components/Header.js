import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="glass-panel"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="banner"
    >
      <motion.img
        src="https://avatars.githubusercontent.com/u/192378545?s=400&u=194ca87eeaf86890e9d4736c9d09e2ec7771ffc2&v=4"
        alt="Sangathamizhan S - Agentic AI Developer and Full Stack Engineer Profile Picture"
        width="180"
        height="180"
        loading="eager"
        decoding="async"
        className="profile-pic"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
      />
      <div>
        {/* Single primary H1 tag for On-Page SEO topic relevance */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Sangathamizhan S
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Agentic AI Developer | CCBP 4.0 | Scalable Web Apps | Interactive UI/UX | API Development | Performance Optimization | End-to-End Web Solutions
        </motion.p>

        {/* Semantic Internal Navigation Links (Technical & On-Page SEO) */}
        <motion.nav
          className="header-nav"
          aria-label="Main Navigation"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#switch-tab" className="nav-link">Projects</a>
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
        </motion.nav>

        {/* Social Links with Accessible Labels */}
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
        >
          <a href="https://www.linkedin.com/in/sanga-thamizhan-s-07b133218" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn Profile">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sangathamizh07@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Send Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/917358519228" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="WhatsApp Contact">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+917358519228" className="footer-icon" aria-label="Phone Contact">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/Sangathamizhan1810" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub Profile">
            <i className="fab fa-github"></i>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
