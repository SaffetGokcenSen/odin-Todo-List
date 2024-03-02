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
    // the content of the project updated by adding the todo list.
    projectObjectName.projectContent.push(todoListName); 
    return projectObjectName;
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
// theProjectName: The project name to be removed.
function removeFromExistingProjectNames(theProjectName) {
    const tempObject = JSON.parse(localStorage.getItem("existingProjectNames")); 
    // the index of the project name is found
    const index = tempObject.projectNames.indexOf(theProjectName); 
    // the project name is removed
    tempObject.projectNames.splice(index, 1);
    localStorage.setItem("existingProjectNames", JSON.stringify(tempObject));
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
function updateTodoListTitle(todoObject, newTitle) {
    todoObject.title = newTitle; 
    return todoObject;
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoObject, newDescription) {
    todoObject.description = newDescription; 
    return todoObject;
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoObject, newDueDate) {
    todoObject.dueDate = newDueDate;
    return todoObject;
} 

// the function to update the priority of a todo list. 
// todoStorageName: The storage name of the todo list 
// newPriority: The new priority of the todo list
function updateTodoListPriority(todoObject, newPriority) {
    todoObject.priority = newPriority; 
    return todoObject;
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
let ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, title); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);

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
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, title); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);

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
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)("Edits"); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, "The review edit"); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);
// Has updateTodoListStorageName function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo really stored in the local storage?"); 
console.log(todo); 
// it is checked if the todo is added to the "Edits" project
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)("Edits"); 
console.log("the project to which the second todo is added:"); 
console.log(theOwnerProject); 

// the title of the todo "Edits-The review edit" is to be updated to the new title 
// "Edits-The review of the edit" 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListTitle)(todo, "The review of the edit");
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListTitle function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo title updated to 'The review of the edit'?"); 
console.log(todo); 

// the description of the todo is to be updated 
description = "The book review is to be edited.";
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListDescription)(todo, description);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListDescription function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo description updated properly?"); 
console.log(todo); 

// the due date of the todo is to be updated 
dueDate = "11.05.2024"; 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListDueDate)(todo, dueDate);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListDueDate function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo description updated properly?"); 
console.log(todo); 

// the priority of the todo is to be updated 
priority = "very high"; 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListPriority)(todo, priority);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListPriority function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo priority updated properly?"); 
console.log(todo); 

// a new project is created 
// is the project already existing? 
const newProjectName = "Writings"; 
index = existingProjectNames.projectNames.indexOf(newProjectName); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(newProjectName); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
}  
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 

