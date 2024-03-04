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



/***/ }),

/***/ "./src/userInterfaceModule.js":
/*!************************************!*\
  !*** ./src/userInterfaceModule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupMainFrames: () => (/* binding */ setupMainFrames)
/* harmony export */ });
// the function for setting up the main frames of the user interface. 
function setupMainFrames() {
    const theWindow = document.createElement("div");
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
/* harmony import */ var _userInterfaceModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterfaceModule */ "./src/userInterfaceModule.js");






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

(0,_userInterfaceModule__WEBPACK_IMPORTED_MODULE_2__.setupMainFrames)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3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ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm9qZWN0IG9iamVjdC4gXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBwcm9qZWN0Q29udGVudDogVGhlIHRvZG8gbGlzdHMgY29udGFpbmVkIGJ5IHRoZSBwcm9qZWN0LlxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0IGlzIGluaXRpYWxseSBub3RoaW5nLiBcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IFtdO1xuICAgIHJldHVybiB7IHByb2plY3RPYmplY3ROYW1lLCBwcm9qZWN0Q29udGVudCB9O1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byBnZXQgYSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2Vcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE9iamVjdE5hbWUpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXModGhlUHJvamVjdE9iamVjdCkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICB0ZW1wT2JqZWN0LnByb2plY3ROYW1lcy5wdXNoKHRoZVByb2plY3RPYmplY3QucHJvamVjdE9iamVjdE5hbWUpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KHRlbXBPYmplY3QpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gc2F2ZVByb2plY3QodGhlUHJvamVjdE9iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoZVByb2plY3RPYmplY3QucHJvamVjdE9iamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoZVByb2plY3RPYmplY3QpKTsgXG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgYnkgYWRkaW5nIGEgbmV3IHRvZG8gbGlzdC5cbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG4vLyB0b2RvTGlzdE5hbWU6IFRoZSB0b2RvIGxpc3QgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gYWRkVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3ROYW1lLCB0b2RvTGlzdE5hbWUpIHsgXG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgdXBkYXRlZCBieSBhZGRpbmcgdGhlIHRvZG8gbGlzdC5cbiAgICBwcm9qZWN0T2JqZWN0TmFtZS5wcm9qZWN0Q29udGVudC5wdXNoKHRvZG9MaXN0TmFtZSk7IFxuICAgIHJldHVybiBwcm9qZWN0T2JqZWN0TmFtZTtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSByZW1vdmluZyBhIHRvZG8gbGlzdC5cbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG4vLyB0b2RvTGlzdE5hbWU6IFRoZSB0b2RvIGxpc3QgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIHJlbW92ZVRvZG9MaXN0TmFtZShwcm9qZWN0T2JqZWN0LCB0b2RvTGlzdE5hbWUpIHsgXG4gICAgLy8gdGhlIGluZGV4IG9mIHRoZSB0b2RvIGlzIGZvdW5kXG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0T2JqZWN0LnByb2plY3RDb250ZW50LmluZGV4T2YodG9kb0xpc3ROYW1lKTsgXG4gICAgLy8gdGhlIHRvZG8gaXMgcmVtb3ZlZFxuICAgIHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQuc3BsaWNlKGluZGV4LCAxKTsgXG4gICAgcmV0dXJuIHByb2plY3RPYmplY3Q7XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIHByb2plY3QgbmFtZSBmcm9tIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzLiBcbi8vIHRoZVByb2plY3ROYW1lOiBUaGUgcHJvamVjdCBuYW1lIHRvIGJlIHJlbW92ZWQuXG5mdW5jdGlvbiByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXModGhlUHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgLy8gdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IG5hbWUgaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHRlbXBPYmplY3QucHJvamVjdE5hbWVzLmluZGV4T2YodGhlUHJvamVjdE5hbWUpOyBcbiAgICAvLyB0aGUgcHJvamVjdCBuYW1lIGlzIHJlbW92ZWRcbiAgICB0ZW1wT2JqZWN0LnByb2plY3ROYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE9iamVjdCkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RPYmplY3ROYW1lKTsgXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMsIHNhdmVQcm9qZWN0LCBcbiAgICBhZGRUb2RvTGlzdE5hbWUsIHJlbW92ZVRvZG9MaXN0TmFtZSwgcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzLCBcbiAgICBkZWxldGVQcm9qZWN0IH07IiwiLy8gdGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9kbyBsaXN0LiBcbi8vIHRpdGxlOiBUaGUgdGl0bGUgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci5cbi8vIGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBkdWVEYXRlOiBUaGUgZHVlIGRhdGUgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBwcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gb3duZXJQcm9qZWN0OiBUaGUgcHJvamVjdCB3aGljaCBvd25zIHRoZSB0b2RvIGxpc3QuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QgfTtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHNhdmUgYSB0b2RvIGxpc3QgaW4gYSBwcm9qZWN0LiBcbi8vIHRoZVRvZG9PYmplY3Q6IFRoZSB0b2RvIG9iamVjdCB0byBiZSBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyBUaGUgbmFtZSBvZiB0aGUgdG9kbyBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lci4gXG4vLyB0aGVQcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QgdGhlIGNvbnRlbnQgb2Ygd2hpY2ggaXMgdG8gYmUgdXBkYXRlZCBcbi8vIGJ5IGFkZGluZyB0aGUgbmV3IHRvZG8gbGlzdC5cbmZ1bmN0aW9uIHNhdmVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUsIHRvZG9PYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9PYmplY3QpKTsgXG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBnZXQgYSB0b2RvIGxpc3QgXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbmZ1bmN0aW9uIGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kb1N0b3JhZ2VOYW1lKSk7IFxuICAgIHJldHVybiB0ZW1wT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGl0bGUgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG9PYmplY3QsIG5ld1RpdGxlKSB7XG4gICAgdG9kb09iamVjdC50aXRsZSA9IG5ld1RpdGxlOyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvT2JqZWN0LCBuZXdEZXNjcmlwdGlvbikge1xuICAgIHRvZG9PYmplY3QuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgXG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBkdWUgZGF0ZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld0R1ZURhdGU6IFRoZSBuZXcgZHVlIGRhdGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REdWVEYXRlKHRvZG9PYmplY3QsIG5ld0R1ZURhdGUpIHtcbiAgICB0b2RvT2JqZWN0LmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcHJpb3JpdHkgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdQcmlvcml0eTogVGhlIG5ldyBwcmlvcml0eSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFByaW9yaXR5KHRvZG9PYmplY3QsIG5ld1ByaW9yaXR5KSB7XG4gICAgdG9kb09iamVjdC5wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byBkZWxldGUgYSB0b2RvIGxpc3QgXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSkgeyBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0b2RvU3RvcmFnZU5hbWUpOyBcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgbmV3T3duZXJQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByZXZpb3VzU3RvcmFnZU5hbWUpKTsgXG4gICAgdGVtcE9iamVjdC5vd25lclByb2plY3QgPSBuZXdPd25lclByb2plY3ROYW1lOyBcbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgdXBkYXRlVG9kb0xpc3RUaXRsZSwgXG4gICAgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiwgdXBkYXRlVG9kb0xpc3REdWVEYXRlLCB1cGRhdGVUb2RvTGlzdFByaW9yaXR5LCBcbiAgICBkZWxldGVUb2RvTGlzdCwgZ2V0VG9kbywgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZX0iLCIvLyB0aGUgZnVuY3Rpb24gZm9yIHNldHRpbmcgdXAgdGhlIG1haW4gZnJhbWVzIG9mIHRoZSB1c2VyIGludGVyZmFjZS4gXG5mdW5jdGlvbiBzZXR1cE1haW5GcmFtZXMoKSB7XG4gICAgY29uc3QgdGhlV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbn0gXG5cbmV4cG9ydCB7IHNldHVwTWFpbkZyYW1lcyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgZ2V0VG9kbywgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSwgXG4gICAgZGVsZXRlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIFxuICAgIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSB9IGZyb20gXCIuL3RvZG9MaXN0TW9kdWxlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHNhdmVQcm9qZWN0LCBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzLCBhZGRUb2RvTGlzdE5hbWUsIFxuZ2V0UHJvamVjdCwgcmVtb3ZlVG9kb0xpc3ROYW1lLCBkZWxldGVQcm9qZWN0LCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMgfSBcbmZyb20gXCIuL3Byb2plY3RNb2R1bGVcIjtcblxuaW1wb3J0IHsgc2V0dXBNYWluRnJhbWVzIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZU1vZHVsZVwiO1xuXG4vLyBUaGUgZnVuY3Rpb25zIGZvciBkZWFsaW5nIHdpdGggdG9kbyBsaXN0cyBhbmQgcmVsYXRlZCBwcm9qZWN0cyBhcmUgbm93IHRvIGJlIFxuLy8gdGVzdGVkIHVzaW5nIHRoZSBjb25zb2xlLiBcblxuLy8gbG9jYWwgc3RvcmFnZSBpcyBjbGVhcmVkXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy8gdGhlIHZhcmlhYmxlIGZvciB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcyBpcyBkZWNsYXJlZFxubGV0IGV4aXN0aW5nUHJvamVjdE5hbWVzO1xuXG4vLyBDaGVjayBpZiB0aGUgb2JqZWN0IFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiBleGlzdHMgb24gdGhlIGxvY2FsIHN0b3JhZ2UuIElmIGl0IFxuLy8gZXhpc3RzLCBmZXRjaCBpdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLiBPdGhlcndpc2UsIGNyZWF0ZSBpdCBhbmQgc3RvcmUgaXQgaW4gXG4vLyB0aGUgbG9jYWwgc3RvcmFnZS4gXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpIHtcbiAgICBleGlzdGluZ1Byb2plY3ROYW1lcyA9IHtcbiAgICAgICAgcHJvamVjdE5hbWVzOiBbXSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiTm8gZXhpc3RpbmdQcm9qZWN0TmFtZXMgb2JqZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlIVwiKTsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3ROYW1lcykpO1xufSBcbmVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXMgb2JqZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlIVwiKTtcbiAgICBleGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIGNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG4gICAgY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpO1xufSBcblxuLy8gQXNzdW1lIHRoYXQgYSBuZXcgdG9kbyBsaXN0IGlzIGNyZWF0ZWQgYW5kIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlXG5sZXQgdGl0bGUgPSBcIlRoZSBib29rIHJldmlld1wiOyBcbmxldCBkZXNjcmlwdGlvbiA9IFwiSSBhbSBzdGFydGluZyBhIGJvb2sgcmV2aWV3LlwiO1xubGV0IGR1ZURhdGUgPSBcIjEwLjA0LjIwMjRcIjtcbmxldCBwcmlvcml0eSA9IFwiaGlnaFwiOyBcbmxldCBvd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjtcbi8vIHRvZG8gaXMgY3JlYXRlZFxubGV0IHRvZG8gPSBjcmVhdGVUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QpOyBcbi8vIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyXG5sZXQgc3RvcmFnZU5hbWUgPSBvd25lclByb2plY3QgKyBcIi1cIiArIHRpdGxlOyBcbmNvbnNvbGUubG9nKFwidGhlIGZpcnN0IHRvZG9cIik7XG5jb25zb2xlLmxvZyh0b2RvKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nP1xubGV0IGluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2Yob3duZXJQcm9qZWN0KTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyB0aGUgdG9kbyBpcyBzdG9yZWQgaW4gdGhlIHN0b3JhZ2VcbnNhdmVUb2RvTGlzdChzdG9yYWdlTmFtZSwgdG9kbyk7IFxuXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdFxubGV0IG93bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5vd25lclByb2plY3RPYmplY3QgPSBhZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0T2JqZWN0LCB0aXRsZSk7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcblxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lcyBhZnRlciB0aGUgcHJvamVjdCBjcmVhdGlvbjpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxubGV0IHRoZU93bmVyUHJvamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5jb25zb2xlLmxvZyhcInRoZSBvd25lciBwcm9qZWN0IG9mIHRoZSBmaXJzdCB0b2RvOlwiKTtcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gYW4gZXhpc3RpbmcgcHJvamVjdCBcbnRpdGxlID0gXCJUaGUgcmV2aWV3IGVkaXRcIjsgXG5kZXNjcmlwdGlvbiA9IFwiSSBhbSBlZGl0aW5nIHRoZSBib29rIHJldmlldy5cIjtcbmR1ZURhdGUgPSBcIjEwLjA1LjIwMjRcIjtcbnByaW9yaXR5ID0gXCJoaWdoXCI7IFxub3duZXJQcm9qZWN0ID0gXCJCb29rUmV2aWV3XCI7XG4vLyB0b2RvIGlzIGNyZWF0ZWRcbnRvZG8gPSBjcmVhdGVUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QpOyBcbi8vIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyXG5zdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgc2Vjb25kIHRvZG9cIik7XG5jb25zb2xlLmxvZyh0b2RvKTtcbi8vIHRoZSB0b2RvIGlzIHN0b3JlZCBpbiB0aGUgc3RvcmFnZVxuc2F2ZVRvZG9MaXN0KHN0b3JhZ2VOYW1lLCB0b2RvKTsgXG4vLyBpcyB0aGUgdG9kbyBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/IFxudG9kbyA9IGdldFRvZG8oc3RvcmFnZU5hbWUpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyByZWFsbHkgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlP1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTtcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7IFxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/XG5pbmRleCA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lcy5pbmRleE9mKG93bmVyUHJvamVjdCk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qob3duZXJQcm9qZWN0KTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59IFxuLy8gcmVnaXN0ZXIgdGhlIG5ldyB0b2RvIGxpc3QgdG8gdGhlIG93bmVyIHByb2plY3QgXG5vd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdE9iamVjdCwgdGl0bGUpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG5cbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbnRoZU93bmVyUHJvamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5jb25zb2xlLmxvZyhcInRoZSBvd25lciBwcm9qZWN0IG9mIHRoZSBzZWNvbmQgdG9kbzpcIik7IFxuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuY29uc3QgbmV3UHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KFwiRWRpdHNcIik7IFxuLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuc2F2ZVByb2plY3QobmV3UHJvamVjdDIpOyBcbi8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG5hZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QyKTsgXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5cbi8vIHVwZGF0ZSB0aGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIFwiVGhlIHJldmlldyBlZGl0XCIgXG5sZXQgcHJldmlvdXNPd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjsgXG5sZXQgcHJldmlvdXNTdG9yYWdlTmFtZSA9IHByZXZpb3VzT3duZXJQcm9qZWN0K1wiLVwiK1wiVGhlIHJldmlldyBlZGl0XCI7XG5sZXQgdXBkYXRlZFRvZG8gPSB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lKHByZXZpb3VzU3RvcmFnZU5hbWUsIFwiRWRpdHNcIik7IFxuZGVsZXRlVG9kb0xpc3QocHJldmlvdXNTdG9yYWdlTmFtZSk7IFxubGV0IHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChwcmV2aW91c093bmVyUHJvamVjdCk7XG5wcmV2aW91c093bmVyUHJvamVjdE9iamVjdCA9IHJlbW92ZVRvZG9MaXN0TmFtZShcbiAgICBwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCwgcHJldmlvdXNTdG9yYWdlTmFtZSk7IFxuc2F2ZVByb2plY3QocHJldmlvdXNPd25lclByb2plY3RPYmplY3QpOyBcbnNhdmVUb2RvTGlzdChcIkVkaXRzXCIrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIiwgdXBkYXRlZFRvZG8pOyBcblxuLy8gYWRkIHRoZSB0b2RvIHRvIHRoZSBjb250ZW50IG9mIHRoZSBcIkVkaXRzXCIgcHJvamVjdCBcbm93bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3QoXCJFZGl0c1wiKTsgXG5vd25lclByb2plY3RPYmplY3QgPSBhZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0T2JqZWN0LCBcIlRoZSByZXZpZXcgZWRpdFwiKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUgZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyByZWFsbHkgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlP1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG4vLyBpdCBpcyBjaGVja2VkIGlmIHRoZSB0b2RvIGlzIGFkZGVkIHRvIHRoZSBcIkVkaXRzXCIgcHJvamVjdFxudGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChcIkVkaXRzXCIpOyBcbmNvbnNvbGUubG9nKFwidGhlIHByb2plY3QgdG8gd2hpY2ggdGhlIHNlY29uZCB0b2RvIGlzIGFkZGVkOlwiKTsgXG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gdGhlIHRpdGxlIG9mIHRoZSB0b2RvIFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIgaXMgdG8gYmUgdXBkYXRlZCB0byB0aGUgbmV3IHRpdGxlIFxuLy8gXCJFZGl0cy1UaGUgcmV2aWV3IG9mIHRoZSBlZGl0XCIgXG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3RUaXRsZSh0b2RvLCBcIlRoZSByZXZpZXcgb2YgdGhlIGVkaXRcIik7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0VGl0bGUgZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyB0aXRsZSB1cGRhdGVkIHRvICdUaGUgcmV2aWV3IG9mIHRoZSBlZGl0Jz9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gaXMgdG8gYmUgdXBkYXRlZCBcbmRlc2NyaXB0aW9uID0gXCJUaGUgYm9vayByZXZpZXcgaXMgdG8gYmUgZWRpdGVkLlwiO1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gZGVzY3JpcHRpb24gdXBkYXRlZCBwcm9wZXJseT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyB0aGUgZHVlIGRhdGUgb2YgdGhlIHRvZG8gaXMgdG8gYmUgdXBkYXRlZCBcbmR1ZURhdGUgPSBcIjExLjA1LjIwMjRcIjsgXG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3REdWVEYXRlKHRvZG8sIGR1ZURhdGUpO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdER1ZURhdGUgZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBkZXNjcmlwdGlvbiB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBwcmlvcml0eSBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxucHJpb3JpdHkgPSBcInZlcnkgaGlnaFwiOyBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdFByaW9yaXR5KHRvZG8sIHByaW9yaXR5KTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHByaW9yaXR5IHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkIFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz8gXG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IFwiV3JpdGluZ3NcIjsgXG5pbmRleCA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lcy5pbmRleE9mKG5ld1Byb2plY3ROYW1lKTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSAgXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5cbi8vIGRlbGV0ZVByb2plY3QgaXMgdGVzdGVkXG5kZWxldGVQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTsgXG5jb25zb2xlLmxvZyhnZXRQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSk7IFxuXG4vLyByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMgaXMgdGVzdGVkIFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxucmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3ROYW1lKTsgXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5cbnNldHVwTWFpbkZyYW1lcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==