import React from 'react';
import './Header.css';

const Header = ({ onThemeToggle }) => {
  return (
    <header>
      <img 
        src="https://avatars.githubusercontent.com/u/192378545?s=400&u=194ca87eeaf86890e9d4736c9d09e2ec7771ffc2&v=4" 
        alt="Sangathamizhan S" 
        className="profile-pic" 
      />
      <div>
        <h1>Sangathamizhan S</h1>
        <p>FULL-STACK DEVELOPER | CCBP 4.0 | Scalable Web Apps | Interactive UI/UX | API Development | Performance Optimization | End-to-End Web Solutions</p>
        
        <button id="theme-toggle" onClick={onThemeToggle}>Dark/Light</button>

        <div className="footer-content">
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
        </div>
      </div>
    </header>
  );
};

export default Header;




