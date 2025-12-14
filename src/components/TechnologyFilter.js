import React from 'react';
import './TechnologyFilter.css';

const TechnologyFilter = ({ technologies, onFilterChange, selectedTech }) => {
  return (
    <section id="tabs">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={selectedTech === tech ? 'active' : ''}
        >
          <span>{tech}</span>
        </button>
      ))}
    </section>
  );
};

export default TechnologyFilter;




