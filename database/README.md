# Portfolio Projects Database

This directory contains a well-structured database of all portfolio projects, organized by categories with proper metadata and helper functions.

## File Structure

```
database/
├── projects.json      # JSON format database (for API/static data)
├── projects.js        # JavaScript module (for React/Node.js)
├── schema.json        # JSON Schema definition
└── README.md          # This file
```

## Database Structure

### Categories

1. **Full Stack Projects** (`fullstack`)
   - Web development projects
   - 8 projects total
   - Technologies: HTML, CSS, React, JavaScript, API, Python, Streamlit

2. **Internship Projects** (`internship`)
   - Internship experiences and certificates
   - 2 projects total
   - Technologies: Web Development, Backend Development

3. **Other Technical Skills** (`other`)
   - Certifications and design projects
   - 2 projects total
   - Technologies: Excel, Figma, UI/UX

### Project Schema

Each project contains:
- `id`: Unique identifier (e.g., "fs-001")
- `projectName`: Name of the project
- `projectUrl`: URL to the project
- `technologiesUsed`: Array of technologies
- `description`: Project description
- `category`: Project category
- `type`: Project type (Web Application, Certificate, etc.)
- `mustWatch`: Boolean flag for featured projects

## Usage

### JavaScript/React

```javascript
// Import specific data
import { fullStackprojectData, internProjects, otherProjectData } from './database/projects.js';

// Import with helpers
import projectsDB, { getAllProjects, getProjectsByCategory } from './database/projects.js';

// Get all projects
const allProjects = getAllProjects();

// Get projects by category
const fullStack = getProjectsByCategory('fullstack');

// Get project by ID
const project = getProjectById('fs-001');
```

### JSON

```javascript
// Load JSON file
import projectsData from './database/projects.json';

// Access categories
const fullStack = projectsData.categories.fullStack.projects;
const statistics = projectsData.statistics;
```

## Statistics

- **Total Projects**: 12
- **Full Stack Projects**: 8
- **Internship Projects**: 2
- **Other Projects**: 2
- **Unique Technologies**: 12

## Migration from Old Files

The old files (`index.js`, `data.js`, `otherprojects.js`) have been replaced with this structured database. The new structure provides:

- ✅ Unique IDs for each project
- ✅ Category metadata
- ✅ Type classification
- ✅ Helper functions
- ✅ Statistics
- ✅ JSON Schema validation
- ✅ Better organization
- ✅ Easier to maintain and extend

## Adding New Projects

1. Add project to appropriate category in `projects.js`
2. Include all required fields (id, projectName, projectUrl, etc.)
3. Update statistics in `databaseStatistics`
4. Update JSON file if using JSON format

## Schema Validation

Use `schema.json` to validate the database structure. This ensures consistency and helps catch errors early.




