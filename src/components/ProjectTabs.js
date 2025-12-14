import React from 'react';
import './ProjectTabs.css';

const ProjectTabs = ({ activeTab, onTabChange }) => {
  return (
    <section id="switch-tab">
      <button 
        onClick={() => onTabChange('fullstack')}
        className={activeTab === 'fullstack' ? 'active' : ''}
      >
        <span>Full Stack Skills</span>
      </button>
      <button 
        onClick={() => onTabChange('internship')}
        className={activeTab === 'internship' ? 'active' : ''}
      >
        <span>Internship</span>
      </button>
      <button 
        onClick={() => onTabChange('other')}
        className={activeTab === 'other' ? 'active' : ''}
      >
        <span>Other Technical Skills</span>
      </button>
    </section>
  );
};

export default ProjectTabs;




