import { createTodoList, saveTodoList } from "./todoListModule"; 
// The functions for dealing with todo lists and related projects are now to be 
// tested using the console. 

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
let title = "The school fee"; 
let description = "I have to pay my son's school fee.";
let dueDate = "02.01.1943";
let priority = "high"; 
let ownerProject = "MySon";
// todo is created
let todo = createTodoList(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
let storageName = ownerProject + "-" + title; 
console.log(todo)
// the todo is stored in the storage
saveTodoList(todo, storageName, ownerProject); 