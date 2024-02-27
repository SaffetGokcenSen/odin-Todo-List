/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projectModule.js":
/*!******************************!*\
  !*** ./src/projectModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToExistingProjectNames: () => (/* binding */ addToExistingProjectNames),
/* harmony export */   addTodoListName: () => (/* binding */ addTodoListName),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   removeFromExistingProjectNames: () => (/* binding */ removeFromExistingProjectNames),
/* harmony export */   removeTodoListName: () => (/* binding */ removeTodoListName),
/* harmony export */   saveProject: () => (/* binding */ saveProject)
/* harmony export */ });
// A factory function to create a project object. 
// projectObjectName: The name of the project entered by the user. 
// projectContent: The todo lists contained by the project.
function createProject(projectObjectName) {
    // the content of the project is initially nothing. 
    const projectContent = [];
    return { projectObjectName, projectContent };
} 

// A function to get a project from the local storage
// projectObjectName: The name of the project. 
function getProject(projectObjectName) {
    return JSON.parse(localStorage.getItem(projectObjectName));
}

// A function to add to the existing project names. 
// theProjectObject: The project object to be saved to the local storage. 
function addToExistingProjectNames(theProjectObject) {
    const tempObject = JSON.parse(localStorage.getItem("existingProjectNames")); 
    tempObject.projectNames.push(theProjectObject.projectObjectName); 
    localStorage.setItem("existingProjectNames", JSON.stringify(tempObject));
}

// A function to save the project object to the local storage. 
// theProjectObject: The project object to be saved to the local storage. 
function saveProject(theProjectObject) {
    localStorage.setItem(theProjectObject.projectObjectName, JSON.stringify(theProjectObject)); 
} 

// A function to update the content of a project by adding a new todo list.
// projectObjectName: The name of the project. 
// todoListName: The todo list to be added to the content of the project. 
function addTodoListName(projectObjectName, todoListName) { 
    // the project object obtained from the local storage.
    const tempObject = getProject(projectObjectName);
    // the content of the project updated by adding the todo list.
    tempObject.projectContent.push(todoListName); 
    saveProject(tempObject); 
} 

// A function to update the content of a project by removing a todo list.
// projectObjectName: The name of the project. 
// todoListName: The todo list to be removed from the content of the project. 
function removeTodoListName(projectObject, todoListName) { 
    // the index of the todo is found
    const index = projectObject.projectContent.indexOf(todoListName); 
    // the todo is removed
    projectObject.projectContent.splice(index, 1); 
    return projectObject;
} 

// A function to remove a project name from the existing project names. 
// theProjectObject: The project object to be saved to the local storage. 
function removeFromExistingProjectNames(theProjectObject) {
    const tempObject = JSON.parse(localStorage.getItem("existingProjectNames")); 
    // the index of the project name is found
    const index = tempObject.projectContent.indexOf(theProjectObject.projectObjectName); 
    // the project name is removed
    tempObject.projectContent.splice(index, 1);
    localStorage.setItem(JSON.stringify("existingProjectNames"));
}

// A function to remove a project from the local storage. 
// projectObjectName: The name of the project. 
function deleteProject(projectObjectName) {
    localStorage.removeItem(projectObjectName); 
}



/***/ }),

/***/ "./src/todoListModule.js":
/*!*******************************!*\
  !*** ./src/todoListModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoList: () => (/* binding */ createTodoList),
/* harmony export */   deleteTodoList: () => (/* binding */ deleteTodoList),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   saveTodoList: () => (/* binding */ saveTodoList),
/* harmony export */   updateTodoListDescription: () => (/* binding */ updateTodoListDescription),
/* harmony export */   updateTodoListDueDate: () => (/* binding */ updateTodoListDueDate),
/* harmony export */   updateTodoListPriority: () => (/* binding */ updateTodoListPriority),
/* harmony export */   updateTodoListStorageName: () => (/* binding */ updateTodoListStorageName),
/* harmony export */   updateTodoListTitle: () => (/* binding */ updateTodoListTitle)
/* harmony export */ });
// the factory function to create a todo list. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user. 
// ownerProject: The project which owns the todo list.
function createTodoList(title, description, dueDate, priority, ownerProject) {
    return { title, description, dueDate, priority, ownerProject };
}

// the function to save a todo list in a project. 
// theTodoObject: The todo object to be saved in the local storage. 
// The name of the todo in the local storage, determined by the programmer. 
// theProjectName: The name of the project the content of which is to be updated 
// by adding the new todo list.
function saveTodoList(todoStorageName, todoObject) {
    localStorage.setItem(todoStorageName, JSON.stringify(todoObject)); 
}

// the function to get a todo list 
// todoStorageName: The storage name of the todo list 
function getTodo(todoStorageName) {
    const tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    return tempObject;
} 

