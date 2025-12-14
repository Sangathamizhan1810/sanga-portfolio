import React from 'react';
import './Resume.css';

const Resume = () => {
  // Resume data
  const resumeData = {
    title: 'Download My Resume',
    downloadUrl: 'https://drive.google.com/file/d/1YlZCgF08x1RewaCiMJUu-qI3v8R_DubF/view?usp=sharing'
  };

  return (
    <section id="resume">
      <h2>{resumeData.title}</h2>
      <a 
        href={resumeData.downloadUrl}
        className="download-btn" 
        target="_blank"
        rel="noopener noreferrer"
      >
        Download PDF
      </a>
    </section>
  );
};

export default Resume;            