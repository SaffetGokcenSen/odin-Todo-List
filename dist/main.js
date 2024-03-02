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
function updateTodoListPriority(todoStorageName, newPriority) {
    const tempObject = getTodo(todoStorageName);
    tempObject.priority = newPriority; 
    return todoObject;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBFQUF5QjtBQUMzQywrREFBYztBQUNkLGlDQUFpQywwREFBVTtBQUMzQyw2QkFBNkIsa0VBQWtCO0FBQy9DO0FBQ0EsMkRBQVc7QUFDWCw2REFBWTs7QUFFWjtBQUNBLHFCQUFxQiwwREFBVTtBQUMvQixxQkFBcUIsK0RBQWU7QUFDcEMsMkRBQVc7QUFDWDtBQUNBLE9BQU8sd0RBQU87QUFDZDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sb0VBQW1CO0FBQzFCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sMEVBQXlCO0FBQ2hDLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sc0VBQXFCO0FBQzVCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBvYmplY3QuIFxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJvamVjdENvbnRlbnQ6IFRoZSB0b2RvIGxpc3RzIGNvbnRhaW5lZCBieSB0aGUgcHJvamVjdC5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCBpcyBpbml0aWFsbHkgbm90aGluZy4gXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBbXTtcbiAgICByZXR1cm4geyBwcm9qZWN0T2JqZWN0TmFtZSwgcHJvamVjdENvbnRlbnQgfTtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gZ2V0IGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RPYmplY3ROYW1lKSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMucHVzaCh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgcHJvamVjdCBvYmplY3QgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0aGVQcm9qZWN0T2JqZWN0KSk7IFxufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IGFkZGluZyBhIG5ldyB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIGFkZGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGFkZFRvZG9MaXN0TmFtZShwcm9qZWN0T2JqZWN0TmFtZSwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0IHVwZGF0ZWQgYnkgYWRkaW5nIHRoZSB0b2RvIGxpc3QuXG4gICAgcHJvamVjdE9iamVjdE5hbWUucHJvamVjdENvbnRlbnQucHVzaCh0b2RvTGlzdE5hbWUpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdE5hbWU7XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgYnkgcmVtb3ZpbmcgYSB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiByZW1vdmVUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdCwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgdG9kbyBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5pbmRleE9mKHRvZG9MaXN0TmFtZSk7IFxuICAgIC8vIHRoZSB0b2RvIGlzIHJlbW92ZWRcbiAgICBwcm9qZWN0T2JqZWN0LnByb2plY3RDb250ZW50LnNwbGljZShpbmRleCwgMSk7IFxuICAgIHJldHVybiBwcm9qZWN0T2JqZWN0O1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgLy8gdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IG5hbWUgaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHRlbXBPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgLy8gdGhlIHByb2plY3QgbmFtZSBpcyByZW1vdmVkXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RPYmplY3ROYW1lKTsgXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMsIHNhdmVQcm9qZWN0LCBcbiAgICBhZGRUb2RvTGlzdE5hbWUsIHJlbW92ZVRvZG9MaXN0TmFtZSwgcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzLCBcbiAgICBkZWxldGVQcm9qZWN0IH07IiwiLy8gdGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9kbyBsaXN0LiBcbi8vIHRpdGxlOiBUaGUgdGl0bGUgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci5cbi8vIGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBkdWVEYXRlOiBUaGUgZHVlIGRhdGUgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBwcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gb3duZXJQcm9qZWN0OiBUaGUgcHJvamVjdCB3aGljaCBvd25zIHRoZSB0b2RvIGxpc3QuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBvd25lclByb2plY3QgfTtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHNhdmUgYSB0b2RvIGxpc3QgaW4gYSBwcm9qZWN0LiBcbi8vIHRoZVRvZG9PYmplY3Q6IFRoZSB0b2RvIG9iamVjdCB0byBiZSBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyBUaGUgbmFtZSBvZiB0aGUgdG9kbyBpbiB0aGUgbG9jYWwgc3RvcmFnZSwgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lci4gXG4vLyB0aGVQcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QgdGhlIGNvbnRlbnQgb2Ygd2hpY2ggaXMgdG8gYmUgdXBkYXRlZCBcbi8vIGJ5IGFkZGluZyB0aGUgbmV3IHRvZG8gbGlzdC5cbmZ1bmN0aW9uIHNhdmVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUsIHRvZG9PYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9PYmplY3QpKTsgXG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBnZXQgYSB0b2RvIGxpc3QgXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbmZ1bmN0aW9uIGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kb1N0b3JhZ2VOYW1lKSk7IFxuICAgIHJldHVybiB0ZW1wT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGl0bGUgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG9PYmplY3QsIG5ld1RpdGxlKSB7XG4gICAgdG9kb09iamVjdC50aXRsZSA9IG5ld1RpdGxlOyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvT2JqZWN0LCBuZXdEZXNjcmlwdGlvbikge1xuICAgIHRvZG9PYmplY3QuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgXG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBkdWUgZGF0ZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld0R1ZURhdGU6IFRoZSBuZXcgZHVlIGRhdGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REdWVEYXRlKHRvZG9PYmplY3QsIG5ld0R1ZURhdGUpIHtcbiAgICB0b2RvT2JqZWN0LmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcHJpb3JpdHkgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdQcmlvcml0eTogVGhlIG5ldyBwcmlvcml0eSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFByaW9yaXR5KHRvZG9TdG9yYWdlTmFtZSwgbmV3UHJpb3JpdHkpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIHRlbXBPYmplY3QucHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgXG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG4gICAgc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdGVtcE9iamVjdCk7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZGVsZXRlIGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBkZWxldGVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUpIHsgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kb1N0b3JhZ2VOYW1lKTsgXG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lKHByZXZpb3VzU3RvcmFnZU5hbWUsIG5ld093bmVyUHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcmV2aW91c1N0b3JhZ2VOYW1lKSk7IFxuICAgIHRlbXBPYmplY3Qub3duZXJQcm9qZWN0ID0gbmV3T3duZXJQcm9qZWN0TmFtZTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIFxuICAgIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSwgXG4gICAgZGVsZXRlVG9kb0xpc3QsIGdldFRvZG8sIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvTGlzdCwgc2F2ZVRvZG9MaXN0LCBnZXRUb2RvLCB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lLCBcbiAgICBkZWxldGVUb2RvTGlzdCwgdXBkYXRlVG9kb0xpc3RUaXRsZSwgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiwgXG4gICAgdXBkYXRlVG9kb0xpc3REdWVEYXRlIH0gZnJvbSBcIi4vdG9kb0xpc3RNb2R1bGVcIjsgXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBzYXZlUHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgYWRkVG9kb0xpc3ROYW1lLCBcbmdldFByb2plY3QsIHJlbW92ZVRvZG9MaXN0TmFtZSB9IGZyb20gXCIuL3Byb2plY3RNb2R1bGVcIjtcbi8vIFRoZSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCB0b2RvIGxpc3RzIGFuZCByZWxhdGVkIHByb2plY3RzIGFyZSBub3cgdG8gYmUgXG4vLyB0ZXN0ZWQgdXNpbmcgdGhlIGNvbnNvbGUuIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGlzIGNsZWFyZWRcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyB0aGUgdmFyaWFibGUgZm9yIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGRlY2xhcmVkXG5sZXQgZXhpc3RpbmdQcm9qZWN0TmFtZXM7XG5cbi8vIENoZWNrIGlmIHRoZSBvYmplY3QgXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiIGV4aXN0cyBvbiB0aGUgbG9jYWwgc3RvcmFnZS4gSWYgaXQgXG4vLyBleGlzdHMsIGZldGNoIGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIE90aGVyd2lzZSwgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBcbi8vIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSkge1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0ge1xuICAgICAgICBwcm9qZWN0TmFtZXM6IFtdLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJObyBleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdE5hbWVzKSk7XG59IFxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpO1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgZmlyc3QgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7IFxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/XG5sZXQgaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHRoZSB0b2RvIGlzIHN0b3JlZCBpbiB0aGUgc3RvcmFnZVxuc2F2ZVRvZG9MaXN0KHN0b3JhZ2VOYW1lLCB0b2RvKTsgXG5cbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0XG5sZXQgb3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIHRpdGxlKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzIGFmdGVyIHRoZSBwcm9qZWN0IGNyZWF0aW9uOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5sZXQgdGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIGZpcnN0IHRvZG86XCIpO1xuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiBhbiBleGlzdGluZyBwcm9qZWN0IFxudGl0bGUgPSBcIlRoZSByZXZpZXcgZWRpdFwiOyBcbmRlc2NyaXB0aW9uID0gXCJJIGFtIGVkaXRpbmcgdGhlIGJvb2sgcmV2aWV3LlwiO1xuZHVlRGF0ZSA9IFwiMTAuMDUuMjAyNFwiO1xucHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5vd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjtcbi8vIHRvZG8gaXMgY3JlYXRlZFxudG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbnN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBzZWNvbmQgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pO1xuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcbi8vIGlzIHRoZSB0b2RvIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT8gXG50b2RvID0gZ2V0VG9kbyhzdG9yYWdlTmFtZSk7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pO1xuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2Yob3duZXJQcm9qZWN0KTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdCBcbm93bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5vd25lclByb2plY3RPYmplY3QgPSBhZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0T2JqZWN0LCB0aXRsZSk7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcblxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxudGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIHNlY29uZCB0b2RvOlwiKTsgXG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBuZXdQcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJFZGl0c1wiKTsgXG4vLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG5zYXZlUHJvamVjdChuZXdQcm9qZWN0Mik7IFxuLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbmFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdDIpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXCJUaGUgcmV2aWV3IGVkaXRcIiBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiOyBcbmxldCBwcmV2aW91c1N0b3JhZ2VOYW1lID0gcHJldmlvdXNPd25lclByb2plY3QrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIjtcbmxldCB1cGRhdGVkVG9kbyA9IHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgXCJFZGl0c1wiKTsgXG5kZWxldGVUb2RvTGlzdChwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5sZXQgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0KTtcbnByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0ID0gcmVtb3ZlVG9kb0xpc3ROYW1lKFxuICAgIHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0LCBwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5zYXZlUHJvamVjdChwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCk7IFxuc2F2ZVRvZG9MaXN0KFwiRWRpdHNcIitcIi1cIitcIlRoZSByZXZpZXcgZWRpdFwiLCB1cGRhdGVkVG9kbyk7IFxuXG4vLyBhZGQgdGhlIHRvZG8gdG8gdGhlIGNvbnRlbnQgb2YgdGhlIFwiRWRpdHNcIiBwcm9qZWN0IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChcIkVkaXRzXCIpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIFwiVGhlIHJldmlldyBlZGl0XCIpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcbi8vIGl0IGlzIGNoZWNrZWQgaWYgdGhlIHRvZG8gaXMgYWRkZWQgdG8gdGhlIFwiRWRpdHNcIiBwcm9qZWN0XG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KFwiRWRpdHNcIik7IFxuY29uc29sZS5sb2coXCJ0aGUgcHJvamVjdCB0byB3aGljaCB0aGUgc2Vjb25kIHRvZG8gaXMgYWRkZWQ6XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyB0aGUgdGl0bGUgb2YgdGhlIHRvZG8gXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiBpcyB0byBiZSB1cGRhdGVkIHRvIHRoZSBuZXcgdGl0bGUgXG4vLyBcIkVkaXRzLVRoZSByZXZpZXcgb2YgdGhlIGVkaXRcIiBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG8sIFwiVGhlIHJldmlldyBvZiB0aGUgZWRpdFwiKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RUaXRsZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHRpdGxlIHVwZGF0ZWQgdG8gJ1RoZSByZXZpZXcgb2YgdGhlIGVkaXQnP1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZGVzY3JpcHRpb24gPSBcIlRoZSBib29rIHJldmlldyBpcyB0byBiZSBlZGl0ZWQuXCI7XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvLCBkZXNjcmlwdGlvbik7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24gZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBkZXNjcmlwdGlvbiB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZHVlRGF0ZSA9IFwiMTEuMDUuMjAyNFwiOyBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kbywgZHVlRGF0ZSk7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIGRlc2NyaXB0aW9uIHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=