import { createTodoList, saveTodoList } from "./todoListModule"; 
import { createProject, saveProject, addToExistingProjectNames, addTodoListName, 
getProject} from "./projectModule";
// The functions for dealing with todo lists and related projects are now to be 
// tested using the console. 

localStorage.clear();

let existingProjectNames;

// Check if the object "existingProjectNames" exists on the local storage. If it 
// exists, fetch it from the local storage. Otherwise, create it and store it in 
// the local storage. 
if (!localStorage.getItem("existingProjectNames")) {
    existingProjectNames = {
        projectNames: [],
    };
    console.log("No existingProjectNames object in the local storage!"); 
    localStorage.setItem("existingProjectNames", JSON.stringify(existingProjectNames));
} 
else {
    console.log("existingProjectNames object in the local storage!");
    existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
    console.log(existingProjectNames);
} 

// Assume that a new todo list is created and saved in the local storage
let title = "The book review"; 
let description = "I am starting a book review.";
let dueDate = "10.04.2024";
let priority = "high"; 
let ownerProject = "BookReview";
// todo is created
let todo = createTodoList(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
let storageName = ownerProject + "-" + title; 
console.log("the todo");
console.log(todo)
// the todo is stored in the storage
saveTodoList(todo, storageName, ownerProject); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
const index = existingProjectNames.projectNames.indexOf(ownerProject); 
console.log("index");
console.log(index);
if (index === -1) {
    const newProject = createProject(ownerProject); 
    saveProject(newProject); 
    addToExistingProjectNames(newProject);
} 