// the function to update the title of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new title of the todo list
function updateTodoListTitle(todoStorageName, newTitle) {
    const tempObject = getTodo(todoStorageName);
    tempObject.title = newTitle; 
    saveTodoList(todoStorageName, tempObject);
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoStorageName, newDescription) {
    const tempObject = getTodo(todoStorageName);
    tempObject.description = newDescription; 
    saveTodoList(todoStorageName, tempObject);
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoStorageName, newDueDate) {
    const tempObject = getTodo(todoStorageName);
    tempObject.dueDate = newDueDate; 
    saveTodoList(todoStorageName, tempObject);
} 

// the function to update the priority of a todo list. 
// todoStorageName: The storage name of the todo list 
// newPriority: The new priority of the todo list
function updateTodoListPriority(todoStorageName, newPriority) {
    const tempObject = getTodo(todoStorageName);
    tempObject.priority = newPriority; 
    saveTodoList(todoStorageName, tempObject);
} 

// the function to delete a todo list 
// todoStorageName: The storage name of the todo list 
function deleteTodoList(todoStorageName) { 
    localStorage.removeItem(todoStorageName); 
} 

// the function to update the storage name of the todo 
function updateTodoListStorageName(previousStorageName, newOwnerProjectName) {
    const tempObject = JSON.parse(localStorage.getItem(previousStorageName)); 
    tempObject.ownerProject = newOwnerProjectName; 
    return tempObject;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoListModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListModule */ "./src/todoListModule.js");
/* harmony import */ var _projectModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule */ "./src/projectModule.js");
 

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
let todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.createTodoList)(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
let storageName = ownerProject + "-" + title; 
console.log("the first todo");
console.log(todo); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
let index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(ownerProject); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
} 
// the todo is stored in the storage
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(storageName, todo);
// register the new todo list to the owner project
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProject, title); 

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names after the project creation:");
console.log(existingProjectNames); 
let theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log("the owner project of the first todo:");
console.log(theOwnerProject); 

// Assume that a new todo list is created and saved in an existing project 
title = "The review edit"; 
description = "I am editing the book review.";
dueDate = "10.05.2024";
priority = "high"; 
ownerProject = "BookReview";
// todo is created
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.createTodoList)(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
storageName = ownerProject + "-" + title; 
console.log("the second todo");
console.log(todo);
// the todo is stored in the storage
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(storageName, todo); 
// is the todo stored in the local storage? 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)(storageName);
console.log("is the todo really stored in the local storage?"); 
console.log(todo);
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(ownerProject); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
} 
// register the new todo list to the owner project
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProject, title); 

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log("the owner project of the second todo:"); 
console.log(theOwnerProject); 

// a new project is created
const newProject2 = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)("Edits"); 
// save it in the local storage
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject2); 
// register it to the existing project names
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject2); 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 

// update the storage name of the todo "The review edit" 
let previousOwnerProject = "BookReview"; 
let previousStorageName = previousOwnerProject+"-"+"The review edit";
let updatedTodo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListStorageName)(previousStorageName, "Edits"); 
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.deleteTodoList)(previousStorageName); 

let previousOwnerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(previousOwnerProject);
previousOwnerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.removeTodoListName)(
    previousOwnerProjectObject, previousStorageName); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(previousOwnerProjectObject); 

