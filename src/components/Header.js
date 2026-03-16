import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ onThemeToggle }) => {
  return (
    <motion.header
      className="glass-panel"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src="https://avatars.githubusercontent.com/u/192378545?s=400&u=194ca87eeaf86890e9d4736c9d09e2ec7771ffc2&v=4"
        alt="Sangathamizhan S"
        className="profile-pic"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
      />
      <div>
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
          FULL-STACK DEVELOPER | CCBP 4.0 | Scalable Web Apps | Interactive UI/UX | API Development | Performance Optimization | End-to-End Web Solutions
        </motion.p>


        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
        >
          <a href="https://www.linkedin.com/in/sanga-thamizhan-s-07b133218" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sangathamizh07@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/917358519228" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+917358519228" className="footer-icon">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/Sangathamizhan1810" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-github"></i>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;




