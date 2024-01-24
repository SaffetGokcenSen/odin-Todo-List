import { addTodoListName, removeTodoListName } from "./projectModule.js";

// the factory function to create a todo list. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user. 
// ownerProject: The project which owns the todo list.
function createTodoList(title, description, dueDate, priority, 
    ownerProject) {
    return { title, description, dueDate, priority, ownerProject };
}

// the function to put a todo to the local storage.
function putTodo(todoStorageName, todoObject) {
    localStorage.setItem(todoStorageName, JSON.stringify(todoObject)); 
}

// the function to save a todo list in a project. 
// theTodoObject: The todo object to be saved in the local storage. 
// theProjectName: The name of the project the content of which is to be updated 
// by adding the new todo list.
function saveTodoList(theTodoObject, theProjectName) {
    putTodo(theTodoObject.storageName, JSON.stringify(theTodoObject))
    addTodoListName(theProjectName, theTodoObject.storageName);
}

// the function to get a todo list 
// todoStorageName: The storage name of the todo list 
function getTodo(todoStorageName) {
    tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    return tempObject;
}

// the function to update the title of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new title of the todo list
function updateTodoListTitle(todoStorageName, newTitle) {
    tempObject = getTodo(todoStorageName);
    tempObject.title = newTitle; 
    putTodo(todoStorageName, tempObject);
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoStorageName, newDescription) {
    tempObject = getTodo(todoStorageName);
    tempObject.description = newDescription; 
    putTodo(todoStorageName, tempObject);
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoStorageName, newDueDate) {
    tempObject = getTodo(todoStorageName);
    tempObject.dueDate = newDueDate; 
    putTodo(todoStorageName, tempObject);
} 

// the function to update the priority of a todo list. 
// todoStorageName: The storage name of the todo list 
// newPriority: The new priority of the todo list
function updateTodoListPriority(todoStorageName, newPriority) {
    tempObject = getTodo(todoStorageName);
    tempObject.priority = newPriority; 
    putTodo(todoStorageName, tempObject);
} 

// the function to delete a todo list 
// todoStorageName: The storage name of the todo list 
function deleteTodoList(todoStorageName) { 
    tempObject = getTodo(todoStorageName);
    ownerProject = tempObject.ownerProject; 
    localStorage.removeItem(todoStorageName); 
    removeTodoListName(ownerProject, todoStorageName);
} 

export { createTodoList, saveTodoList, updateTodoListTitle, 
    updateTodoListDescription, updateTodoListDueDate, updateTodoListPriority, 
    deleteTodoList}