import './style.css';

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
} 

export { setupMainFrames };