// deleteProject is tested
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(newProjectName); 
console.log((0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(newProjectName)); 

// removeFromExistingProjectNames is tested 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.removeFromExistingProjectNames)(newProjectName); 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0Esa0JBQWtCLDBFQUF5QjtBQUMzQywrREFBYztBQUNkLGlDQUFpQywwREFBVTtBQUMzQyw2QkFBNkIsa0VBQWtCO0FBQy9DO0FBQ0EsMkRBQVc7QUFDWCw2REFBWTs7QUFFWjtBQUNBLHFCQUFxQiwwREFBVTtBQUMvQixxQkFBcUIsK0RBQWU7QUFDcEMsMkRBQVc7QUFDWDtBQUNBLE9BQU8sd0RBQU87QUFDZDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sb0VBQW1CO0FBQzFCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sMEVBQXlCO0FBQ2hDLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sc0VBQXFCO0FBQzVCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sdUVBQXNCO0FBQzdCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1Qiw2REFBYTtBQUNwQztBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLElBQUkseUVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQWE7QUFDYixZQUFZLDBEQUFVOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4QjtBQUM5QjtBQUNBO0FBQ0EsbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb2plY3Qgb2JqZWN0LiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByb2plY3RDb250ZW50OiBUaGUgdG9kbyBsaXN0cyBjb250YWluZWQgYnkgdGhlIHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgaXMgaW5pdGlhbGx5IG5vdGhpbmcuIFxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gW107XG4gICAgcmV0dXJuIHsgcHJvamVjdE9iamVjdE5hbWUsIHByb2plY3RDb250ZW50IH07XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIGdldCBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0T2JqZWN0TmFtZSkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnB1c2godGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE9iamVjdCkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBzYXZlUHJvamVjdCh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGhlUHJvamVjdE9iamVjdCkpOyBcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSBhZGRpbmcgYSBuZXcgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSBhZGRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBhZGRUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdE5hbWUsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCB1cGRhdGVkIGJ5IGFkZGluZyB0aGUgdG9kbyBsaXN0LlxuICAgIHByb2plY3RPYmplY3ROYW1lLnByb2plY3RDb250ZW50LnB1c2godG9kb0xpc3ROYW1lKTsgXG4gICAgcmV0dXJuIHByb2plY3RPYmplY3ROYW1lO1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IHJlbW92aW5nIGEgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gcmVtb3ZlVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3QsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHRvZG8gaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0b2RvTGlzdE5hbWUpOyBcbiAgICAvLyB0aGUgdG9kbyBpcyByZW1vdmVkXG4gICAgcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdDtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBuYW1lIGZyb20gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBwcm9qZWN0IG5hbWUgdG8gYmUgcmVtb3ZlZC5cbmZ1bmN0aW9uIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgbmFtZSBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMuaW5kZXhPZih0aGVQcm9qZWN0TmFtZSk7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG5hbWUgaXMgcmVtb3ZlZFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE9iamVjdE5hbWUpOyBcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgc2F2ZVByb2plY3QsIFxuICAgIGFkZFRvZG9MaXN0TmFtZSwgcmVtb3ZlVG9kb0xpc3ROYW1lLCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMsIFxuICAgIGRlbGV0ZVByb2plY3QgfTsiLCIvLyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSB0b2RvIGxpc3QuIFxuLy8gdGl0bGU6IFRoZSB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuLy8gZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIGR1ZURhdGU6IFRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBvd25lclByb2plY3Q6IFRoZSBwcm9qZWN0IHdoaWNoIG93bnMgdGhlIHRvZG8gbGlzdC5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCB9O1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gc2F2ZSBhIHRvZG8gbGlzdCBpbiBhIHByb2plY3QuIFxuLy8gdGhlVG9kb09iamVjdDogVGhlIHRvZG8gb2JqZWN0IHRvIGJlIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIFRoZSBuYW1lIG9mIHRoZSB0b2RvIGluIHRoZSBsb2NhbCBzdG9yYWdlLCBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyLiBcbi8vIHRoZVByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCB0aGUgY29udGVudCBvZiB3aGljaCBpcyB0byBiZSB1cGRhdGVkIFxuLy8gYnkgYWRkaW5nIHRoZSBuZXcgdG9kbyBsaXN0LlxuZnVuY3Rpb24gc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdG9kb09iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdCkpOyBcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGdldCBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUpKTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0aXRsZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1RpdGxlOiBUaGUgbmV3IHRpdGxlIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0VGl0bGUodG9kb09iamVjdCwgbmV3VGl0bGUpIHtcbiAgICB0b2RvT2JqZWN0LnRpdGxlID0gbmV3VGl0bGU7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG9PYmplY3QsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgdG9kb09iamVjdC5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGR1ZSBkYXRlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3RHVlRGF0ZTogVGhlIG5ldyBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kb09iamVjdCwgbmV3RHVlRGF0ZSkge1xuICAgIHRvZG9PYmplY3QuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmlvcml0eSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1ByaW9yaXR5OiBUaGUgbmV3IHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kb09iamVjdCwgbmV3UHJpb3JpdHkpIHtcbiAgICB0b2RvT2JqZWN0LnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZGVsZXRlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lKSB7IFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9TdG9yYWdlTmFtZSk7IFxufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZShwcmV2aW91c1N0b3JhZ2VOYW1lLCBuZXdPd25lclByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJldmlvdXNTdG9yYWdlTmFtZSkpOyBcbiAgICB0ZW1wT2JqZWN0Lm93bmVyUHJvamVjdCA9IG5ld093bmVyUHJvamVjdE5hbWU7IFxuICAgIHJldHVybiB0ZW1wT2JqZWN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvTGlzdCwgc2F2ZVRvZG9MaXN0LCB1cGRhdGVUb2RvTGlzdFRpdGxlLCBcbiAgICB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uLCB1cGRhdGVUb2RvTGlzdER1ZURhdGUsIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHksIFxuICAgIGRlbGV0ZVRvZG9MaXN0LCBnZXRUb2RvLCB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgZ2V0VG9kbywgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSwgXG4gICAgZGVsZXRlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIFxuICAgIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSB9IGZyb20gXCIuL3RvZG9MaXN0TW9kdWxlXCI7IFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgc2F2ZVByb2plY3QsIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMsIGFkZFRvZG9MaXN0TmFtZSwgXG5nZXRQcm9qZWN0LCByZW1vdmVUb2RvTGlzdE5hbWUsIGRlbGV0ZVByb2plY3QsIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyB9IFxuZnJvbSBcIi4vcHJvamVjdE1vZHVsZVwiO1xuLy8gVGhlIGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoIHRvZG8gbGlzdHMgYW5kIHJlbGF0ZWQgcHJvamVjdHMgYXJlIG5vdyB0byBiZSBcbi8vIHRlc3RlZCB1c2luZyB0aGUgY29uc29sZS4gXG5cbi8vIGxvY2FsIHN0b3JhZ2UgaXMgY2xlYXJlZFxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIHRoZSB2YXJpYWJsZSBmb3IgdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMgaXMgZGVjbGFyZWRcbmxldCBleGlzdGluZ1Byb2plY3ROYW1lcztcblxuLy8gQ2hlY2sgaWYgdGhlIG9iamVjdCBcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIgZXhpc3RzIG9uIHRoZSBsb2NhbCBzdG9yYWdlLiBJZiBpdCBcbi8vIGV4aXN0cywgZmV0Y2ggaXQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gT3RoZXJ3aXNlLCBjcmVhdGUgaXQgYW5kIHN0b3JlIGl0IGluIFxuLy8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKSB7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSB7XG4gICAgICAgIHByb2plY3ROYW1lczogW10sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIk5vIGV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdQcm9qZWN0TmFtZXMpKTtcbn0gXG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTtcbn0gXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxubGV0IHRpdGxlID0gXCJUaGUgYm9vayByZXZpZXdcIjsgXG5sZXQgZGVzY3JpcHRpb24gPSBcIkkgYW0gc3RhcnRpbmcgYSBib29rIHJldmlldy5cIjtcbmxldCBkdWVEYXRlID0gXCIxMC4wNC4yMDI0XCI7XG5sZXQgcHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5sZXQgb3duZXJQcm9qZWN0ID0gXCJCb29rUmV2aWV3XCI7XG4vLyB0b2RvIGlzIGNyZWF0ZWRcbmxldCB0b2RvID0gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KTsgXG4vLyBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gaXMgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lclxubGV0IHN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBmaXJzdCB0b2RvXCIpO1xuY29uc29sZS5sb2codG9kbyk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmxldCBpbmRleCA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lcy5pbmRleE9mKG93bmVyUHJvamVjdCk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qob3duZXJQcm9qZWN0KTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59IFxuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcblxuLy8gcmVnaXN0ZXIgdGhlIG5ldyB0b2RvIGxpc3QgdG8gdGhlIG93bmVyIHByb2plY3RcbmxldCBvd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdE9iamVjdCwgdGl0bGUpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG5cbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXMgYWZ0ZXIgdGhlIHByb2plY3QgY3JlYXRpb246XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbmxldCB0aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgZmlyc3QgdG9kbzpcIik7XG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gQXNzdW1lIHRoYXQgYSBuZXcgdG9kbyBsaXN0IGlzIGNyZWF0ZWQgYW5kIHNhdmVkIGluIGFuIGV4aXN0aW5nIHByb2plY3QgXG50aXRsZSA9IFwiVGhlIHJldmlldyBlZGl0XCI7IFxuZGVzY3JpcHRpb24gPSBcIkkgYW0gZWRpdGluZyB0aGUgYm9vayByZXZpZXcuXCI7XG5kdWVEYXRlID0gXCIxMC4wNS4yMDI0XCI7XG5wcmlvcml0eSA9IFwiaGlnaFwiOyBcbm93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG50b2RvID0gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KTsgXG4vLyBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gaXMgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lclxuc3RvcmFnZU5hbWUgPSBvd25lclByb2plY3QgKyBcIi1cIiArIHRpdGxlOyBcbmNvbnNvbGUubG9nKFwidGhlIHNlY29uZCB0b2RvXCIpO1xuY29uc29sZS5sb2codG9kbyk7XG4vLyB0aGUgdG9kbyBpcyBzdG9yZWQgaW4gdGhlIHN0b3JhZ2VcbnNhdmVUb2RvTGlzdChzdG9yYWdlTmFtZSwgdG9kbyk7IFxuLy8gaXMgdGhlIHRvZG8gc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlPyBcbnRvZG8gPSBnZXRUb2RvKHN0b3JhZ2VOYW1lKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcmVhbGx5IHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7XG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nP1xuaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIHRpdGxlKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgc2Vjb25kIHRvZG86XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbmNvbnN0IG5ld1Byb2plY3QyID0gY3JlYXRlUHJvamVjdChcIkVkaXRzXCIpOyBcbi8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbnNhdmVQcm9qZWN0KG5ld1Byb2plY3QyKTsgXG4vLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0Mik7IFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuXG4vLyB1cGRhdGUgdGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBcIlRoZSByZXZpZXcgZWRpdFwiIFxubGV0IHByZXZpb3VzT3duZXJQcm9qZWN0ID0gXCJCb29rUmV2aWV3XCI7IFxubGV0IHByZXZpb3VzU3RvcmFnZU5hbWUgPSBwcmV2aW91c093bmVyUHJvamVjdCtcIi1cIitcIlRoZSByZXZpZXcgZWRpdFwiO1xubGV0IHVwZGF0ZWRUb2RvID0gdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZShwcmV2aW91c1N0b3JhZ2VOYW1lLCBcIkVkaXRzXCIpOyBcbmRlbGV0ZVRvZG9MaXN0KHByZXZpb3VzU3RvcmFnZU5hbWUpOyBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3QocHJldmlvdXNPd25lclByb2plY3QpO1xucHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSByZW1vdmVUb2RvTGlzdE5hbWUoXG4gICAgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QsIHByZXZpb3VzU3RvcmFnZU5hbWUpOyBcbnNhdmVQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0KTsgXG5zYXZlVG9kb0xpc3QoXCJFZGl0c1wiK1wiLVwiK1wiVGhlIHJldmlldyBlZGl0XCIsIHVwZGF0ZWRUb2RvKTsgXG5cbi8vIGFkZCB0aGUgdG9kbyB0byB0aGUgY29udGVudCBvZiB0aGUgXCJFZGl0c1wiIHByb2plY3QgXG5vd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KFwiRWRpdHNcIik7IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdE9iamVjdCwgXCJUaGUgcmV2aWV3IGVkaXRcIik7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcmVhbGx5IHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuLy8gaXQgaXMgY2hlY2tlZCBpZiB0aGUgdG9kbyBpcyBhZGRlZCB0byB0aGUgXCJFZGl0c1wiIHByb2plY3RcbnRoZU93bmVyUHJvamVjdCA9IGdldFByb2plY3QoXCJFZGl0c1wiKTsgXG5jb25zb2xlLmxvZyhcInRoZSBwcm9qZWN0IHRvIHdoaWNoIHRoZSBzZWNvbmQgdG9kbyBpcyBhZGRlZDpcIik7IFxuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIHRoZSB0aXRsZSBvZiB0aGUgdG9kbyBcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiIGlzIHRvIGJlIHVwZGF0ZWQgdG8gdGhlIG5ldyB0aXRsZSBcbi8vIFwiRWRpdHMtVGhlIHJldmlldyBvZiB0aGUgZWRpdFwiIFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0VGl0bGUodG9kbywgXCJUaGUgcmV2aWV3IG9mIHRoZSBlZGl0XCIpO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFRpdGxlIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gdGl0bGUgdXBkYXRlZCB0byAnVGhlIHJldmlldyBvZiB0aGUgZWRpdCc/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5kZXNjcmlwdGlvbiA9IFwiVGhlIGJvb2sgcmV2aWV3IGlzIHRvIGJlIGVkaXRlZC5cIjtcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG8sIGRlc2NyaXB0aW9uKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIGRlc2NyaXB0aW9uIHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5kdWVEYXRlID0gXCIxMS4wNS4yMDI0XCI7IFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSh0b2RvLCBkdWVEYXRlKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3REdWVEYXRlIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gZGVzY3JpcHRpb24gdXBkYXRlZCBwcm9wZXJseT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyB0aGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gaXMgdG8gYmUgdXBkYXRlZCBcbnByaW9yaXR5ID0gXCJ2ZXJ5IGhpZ2hcIjsgXG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3RQcmlvcml0eSh0b2RvLCBwcmlvcml0eSk7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkgZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBwcmlvcml0eSB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZCBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/IFxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBcIldyaXRpbmdzXCI7IFxuaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihuZXdQcm9qZWN0TmFtZSk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gIFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuXG4vLyBkZWxldGVQcm9qZWN0IGlzIHRlc3RlZFxuZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7IFxuY29uc29sZS5sb2coZ2V0UHJvamVjdChuZXdQcm9qZWN0TmFtZSkpOyBcblxuLy8gcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzIGlzIHRlc3RlZCBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbnJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0TmFtZSk7IFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==