import React, { useState, useEffect } from 'react';
import './FloatingHeader.css';

const FloatingHeader = ({ onThemeToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Show floating header when scrolled down more than 200px
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add/remove body class for padding when floating header is visible
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('floating-header-visible');
    } else {
      document.body.classList.remove('floating-header-visible');
    }
    return () => {
      document.body.classList.remove('floating-header-visible');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="floating-header">
      <div className="floating-header-content">
        <h3 className="floating-name">Sangathamizhan S</h3>
        <div className="floating-actions">
          <button 
            id="floating-theme-toggle" 
            onClick={onThemeToggle}
            className="floating-theme-btn"
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
          <div className="floating-icons">
            <a href="https://www.linkedin.com/in/sanga-thamizhan-s-07b133218" target="_blank" rel="noopener noreferrer" className="floating-icon">
              <i className="fab fa-linkedin"></i> 
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sangathamizh07@gmail.com" target="_blank" rel="noopener noreferrer" className="floating-icon">
              <i className="fas fa-envelope"></i> 
            </a>
            <a href="https://wa.me/917358519228" target="_blank" rel="noopener noreferrer" className="floating-icon">
              <i className="fab fa-whatsapp"></i> 
            </a>
            <a href="tel:+917358519228" className="floating-icon">
              <i className="fas fa-phone"></i>
            </a>
            <a href="https://github.com/Sangathamizhan1810" target="_blank" rel="noopener noreferrer" className="floating-icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingHeader;

