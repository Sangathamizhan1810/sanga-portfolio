import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const isMustWatch = project.mustWatch === true;

  return (
    <div className="project-card">
      <h3>{project.projectName}</h3>
      <p>{project.description}</p>
      <p style={{ marginBottom: '16px', marginTop: '16px' }}>
        <strong>Tech:</strong> {project.technologiesUsed.join(", ")}
      </p>
      {isMustWatch && <p>Must Watch</p>}
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        Visit Link
      </a>
    </div>
  );
};

export default ProjectCard;




