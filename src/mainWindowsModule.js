import './style.css'; 
import { getProject } from './projectModule'; 
import { printTodo } from './todoWindowModule';

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

function shrinkProjectName() {
    while (this.parentNode.childNodes.length > 1) {
        this.parentNode.removeChild(this.parentNode.lastChild);
    }
    this.addEventListener("click", expandProjectName, {once: true});
}

function expandProjectName() {
    const projectObject = getProject(this.textContent); 
    const projectArray = projectObject.projectContent; 
    const todoTitle = document.createElement("div"); 
    todoTitle.textContent = "Todos";
    todoTitle.className = "todoTitle"; 
    this.parentNode.appendChild(todoTitle);
    for (let i=0; i < projectArray.length; i++) {
        const todoNameDiv = document.createElement("div"); 
        const todoNameSpan = document.createElement("span"); 
        todoNameSpan.textContent = projectArray[i];
        todoNameSpan.className = "todoListName"; 
        todoNameSpan.addEventListener("click", printTodo, {once: true});
        todoNameDiv.appendChild(todoNameSpan); 
        todoNameDiv.className = "todoListNameDiv"; 
        this.parentNode.appendChild(todoNameDiv);
    } 
    this.addEventListener("click", shrinkProjectName, {once: true});
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
        // the project name is written in the span element
        const itemName = document.createElement("span");
        itemName.textContent = namesArray[i]; 
        itemName.className = "projectName";
        itemDiv.className = "projectNameListItem"; 
        itemName.addEventListener("click", expandProjectName, {once: true});
        itemDiv.appendChild(itemName);
        projectNamesList.appendChild(itemDiv); 
    } 
}

export { setupMainFrames, implementProjectNamesList };