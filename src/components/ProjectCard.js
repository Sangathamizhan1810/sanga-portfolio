import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectCard = ({ project }) => {
  const isMustWatch = project.mustWatch === true;

  return (
    <motion.article
      className="project-card glass-panel"
      variants={itemVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.3)" }}
      aria-label={`Project: ${project.projectName}`}
    >
      <h3>{project.projectName}</h3>
      <p>{project.description}</p>
      <p style={{ marginBottom: '16px', marginTop: '16px' }}>
        <strong>Tech:</strong> {project.technologiesUsed.join(", ")}
      </p>
      {isMustWatch && <p className="must-watch">Must Watch</p>}
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit project link for ${project.projectName}`}
      >
        Visit Link
      </a>
    </motion.article>
  );
};

export default ProjectCard;
