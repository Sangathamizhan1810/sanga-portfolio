# Sanga Portfolio - React Version

This is a React.js version of the Sanga Portfolio website. It maintains all the functionality of the original vanilla JavaScript version while leveraging React's component-based architecture.

## Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Project Filtering**: Filter projects by technology stack
- **Multiple Project Categories**: 
  - Full Stack Skills
  - Internship Projects
  - Other Technical Skills
- **Social Media Links**: Quick access to LinkedIn, Email, WhatsApp, Phone, and GitHub
- **Resume Download**: Direct link to download resume

## Tech Stack

- React 18.2.0
- React DOM 18.2.0
- CSS3
- Font Awesome Icons
- Bootstrap 5

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Quick Start (Automatic)

**Windows Users:**
- Double-click `run.bat` - This will automatically check dependencies, install if needed, and start the server

**Linux/Mac Users:**
- Run `chmod +x run.sh && ./run.sh` - This will automatically check dependencies, install if needed, and start the server

### Manual Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `run.bat` / `run.sh` - Automatically installs dependencies (if needed) and starts the server
- `start.bat` - Quick start (assumes dependencies are already installed)
- `install.bat` - Install dependencies only
- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm run install-and-start` - Install and start in one command

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── Header.js
  │   ├── About.js
  │   ├── ProjectTabs.js
  │   ├── TechnologyFilter.js
  │   ├── ProjectCard.js
  │   ├── ProjectsGrid.js
  │   └── Resume.js
  ├── data/               # Data files
  │   └── projectsData.js
  ├── App.js              # Main App component
  ├── App.css             # Global styles
  └── index.js            # Entry point
```

## Components

- **Header**: Profile picture, name, description, theme toggle, and social links
- **About**: About me section
- **ProjectTabs**: Switch between different project categories
- **TechnologyFilter**: Filter projects by technology
- **ProjectCard**: Individual project card component
- **ProjectsGrid**: Grid layout for projects
- **Resume**: Resume download section

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Live Demo

🌐 **Live Site**: [https://Sangathamizhan1810.github.io/sanga-portfolio/](https://Sangathamizhan1810.github.io/sanga-portfolio/)

### Automatic Deployment

The project uses GitHub Actions to automatically build and deploy when you push to the `master` branch.

**To enable GitHub Pages:**
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically build and deploy your React app

### Manual Deployment

If you want to deploy manually:

```bash
npm run build
# Then upload the build folder contents to your hosting service
```

## Original Portfolio

Original vanilla JavaScript version files are archived in the `archive/` folder.
