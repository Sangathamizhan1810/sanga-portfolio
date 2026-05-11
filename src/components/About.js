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
        <p>Agentic AI Developer focused on building AI-first software systems using LLMs, prompt engineering, and full-stack development. Experienced in multi-agent workflows, AI-assisted SDLC, and rapid product development using Claude AI, Cursor AI, React, Node.js, Python, and SQL. Passionate about solving real engineering problems with scalable AI solutions.</p>
      </div>
    </motion.section>
  );
};

export default About;





