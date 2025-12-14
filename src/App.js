import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import FloatingHeader from './components/FloatingHeader';
import About from './components/About';
import ProjectTabs from './components/ProjectTabs';
import TechnologyFilter from './components/TechnologyFilter';
import ProjectsGrid from './components/ProjectsGrid';
import Resume from './components/Resume';
import { fullStackprojectData, otherProjectData, internProjects } from './data/projectsData';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('fullstack');
  const [selectedTech, setSelectedTech] = useState(null);

  // Get current project data based on active tab
  const currentProjectData = useMemo(() => {
    switch (activeTab) {
      case 'fullstack':
        return fullStackprojectData;
      case 'internship':
        return internProjects;
      case 'other':
        return otherProjectData;
      default:
        return fullStackprojectData;
    }
  }, [activeTab]);

  // Get all unique technologies from current project data
  const allTechnologies = useMemo(() => {
    const techs = [
      ...new Set(currentProjectData.flatMap(p => p.technologiesUsed))
    ];
    return techs;
  }, [currentProjectData]);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) {
      return currentProjectData;
    }
    return currentProjectData.filter(project =>
      project.technologiesUsed.includes(selectedTech)
    );
  }, [currentProjectData, selectedTech]);

  // Get project title based on active tab
  const projectTitle = useMemo(() => {
    switch (activeTab) {
      case 'fullstack':
        return 'Web Projects';
      case 'internship':
        return 'Internship';
      case 'other':
        return 'Other Technical Competencies';
      default:
        return 'Web Projects';
    }
  }, [activeTab]);

  // Handle tab change - reset filter
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedTech(null);
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <FloatingHeader onThemeToggle={handleThemeToggle} />
      <Header onThemeToggle={handleThemeToggle} />
      <About />
      <ProjectTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <h1 id="project-title">{projectTitle}</h1>
      <TechnologyFilter
        technologies={allTechnologies}
        onFilterChange={setSelectedTech}
        selectedTech={selectedTech}
      />
      <ProjectsGrid projects={filteredProjects} />
      <Resume />
    </div>
  );
}

export default App;




