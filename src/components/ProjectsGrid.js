import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProjectsGrid = ({ projects }) => {
  return (
    <motion.section
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.section>
  );
};

export default ProjectsGrid;





