import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const resumeData = {
    title: 'Download My Resume',
    downloadUrl: 'https://docs.google.com/document/d/1SfPcxTymkecKLBX9s2cCwOnvsyPbjb3y/edit?usp=drive_link&ouid=113973101089486846523&rtpof=true&sd=true'
  };

  return (
    <motion.section
      id="resume"
      className="glass-panel"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{resumeData.title}</h2>
      <motion.a
        href={resumeData.downloadUrl}
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        Download PDF
      </motion.a>
    </motion.section>
  );
};

export default Resume;            