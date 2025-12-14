import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';

const ProjectsGrid = ({ projects }) => {
  return (
    <section id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectsGrid;




