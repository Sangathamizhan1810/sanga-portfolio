import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="glass-panel site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-name">Sangathamizhan S</p>
          <p className="footer-tagline">Agentic AI Developer &amp; Full Stack Engineer</p>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          <a href="#about">About</a>
          <a href="#switch-tab">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials" aria-label="Social Profiles">
          <a href="https://www.linkedin.com/in/sanga-thamizhan-s-07b133218" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sangathamizhan1810" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sangathamizh07@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/917358519228" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sangathamizhan S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
