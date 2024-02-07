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
function removeTodoListName(projectObjectName, todoListName) { 
    // the project object obtained from the local storage.
    const tempObject = getProject(projectObjectName); 
    // the index of the todo is found
    const index = tempObject.projectContent.indexOf(todoListName); 
    // the todo is removed
    tempObject.projectContent.splice(index, 1);
    saveProject(tempObject); 
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
/* harmony export */   saveTodoList: () => (/* binding */ saveTodoList),
/* harmony export */   updateTodoListDescription: () => (/* binding */ updateTodoListDescription),
/* harmony export */   updateTodoListDueDate: () => (/* binding */ updateTodoListDueDate),
/* harmony export */   updateTodoListPriority: () => (/* binding */ updateTodoListPriority),
/* harmony export */   updateTodoListTitle: () => (/* binding */ updateTodoListTitle)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");


// the factory function to create a todo list. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user. 
// ownerProject: The project which owns the todo list.
function createTodoList(title, description, dueDate, priority, ownerProject) {
    return { title, description, dueDate, priority, ownerProject };
}

// the function to put a todo to the local storage.
function putTodo(todoStorageName, todoObject) {
    localStorage.setItem(todoStorageName, JSON.stringify(todoObject)); 
}

// the function to save a todo list in a project. 
// theTodoObject: The todo object to be saved in the local storage. 
// The name of the todo in the local storage, determined by the programmer. 
// theProjectName: The name of the project the content of which is to be updated 
// by adding the new todo list.
function saveTodoList(theTodoObject, storageName, theProjectName) {
    putTodo(storageName, JSON.stringify(theTodoObject));
    // addTodoListName(theProjectName, storageName);
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
    putTodo(todoStorageName, tempObject);
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoStorageName, newDescription) {
    const tempObject = getTodo(todoStorageName);
    tempObject.description = newDescription; 
    putTodo(todoStorageName, tempObject);
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoStorageName, newDueDate) {
    const tempObject = getTodo(todoStorageName);
    tempObject.dueDate = newDueDate; 
    putTodo(todoStorageName, tempObject);
} 

// the function to update the priority of a todo list. 
// todoStorageName: The storage name of the todo list 
// newPriority: The new priority of the todo list
function updateTodoListPriority(todoStorageName, newPriority) {
    const tempObject = getTodo(todoStorageName);
    tempObject.priority = newPriority; 
    putTodo(todoStorageName, tempObject);
} 

// the function to delete a todo list 
// todoStorageName: The storage name of the todo list 
function deleteTodoList(todoStorageName) { 
    const tempObject = getTodo(todoStorageName);
    const ownerProject = tempObject.ownerProject; 
    localStorage.removeItem(todoStorageName); 
    (0,_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.removeTodoListName)(ownerProject, todoStorageName);
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
// the todo is stored in the storage
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(todo, storageName, ownerProject); 
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
// register the new todo list to the owner project
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProject, storageName); 

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
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(todo, storageName, ownerProject); 
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
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProject, storageName); 

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log("the owner project of the second todo:"); 
console.log(theOwnerProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFrQjtBQUN0Qjs7Ozs7Ozs7VUM3RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7QUFFN0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtEQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsdUJBQXVCLDZEQUFhO0FBQ3BDO0FBQ0EsSUFBSSwyREFBVztBQUNmO0FBQ0EsSUFBSSx5RUFBeUI7QUFDN0I7QUFDQTtBQUNBLCtEQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBVTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrREFBYztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1Qiw2REFBYTtBQUNwQztBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLElBQUkseUVBQXlCO0FBQzdCO0FBQ0E7QUFDQSwrREFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVU7QUFDNUI7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBvYmplY3QuIFxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJvamVjdENvbnRlbnQ6IFRoZSB0b2RvIGxpc3RzIGNvbnRhaW5lZCBieSB0aGUgcHJvamVjdC5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCBpcyBpbml0aWFsbHkgbm90aGluZy4gXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBbXTtcbiAgICByZXR1cm4geyBwcm9qZWN0T2JqZWN0TmFtZSwgcHJvamVjdENvbnRlbnQgfTtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gZ2V0IGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RPYmplY3ROYW1lKSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMucHVzaCh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgcHJvamVjdCBvYmplY3QgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0aGVQcm9qZWN0T2JqZWN0KSk7IFxufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IGFkZGluZyBhIG5ldyB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIGFkZGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGFkZFRvZG9MaXN0TmFtZShwcm9qZWN0T2JqZWN0TmFtZSwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG9iamVjdCBvYnRhaW5lZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBnZXRQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKTtcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCB1cGRhdGVkIGJ5IGFkZGluZyB0aGUgdG9kbyBsaXN0LlxuICAgIHRlbXBPYmplY3QucHJvamVjdENvbnRlbnQucHVzaCh0b2RvTGlzdE5hbWUpOyBcbiAgICBzYXZlUHJvamVjdCh0ZW1wT2JqZWN0KTsgXG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgYnkgcmVtb3ZpbmcgYSB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiByZW1vdmVUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdE5hbWUsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgcHJvamVjdCBvYmplY3Qgb2J0YWluZWQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgdG9kbyBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcE9iamVjdC5wcm9qZWN0Q29udGVudC5pbmRleE9mKHRvZG9MaXN0TmFtZSk7IFxuICAgIC8vIHRoZSB0b2RvIGlzIHJlbW92ZWRcbiAgICB0ZW1wT2JqZWN0LnByb2plY3RDb250ZW50LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2F2ZVByb2plY3QodGVtcE9iamVjdCk7IFxufSBcblxuLy8gQSBmdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgLy8gdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IG5hbWUgaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHRlbXBPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgLy8gdGhlIHByb2plY3QgbmFtZSBpcyByZW1vdmVkXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RPYmplY3ROYW1lKTsgXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMsIHNhdmVQcm9qZWN0LCBcbiAgICBhZGRUb2RvTGlzdE5hbWUsIHJlbW92ZVRvZG9MaXN0TmFtZSwgcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzLCBcbiAgICBkZWxldGVQcm9qZWN0IH07IiwiaW1wb3J0IHsgcmVtb3ZlVG9kb0xpc3ROYW1lIH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuXG4vLyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSB0b2RvIGxpc3QuIFxuLy8gdGl0bGU6IFRoZSB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuLy8gZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIGR1ZURhdGU6IFRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBvd25lclByb2plY3Q6IFRoZSBwcm9qZWN0IHdoaWNoIG93bnMgdGhlIHRvZG8gbGlzdC5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCB9O1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gcHV0IGEgdG9kbyB0byB0aGUgbG9jYWwgc3RvcmFnZS5cbmZ1bmN0aW9uIHB1dFRvZG8odG9kb1N0b3JhZ2VOYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb1N0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KSk7IFxufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gc2F2ZSBhIHRvZG8gbGlzdCBpbiBhIHByb2plY3QuIFxuLy8gdGhlVG9kb09iamVjdDogVGhlIHRvZG8gb2JqZWN0IHRvIGJlIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIFRoZSBuYW1lIG9mIHRoZSB0b2RvIGluIHRoZSBsb2NhbCBzdG9yYWdlLCBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyLiBcbi8vIHRoZVByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCB0aGUgY29udGVudCBvZiB3aGljaCBpcyB0byBiZSB1cGRhdGVkIFxuLy8gYnkgYWRkaW5nIHRoZSBuZXcgdG9kbyBsaXN0LlxuZnVuY3Rpb24gc2F2ZVRvZG9MaXN0KHRoZVRvZG9PYmplY3QsIHN0b3JhZ2VOYW1lLCB0aGVQcm9qZWN0TmFtZSkge1xuICAgIHB1dFRvZG8oc3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KHRoZVRvZG9PYmplY3QpKTtcbiAgICAvLyBhZGRUb2RvTGlzdE5hbWUodGhlUHJvamVjdE5hbWUsIHN0b3JhZ2VOYW1lKTtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGdldCBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUpKTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRpdGxlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgdGl0bGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RUaXRsZSh0b2RvU3RvcmFnZU5hbWUsIG5ld1RpdGxlKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICB0ZW1wT2JqZWN0LnRpdGxlID0gbmV3VGl0bGU7IFxuICAgIHB1dFRvZG8odG9kb1N0b3JhZ2VOYW1lLCB0ZW1wT2JqZWN0KTtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvU3RvcmFnZU5hbWUsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICB0ZW1wT2JqZWN0LmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247IFxuICAgIHB1dFRvZG8odG9kb1N0b3JhZ2VOYW1lLCB0ZW1wT2JqZWN0KTtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGR1ZSBkYXRlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3RHVlRGF0ZTogVGhlIG5ldyBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kb1N0b3JhZ2VOYW1lLCBuZXdEdWVEYXRlKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICB0ZW1wT2JqZWN0LmR1ZURhdGUgPSBuZXdEdWVEYXRlOyBcbiAgICBwdXRUb2RvKHRvZG9TdG9yYWdlTmFtZSwgdGVtcE9iamVjdCk7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmlvcml0eSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1ByaW9yaXR5OiBUaGUgbmV3IHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kb1N0b3JhZ2VOYW1lLCBuZXdQcmlvcml0eSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSk7XG4gICAgdGVtcE9iamVjdC5wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICBwdXRUb2RvKHRvZG9TdG9yYWdlTmFtZSwgdGVtcE9iamVjdCk7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZGVsZXRlIGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBkZWxldGVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUpIHsgXG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICBjb25zdCBvd25lclByb2plY3QgPSB0ZW1wT2JqZWN0Lm93bmVyUHJvamVjdDsgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kb1N0b3JhZ2VOYW1lKTsgXG4gICAgcmVtb3ZlVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdCwgdG9kb1N0b3JhZ2VOYW1lKTtcbn0gXG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIFxuICAgIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSwgXG4gICAgZGVsZXRlVG9kb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvTGlzdCwgc2F2ZVRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RNb2R1bGVcIjsgXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBzYXZlUHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgYWRkVG9kb0xpc3ROYW1lLCBcbmdldFByb2plY3R9IGZyb20gXCIuL3Byb2plY3RNb2R1bGVcIjtcbi8vIFRoZSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCB0b2RvIGxpc3RzIGFuZCByZWxhdGVkIHByb2plY3RzIGFyZSBub3cgdG8gYmUgXG4vLyB0ZXN0ZWQgdXNpbmcgdGhlIGNvbnNvbGUuIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGlzIGNsZWFyZWRcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyB0aGUgdmFyaWFibGUgZm9yIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGRlY2xhcmVkXG5sZXQgZXhpc3RpbmdQcm9qZWN0TmFtZXM7XG5cbi8vIENoZWNrIGlmIHRoZSBvYmplY3QgXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiIGV4aXN0cyBvbiB0aGUgbG9jYWwgc3RvcmFnZS4gSWYgaXQgXG4vLyBleGlzdHMsIGZldGNoIGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIE90aGVyd2lzZSwgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBcbi8vIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSkge1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0ge1xuICAgICAgICBwcm9qZWN0TmFtZXM6IFtdLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJObyBleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdE5hbWVzKSk7XG59IFxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpO1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgZmlyc3QgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pO1xuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3QodG9kbywgc3RvcmFnZU5hbWUsIG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmxldCBpbmRleCA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lcy5pbmRleE9mKG93bmVyUHJvamVjdCk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qob3duZXJQcm9qZWN0KTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59IFxuLy8gcmVnaXN0ZXIgdGhlIG5ldyB0b2RvIGxpc3QgdG8gdGhlIG93bmVyIHByb2plY3RcbmFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3QsIHN0b3JhZ2VOYW1lKTsgXG5cbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXMgYWZ0ZXIgdGhlIHByb2plY3QgY3JlYXRpb246XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbmxldCB0aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgZmlyc3QgdG9kbzpcIik7XG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gQXNzdW1lIHRoYXQgYSBuZXcgdG9kbyBsaXN0IGlzIGNyZWF0ZWQgYW5kIHNhdmVkIGluIGFuIGV4aXN0aW5nIHByb2plY3QgXG50aXRsZSA9IFwiVGhlIHJldmlldyBlZGl0XCI7IFxuZGVzY3JpcHRpb24gPSBcIkkgYW0gZWRpdGluZyB0aGUgYm9vayByZXZpZXcuXCI7XG5kdWVEYXRlID0gXCIxMC4wNS4yMDI0XCI7XG5wcmlvcml0eSA9IFwiaGlnaFwiOyBcbm93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG50b2RvID0gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KTsgXG4vLyBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gaXMgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lclxuc3RvcmFnZU5hbWUgPSBvd25lclByb2plY3QgKyBcIi1cIiArIHRpdGxlOyBcbmNvbnNvbGUubG9nKFwidGhlIHNlY29uZCB0b2RvXCIpO1xuY29uc29sZS5sb2codG9kbyk7XG4vLyB0aGUgdG9kbyBpcyBzdG9yZWQgaW4gdGhlIHN0b3JhZ2VcbnNhdmVUb2RvTGlzdCh0b2RvLCBzdG9yYWdlTmFtZSwgb3duZXJQcm9qZWN0KTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nP1xuaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0XG5hZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0LCBzdG9yYWdlTmFtZSk7IFxuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgc2Vjb25kIHRvZG86XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9