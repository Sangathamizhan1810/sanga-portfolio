/**
 * Portfolio Projects Database
 * Well-structured database module for Sanga Portfolio
 * 
 * This module exports all project data organized by categories
 * with proper structure and metadata.
 */

// Database metadata
export const databaseMetadata = {
  version: "1.0.0",
  lastUpdated: "2024",
  description: "Portfolio Projects Database - Structured data for Sanga Portfolio",
  schemaVersion: "1.0"
};

// Full Stack Projects
export const fullStackprojectData = [
  {
    id: "fs-001",
    projectName: "E-commerce website",
    projectUrl: "https://sangathamizhan1810.github.io/4wFrontend/",
    technologiesUsed: ["HTML", "CSS", "React", "JavaScript", "API"],
    description: "A responsive online shopping interface with product listings, filters, and cart functionality. Developed using React for a seamless, modular shopping experience.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-002",
    projectName: "App Store",
    projectUrl: "https://sangathamizh12.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "React", "JavaScript"],
    description: "A front-end clone of an App Store showcasing apps with category filters and smooth UI. Built in React with reusable components and responsive design.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-003",
    projectName: "Money Manager App",
    projectUrl: "https://sangathamizh15.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "React", "JavaScript"],
    description: "A simple budgeting tool to add income, expenses, and track balance in real time. Built with React for dynamic updates and organized financial summaries.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-004",
    projectName: "Netflix Responsive Landing Page Clone",
    projectUrl: "https://sangathamizhan5.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "React", "JavaScript"],
    description: "A fully responsive front-end clone of the Netflix landing page, created using only HTML and CSS. This project mirrors the layout and design aesthetics of the original site, adapting smoothly across various screen sizes without any JavaScript involved.",
    category: "Full Stack",
    type: "Landing Page",
    mustWatch: false
  },
  {
    id: "fs-005",
    projectName: "Wikipedia Clone with Fetch API Integration",
    projectUrl: "https://sangathamizhan1.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "API"],
    description: "A functional Wikipedia clone built using HTML, CSS, and JavaScript, leveraging the fetch() method with a GET request to retrieve article data dynamically from the Wikipedia API. This project demonstrates real-time content rendering based on user search input, offering a simplified yet powerful search experience.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-006",
    projectName: "Appointment Booking and List Display",
    projectUrl: "https://sangareact2.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "React"],
    description: "An Appointment Booking page built using JSX and styled with CSS, allowing users to schedule appointments. The page dynamically renders a list of scheduled appointments, providing a clear and organized view of upcoming events.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-007",
    projectName: "To-do list",
    projectUrl: "https://sangathamizhan2.ccbp.tech",
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    description: "TaskMaster is a simple to-do list app built with localStorage to save tasks between sessions, showcasing DOM manipulation, event handling, and persistent data storage.",
    category: "Full Stack",
    type: "Web Application",
    mustWatch: false
  },
  {
    id: "fs-008",
    projectName: "Rock paper Scissors Vs Computer",
    projectUrl: "https://rockpapersciappr-fkgdiagrxtmtaxzsrqeqsa.streamlit.app/",
    technologiesUsed: ["Python", "Streamlit"],
    description: "A simple rock-paper-scissors game built using Python with simple logic & streamlit library to create a web app interface.",
    category: "Full Stack",
    type: "Game",
    mustWatch: false
  }
];

// Internship Projects
export const internProjects = [
  {
    id: "int-001",
    projectName: "CodexIntern - Web Development",
    projectUrl: "https://drive.google.com/file/d/1IotxtvfkV7SfwN3j1zqEwMxhvs-FWmoN/view?usp=sharing",
    technologiesUsed: ["Web Development"],
    description: "Web development Internship at codexintern, where i learned about web development and its various aspects, including HTML, CSS, JavaScript, and responsive design principles. I also gained hands-on experience in creating user-friendly interfaces and optimizing website performance.",
    category: "Internship",
    type: "Certificate",
    mustWatch: false
  },
  {
    id: "int-002",
    projectName: "CodexIntern - Backend Development",
    projectUrl: "https://drive.google.com/file/d/103I-OxVaehBpo0CqdIrcraRtMqW6ajIy/view?usp=sharing",
    technologiesUsed: ["Backend Development"],
    description: "Completed a one-month remote, unpaid internship as a Python Developer, gaining hands-on experience in real-world backend development and collaborative coding.",
    category: "Internship",
    type: "Certificate",
    mustWatch: false
  }
];

// Other Technical Skills Projects
export const otherProjectData = [
  {
    id: "oth-001",
    projectName: "Advanced Excel certification",
    projectUrl: "https://www.linkedin.com/in/sanga-thamizhan-s-07b133218/details/certifications/1739726180522/single-media-viewer/?profileId=ACoAADbWE58BmX7eNE59A5FxiH44NQ3iLSzx8iA",
    technologiesUsed: ["Excel"],
    description: "Having obtained an Advanced Excel Certification, you now possess expertise in using complex formulas, data analysis tools, and automation features to streamline workflows and drive efficient decision-making processes.",
    category: "Certification",
    type: "Certificate",
    mustWatch: false
  },
  {
    id: "oth-002",
    projectName: "High Fidelity Framework of Whatsapp",
    projectUrl: "https://drive.google.com/file/d/14AYPvzX3AFTTvb_t52O0Dj1Hyhs1Mpax/view?usp=drive_link",
    technologiesUsed: ["Figma", "UI/UX"],
    description: "A high-fidelity Figma design for WhatsApp would reflect a polished, almost-final version of the app, with detailed attention to colors, typography, icons, and interactivity.",
    category: "Design",
    type: "UI/UX Design",
    mustWatch: false
  }
];

// Category metadata
export const categoryMetadata = {
  fullstack: {
    id: "fullstack",
    name: "Full Stack Skills",
    title: "Web Projects",
    description: "Full-stack web development projects showcasing various technologies"
  },
  internship: {
    id: "internship",
    name: "Internship",
    title: "Internship",
    description: "Internship projects and experiences"
  },
  other: {
    id: "other",
    name: "Other Technical Skills",
    title: "Other Technical Competencies",
    description: "Other technical skills, certifications, and competencies"
  }
};

// Database statistics
export const databaseStatistics = {
  totalProjects: 12,
  fullStackProjects: 8,
  internshipProjects: 2,
  otherProjects: 2,
  uniqueTechnologies: [
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "API",
    "Python",
    "Streamlit",
    "Excel",
    "Figma",
    "UI/UX",
    "Web Development",
    "Backend Development"
  ]
};

// Helper function to get all projects
export const getAllProjects = () => {
  return [
    ...fullStackprojectData,
    ...internProjects,
    ...otherProjectData
  ];
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  switch (category) {
    case 'fullstack':
      return fullStackprojectData;
    case 'internship':
      return internProjects;
    case 'other':
      return otherProjectData;
    default:
      return fullStackprojectData;
  }
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === id);
};

// Helper function to get all unique technologies
export const getAllTechnologies = () => {
  const allProjects = getAllProjects();
  return [...new Set(allProjects.flatMap(p => p.technologiesUsed))];
};

// Default export with all data
export default {
  metadata: databaseMetadata,
  categories: {
    fullStack: fullStackprojectData,
    internship: internProjects,
    other: otherProjectData
  },
  categoryMetadata,
  statistics: databaseStatistics,
  helpers: {
    getAllProjects,
    getProjectsByCategory,
    getProjectById,
    getAllTechnologies
  }
};




