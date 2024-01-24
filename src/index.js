import { createTodoList, saveTodoList } from "./todoListModule";
// The functions for dealing with todo lists and related projects are now to be 
// tested using the console. 

// Check if the object "existingProjectNames" exists on the local storage. If it 
// exists, fetch it from the local storage. Otherwise, create it and store it in 
// the local storage. 
if (!localStorage.getItem("existingProjectNames")) {
    const existingProjectNames = {
        projectNames: [],
    };
    console.log("No existingProjectNames object in the local storage!"); 
    localStorage.setItem("existingProjectNames", JSON.stringify(existingProjectNames));
} 
else {
    console.log("existingProjectNames object in the local storage!");
    const existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames"));
} 

// Assume that a new todo list is created and saved in the local storage
title = "The school fee"; 
descripton = "I have to pay my son's school fee.";
dueDate = "02.01.1943";
prioriy = "high"; 
ownerProject = "MySon";
todo = createTodoList(title, description, dueDate, priority, ownerProject); 
storageName = ownerProject + "-" + title;
saveTodoList(todo, storageName, ownerProject);