(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits"+"-"+"The review edit", updatedTodo); 


// add the todo to the content of the "Edits" project
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(newProject2.projectObjectName, "The review edit"); 
// Has updateTodoListStorageName function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo really stored in the local storage?"); 
console.log(todo); 
// it is checked if the todo is added to the "Edits" project
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)("Edits"); 
console.log("the project to which the second todo is added:"); 
console.log(theOwnerProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsMERBQVU7QUFDM0MsNkJBQTZCLGtFQUFrQjtBQUMvQztBQUNBLDJEQUFXOztBQUVYLDZEQUFZOzs7QUFHWjtBQUNBLCtEQUFlO0FBQ2Y7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFVO0FBQzVCO0FBQ0EsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb2plY3Qgb2JqZWN0LiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByb2plY3RDb250ZW50OiBUaGUgdG9kbyBsaXN0cyBjb250YWluZWQgYnkgdGhlIHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgaXMgaW5pdGlhbGx5IG5vdGhpbmcuIFxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gW107XG4gICAgcmV0dXJuIHsgcHJvamVjdE9iamVjdE5hbWUsIHByb2plY3RDb250ZW50IH07XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIGdldCBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0T2JqZWN0TmFtZSkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnB1c2godGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE9iamVjdCkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBzYXZlUHJvamVjdCh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGhlUHJvamVjdE9iamVjdCkpOyBcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSBhZGRpbmcgYSBuZXcgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSBhZGRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBhZGRUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdE5hbWUsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgcHJvamVjdCBvYmplY3Qgb2J0YWluZWQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSk7XG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgdXBkYXRlZCBieSBhZGRpbmcgdGhlIHRvZG8gbGlzdC5cbiAgICB0ZW1wT2JqZWN0LnByb2plY3RDb250ZW50LnB1c2godG9kb0xpc3ROYW1lKTsgXG4gICAgc2F2ZVByb2plY3QodGVtcE9iamVjdCk7IFxufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IHJlbW92aW5nIGEgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gcmVtb3ZlVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3QsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHRvZG8gaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0b2RvTGlzdE5hbWUpOyBcbiAgICAvLyB0aGUgdG9kbyBpcyByZW1vdmVkXG4gICAgcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdDtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBuYW1lIGZyb20gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdCBuYW1lIGlzIGZvdW5kXG4gICAgY29uc3QgaW5kZXggPSB0ZW1wT2JqZWN0LnByb2plY3RDb250ZW50LmluZGV4T2YodGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG5hbWUgaXMgcmVtb3ZlZFxuICAgIHRlbXBPYmplY3QucHJvamVjdENvbnRlbnQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0T2JqZWN0TmFtZSk7IFxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0LCBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzLCBzYXZlUHJvamVjdCwgXG4gICAgYWRkVG9kb0xpc3ROYW1lLCByZW1vdmVUb2RvTGlzdE5hbWUsIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcywgXG4gICAgZGVsZXRlUHJvamVjdCB9OyIsIi8vIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHRvZG8gbGlzdC4gXG4vLyB0aXRsZTogVGhlIHRpdGxlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuXG4vLyBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gZHVlRGF0ZTogVGhlIGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIG93bmVyUHJvamVjdDogVGhlIHByb2plY3Qgd2hpY2ggb3ducyB0aGUgdG9kbyBsaXN0LlxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0IH07XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBzYXZlIGEgdG9kbyBsaXN0IGluIGEgcHJvamVjdC4gXG4vLyB0aGVUb2RvT2JqZWN0OiBUaGUgdG9kbyBvYmplY3QgdG8gYmUgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gVGhlIG5hbWUgb2YgdGhlIHRvZG8gaW4gdGhlIGxvY2FsIHN0b3JhZ2UsIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXIuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IHRoZSBjb250ZW50IG9mIHdoaWNoIGlzIHRvIGJlIHVwZGF0ZWQgXG4vLyBieSBhZGRpbmcgdGhlIG5ldyB0b2RvIGxpc3QuXG5mdW5jdGlvbiBzYXZlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb1N0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KSk7IFxufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZ2V0IGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSkpOyBcbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRpdGxlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgdGl0bGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RUaXRsZSh0b2RvU3RvcmFnZU5hbWUsIG5ld1RpdGxlKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICB0ZW1wT2JqZWN0LnRpdGxlID0gbmV3VGl0bGU7IFxuICAgIHNhdmVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUsIHRlbXBPYmplY3QpO1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG9TdG9yYWdlTmFtZSwgbmV3RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIHRlbXBPYmplY3QuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgXG4gICAgc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdGVtcE9iamVjdCk7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBkdWUgZGF0ZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld0R1ZURhdGU6IFRoZSBuZXcgZHVlIGRhdGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REdWVEYXRlKHRvZG9TdG9yYWdlTmFtZSwgbmV3RHVlRGF0ZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSk7XG4gICAgdGVtcE9iamVjdC5kdWVEYXRlID0gbmV3RHVlRGF0ZTsgXG4gICAgc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdGVtcE9iamVjdCk7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmlvcml0eSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1ByaW9yaXR5OiBUaGUgbmV3IHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kb1N0b3JhZ2VOYW1lLCBuZXdQcmlvcml0eSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSk7XG4gICAgdGVtcE9iamVjdC5wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICBzYXZlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lLCB0ZW1wT2JqZWN0KTtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byBkZWxldGUgYSB0b2RvIGxpc3QgXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSkgeyBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0b2RvU3RvcmFnZU5hbWUpOyBcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgbmV3T3duZXJQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByZXZpb3VzU3RvcmFnZU5hbWUpKTsgXG4gICAgdGVtcE9iamVjdC5vd25lclByb2plY3QgPSBuZXdPd25lclByb2plY3ROYW1lOyBcbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgdXBkYXRlVG9kb0xpc3RUaXRsZSwgXG4gICAgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiwgdXBkYXRlVG9kb0xpc3REdWVEYXRlLCB1cGRhdGVUb2RvTGlzdFByaW9yaXR5LCBcbiAgICBkZWxldGVUb2RvTGlzdCwgZ2V0VG9kbywgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIGdldFRvZG8sIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUsIFxuICAgIGRlbGV0ZVRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RNb2R1bGVcIjsgXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBzYXZlUHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgYWRkVG9kb0xpc3ROYW1lLCBcbmdldFByb2plY3QsIHJlbW92ZVRvZG9MaXN0TmFtZSB9IGZyb20gXCIuL3Byb2plY3RNb2R1bGVcIjtcbi8vIFRoZSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCB0b2RvIGxpc3RzIGFuZCByZWxhdGVkIHByb2plY3RzIGFyZSBub3cgdG8gYmUgXG4vLyB0ZXN0ZWQgdXNpbmcgdGhlIGNvbnNvbGUuIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGlzIGNsZWFyZWRcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyB0aGUgdmFyaWFibGUgZm9yIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGRlY2xhcmVkXG5sZXQgZXhpc3RpbmdQcm9qZWN0TmFtZXM7XG5cbi8vIENoZWNrIGlmIHRoZSBvYmplY3QgXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiIGV4aXN0cyBvbiB0aGUgbG9jYWwgc3RvcmFnZS4gSWYgaXQgXG4vLyBleGlzdHMsIGZldGNoIGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIE90aGVyd2lzZSwgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBcbi8vIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSkge1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0ge1xuICAgICAgICBwcm9qZWN0TmFtZXM6IFtdLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJObyBleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdE5hbWVzKSk7XG59IFxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpO1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgZmlyc3QgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7IFxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/XG5sZXQgaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHRoZSB0b2RvIGlzIHN0b3JlZCBpbiB0aGUgc3RvcmFnZVxuc2F2ZVRvZG9MaXN0KHN0b3JhZ2VOYW1lLCB0b2RvKTtcbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0XG5hZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0LCB0aXRsZSk7IFxuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzIGFmdGVyIHRoZSBwcm9qZWN0IGNyZWF0aW9uOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5sZXQgdGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIGZpcnN0IHRvZG86XCIpO1xuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiBhbiBleGlzdGluZyBwcm9qZWN0IFxudGl0bGUgPSBcIlRoZSByZXZpZXcgZWRpdFwiOyBcbmRlc2NyaXB0aW9uID0gXCJJIGFtIGVkaXRpbmcgdGhlIGJvb2sgcmV2aWV3LlwiO1xuZHVlRGF0ZSA9IFwiMTAuMDUuMjAyNFwiO1xucHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5vd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjtcbi8vIHRvZG8gaXMgY3JlYXRlZFxudG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbnN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBzZWNvbmQgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pO1xuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcbi8vIGlzIHRoZSB0b2RvIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT8gXG50b2RvID0gZ2V0VG9kbyhzdG9yYWdlTmFtZSk7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pO1xuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2Yob3duZXJQcm9qZWN0KTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdFxuYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdCwgdGl0bGUpOyBcblxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxudGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIHNlY29uZCB0b2RvOlwiKTsgXG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBuZXdQcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJFZGl0c1wiKTsgXG4vLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG5zYXZlUHJvamVjdChuZXdQcm9qZWN0Mik7IFxuLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbmFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdDIpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXCJUaGUgcmV2aWV3IGVkaXRcIiBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiOyBcbmxldCBwcmV2aW91c1N0b3JhZ2VOYW1lID0gcHJldmlvdXNPd25lclByb2plY3QrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIjtcbmxldCB1cGRhdGVkVG9kbyA9IHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgXCJFZGl0c1wiKTsgXG5kZWxldGVUb2RvTGlzdChwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5cbmxldCBwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3QocHJldmlvdXNPd25lclByb2plY3QpO1xucHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSByZW1vdmVUb2RvTGlzdE5hbWUoXG4gICAgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QsIHByZXZpb3VzU3RvcmFnZU5hbWUpOyBcbnNhdmVQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0KTsgXG5cbnNhdmVUb2RvTGlzdChcIkVkaXRzXCIrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIiwgdXBkYXRlZFRvZG8pOyBcblxuXG4vLyBhZGQgdGhlIHRvZG8gdG8gdGhlIGNvbnRlbnQgb2YgdGhlIFwiRWRpdHNcIiBwcm9qZWN0XG5hZGRUb2RvTGlzdE5hbWUobmV3UHJvamVjdDIucHJvamVjdE9iamVjdE5hbWUsIFwiVGhlIHJldmlldyBlZGl0XCIpOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcmVhbGx5IHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuLy8gaXQgaXMgY2hlY2tlZCBpZiB0aGUgdG9kbyBpcyBhZGRlZCB0byB0aGUgXCJFZGl0c1wiIHByb2plY3RcbnRoZU93bmVyUHJvamVjdCA9IGdldFByb2plY3QoXCJFZGl0c1wiKTsgXG5jb25zb2xlLmxvZyhcInRoZSBwcm9qZWN0IHRvIHdoaWNoIHRoZSBzZWNvbmQgdG9kbyBpcyBhZGRlZDpcIik7IFxuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=