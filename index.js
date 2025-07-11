const tabsContainer = document.getElementById("tabs");
const projectsContainer = document.getElementById("projects");
const projectTitle = document.getElementById("project-title")

projectTitle.textContent = "Web Projects"

function arrangeData(projectData) {
    const allTechs = [
      ...new Set(projectData.flatMap(p => p.technologiesUsed))
    ];

    allTechs.forEach(tech => {
      const btn = document.createElement("button");
      btn.textContent = tech;
      btn.addEventListener("click", () => filterProjects(tech));
      tabsContainer.appendChild(btn);
    });

    function filterProjects(tech) {
      const filtered = projectData.filter(project =>
        project.technologiesUsed.includes(tech)
      );
      renderProjects(filtered);
    }

    function renderProjects(projects) {
      projectsContainer.innerHTML = "";
      projects.forEach(project => {
        const card = document.createElement("div");
        const isMustWatch = project.mustWatch === true
        card.className = "project-card";
        card.innerHTML = `
          <h3>${project.projectName}</h3>
          <p>${project.description}</p>
          <p style="margin-bottom:16px;margin-top:16px;"><strong>Tech:</strong> ${project.technologiesUsed.join(", ")}</p>
          <p>${isMustWatch ? "Must Watch" : ""}</p>
          <a href="${project.projectUrl}" target="_blank">Visit Link</a>
        `;
        projectsContainer.appendChild(card);
      });
    }

    renderProjects(projectData);

  }
    
    function DisplayOtherSections() {
      console.log("Hiding Full Stack sections");
      tabsContainer.innerHTML = ""
      projectTitle.textContent = "Other Technical Competencies"

      arrangeData(otherProjectData);
    }
    
    function DisplayFullSections() {
      console.log("Displayed Full Stack sections");
      tabsContainer.innerHTML = ""
      projectTitle.textContent = "Web Projects"

      arrangeData(fullStackprojectData);
    }

    function DisplayInternship() {
      console.log("Displayed Full Stack sections");
      tabsContainer.innerHTML = ""
      projectTitle.textContent = "Internship"

      arrangeData(internProjects);
    }

    

arrangeData(fullStackprojectData);


const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });