import './style.css'; 
import { getProject } from './projectModule';

// the function for setting up the main frames of the user interface. 
function setupMainFrames() {
    // the window with which the user is going to interact is created.
    const userWindow = document.createElement("div"); 
    // the class of the user window is userWindow
    userWindow.className = "userWindow"; 
    // userWindow is added to the page
    document.body.appendChild(userWindow); 

    // the window in which project names are listed 
    const projectNamesWindow = document.createElement("div"); 
    // the class of the project names window is projectNamesWindow 
    projectNamesWindow.className = "projectNamesWindow"; 
    // project names window is added to the user window
    userWindow.appendChild(projectNamesWindow); 

    // the div in which the header of the project names window is written 
    const projectNamesWindowHeader = document.createElement("div"); 
    // the class of the project names window header div 
    projectNamesWindowHeader.className = "projectNamesWindowHeader"; 
    // project names window header is written
    projectNamesWindowHeader.textContent = "PROJECTS";
    // project names window header is added to the project names window
    projectNamesWindow.appendChild(projectNamesWindowHeader); 

    // the div in which the list of project names stands 
    const projectNamesList = document.createElement("div"); 
    // the class of the project names list div 
    projectNamesList.className = "projectNamesList"; 
    // project names list is added to the project names window 
    projectNamesWindow.appendChild(projectNamesList);

    // the window in which the todos are shown 
    const todosWindow = document.createElement("div"); 
    // the class of the todos window is todosWindow 
    todosWindow.className = "todosWindow"; 
    // todos window is added to the user window 
    userWindow.appendChild(todosWindow);
} 

function implementProjectNamesList() { 
    // existing project names is fetched from the local storage
    const existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
    // existing project names array assigned to a constant
    const namesArray = existingProjectNames.projectNames; 
    // access to the project names list div
    const projectNamesList = document.getElementsByClassName("projectNamesList")[0]; 
    // a div for each project name is created and added to the list window, the 
    // project name is written
    for (let i=0; i < namesArray.length; i++) {
        const itemDiv = document.createElement("div"); 
        itemDiv.textContent = namesArray[i]; 
        itemDiv.className = "projectNameListItem"; 
        itemDiv.addEventListener("click", function (e) {
            const projectObject = getProject(this.textContent); 
            const projectArray = projectObject.projectContent; 
            for (let i=0; i < projectArray.length; i++) {
                const todoNameDiv = document.createElement("div"); 
                todoNameDiv.textContent = projectArray[i]; 
                todoNameDiv.className = "todoListName";
                e.currentTarget.appendChild(todoNameDiv);
            }
        });
        projectNamesList.appendChild(itemDiv); 
    } 
}

export { setupMainFrames, implementProjectNamesList };