import { createTodoList, saveTodoList } from "./todoListModule"; 
import { createProject, saveProject, addToExistingProjectNames, addTodoListName, 
getProject, removeTodoListName} from "./projectModule";
// The functions for dealing with todo lists and related projects are now to be 
// tested using the console. 

// local storage is cleared
localStorage.clear();

// the variable for the existing project names is declared
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
    console.log("existing project names:");
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
console.log("the first todo");
console.log(todo);
// the todo is stored in the storage
saveTodoList(todo, storageName, ownerProject); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
let index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = createProject(ownerProject); 
    // save it in the local storage
    saveProject(newProject); 
    // register it to the existing project names
    addToExistingProjectNames(newProject);
} 
// register the new todo list to the owner project
addTodoListName(ownerProject, storageName); 

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names after the project creation:");
console.log(existingProjectNames); 
let theOwnerProject = getProject(ownerProject); 
console.log("the owner project of the first todo:");
console.log(theOwnerProject); 

// Assume that a new todo list is created and saved in an existing project 
title = "The review edit"; 
description = "I am editing the book review.";
dueDate = "10.05.2024";
priority = "high"; 
ownerProject = "BookReview";
// todo is created
todo = createTodoList(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
storageName = ownerProject + "-" + title; 
console.log("the second todo");
console.log(todo);
// the todo is stored in the storage
saveTodoList(todo, storageName, ownerProject); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = createProject(ownerProject); 
    // save it in the local storage
    saveProject(newProject); 
    // register it to the existing project names
    addToExistingProjectNames(newProject);
} 
// register the new todo list to the owner project
addTodoListName(ownerProject, storageName); 

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
theOwnerProject = getProject(ownerProject); 
console.log("the owner project of the second todo:"); 
console.log(theOwnerProject); 

// a todo is to be removed from an existing project 
removeTodoListName("BookReview", "BookReview-The review edit");
// it is checked if the todo is removed
theOwnerProject = getProject("BookReview"); 
console.log("the project from which the second todo is removed:"); 
console.log(theOwnerProject); 