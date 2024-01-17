import { addTodoListName } from "./projectModule.js";

// the factory function to create a todo list. 
// storageName: The name of the object in the localStorage, set by the programmer. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user.
function createTodoList(storageName, title, description, dueDate, priority) {
    return { storageName, title, description, dueDate, priority };
}

// the function to save a todo list in a project. 
// theTodoObject: The todo object to be saved in the local storage. 
// theProjectName: The name of the project the content of which is to be updated 
// by adding the new todo list.
function saveTodoList(theTodoObject, theProjectName) {
    localStorage.setItem(theTodoObject.storageName, JSON.stringify(theTodoObject)); 
    addTodoListName(theProjectName, theTodoObject.storageName);
}

// the function to update the title of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new title of the todo list
function updateTodoListTitle(todoStorageName, newTitle) {
    tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    tempObject.title = newTitle; 
    localStorage.setItem(todoStorageName, JSON.stringify(tempObject)); 
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoStorageName, newDescription) {
    tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    tempObject.description = newDescription; 
    localStorage.setItem(todoStorageName, JSON.stringify(tempObject)); 
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoStorageName, newDueDate) {
    tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    tempObject.dueDate = newDueDate; 
    localStorage.setItem(todoStorageName, JSON.stringify(tempObject)); 
} 