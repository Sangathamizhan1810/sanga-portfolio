import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="glass-panel"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <div className="about-box" id="intro">
        <p>Aspiring Full Stack Developer with a strong foundation in front-end and back-end technologies, actively seeking opportunities to start a meaningful tech career. Passionate about building real-world applications, eager to learn, collaborate, and grow in a dynamic development environment.</p>
      </div>
    </motion.section>
  );
};

export default About;





