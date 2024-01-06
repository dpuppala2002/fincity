function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function showProjectForm() {
    document.getElementById('project-form').style.display = 'block';
}

function addProject() {
    // Logic to collect project details and update the projects view
    const projectName = prompt('Enter project name:');
    // Add more details as needed

    const projectsView = document.getElementById('projects-view');
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<strong>${projectName}</strong>`;
    projectsView.appendChild(projectItem);

    // Reset form and hide it
    document.getElementById('project-form').style.display = 'none';
}

function openLinkedIn() {
    // Logic to open LinkedIn profile or perform any other action
    alert('LinkedIn button clicked!');
}