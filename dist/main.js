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
console.log("the todo");
console.log(todo)
// the todo is stored in the storage
;(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(todo, storageName, ownerProject); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
const index = existingProjectNames.projectNames.indexOf(ownerProject); 
console.log("index");
console.log(index);
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
console.log(existingProjectNames); 
const theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log(theOwnerProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFrQjtBQUN0Qjs7Ozs7Ozs7VUM3RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7QUFFN0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrREFBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx1QkFBdUIsNkRBQWE7QUFDcEM7QUFDQSxJQUFJLDJEQUFXO0FBQ2Y7QUFDQSxJQUFJLHlFQUF5QjtBQUM3QjtBQUNBO0FBQ0EsK0RBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFVO0FBQ2xDLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvTGlzdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm9qZWN0IG9iamVjdC4gXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBwcm9qZWN0Q29udGVudDogVGhlIHRvZG8gbGlzdHMgY29udGFpbmVkIGJ5IHRoZSBwcm9qZWN0LlxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0IGlzIGluaXRpYWxseSBub3RoaW5nLiBcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IFtdO1xuICAgIHJldHVybiB7IHByb2plY3RPYmplY3ROYW1lLCBwcm9qZWN0Q29udGVudCB9O1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byBnZXQgYSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2Vcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE9iamVjdE5hbWUpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXModGhlUHJvamVjdE9iamVjdCkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICB0ZW1wT2JqZWN0LnByb2plY3ROYW1lcy5wdXNoKHRoZVByb2plY3RPYmplY3QucHJvamVjdE9iamVjdE5hbWUpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KHRlbXBPYmplY3QpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gc2F2ZVByb2plY3QodGhlUHJvamVjdE9iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoZVByb2plY3RPYmplY3QucHJvamVjdE9iamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoZVByb2plY3RPYmplY3QpKTsgXG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgYnkgYWRkaW5nIGEgbmV3IHRvZG8gbGlzdC5cbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG4vLyB0b2RvTGlzdE5hbWU6IFRoZSB0b2RvIGxpc3QgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gYWRkVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3ROYW1lLCB0b2RvTGlzdE5hbWUpIHsgXG4gICAgLy8gdGhlIHByb2plY3Qgb2JqZWN0IG9idGFpbmVkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFByb2plY3QocHJvamVjdE9iamVjdE5hbWUpO1xuICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0IHVwZGF0ZWQgYnkgYWRkaW5nIHRoZSB0b2RvIGxpc3QuXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0Q29udGVudC5wdXNoKHRvZG9MaXN0TmFtZSk7IFxuICAgIHNhdmVQcm9qZWN0KHRlbXBPYmplY3QpOyBcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSByZW1vdmluZyBhIHRvZG8gbGlzdC5cbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG4vLyB0b2RvTGlzdE5hbWU6IFRoZSB0b2RvIGxpc3QgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIHJlbW92ZVRvZG9MaXN0TmFtZShwcm9qZWN0T2JqZWN0TmFtZSwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG9iamVjdCBvYnRhaW5lZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBnZXRQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgLy8gdGhlIGluZGV4IG9mIHRoZSB0b2RvIGlzIGZvdW5kXG4gICAgY29uc3QgaW5kZXggPSB0ZW1wT2JqZWN0LnByb2plY3RDb250ZW50LmluZGV4T2YodG9kb0xpc3ROYW1lKTsgXG4gICAgLy8gdGhlIHRvZG8gaXMgcmVtb3ZlZFxuICAgIHRlbXBPYmplY3QucHJvamVjdENvbnRlbnQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzYXZlUHJvamVjdCh0ZW1wT2JqZWN0KTsgXG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIHByb2plY3QgbmFtZSBmcm9tIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXModGhlUHJvamVjdE9iamVjdCkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgbmFtZSBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcE9iamVjdC5wcm9qZWN0Q29udGVudC5pbmRleE9mKHRoZVByb2plY3RPYmplY3QucHJvamVjdE9iamVjdE5hbWUpOyBcbiAgICAvLyB0aGUgcHJvamVjdCBuYW1lIGlzIHJlbW92ZWRcbiAgICB0ZW1wT2JqZWN0LnByb2plY3RDb250ZW50LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE9iamVjdE5hbWUpOyBcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgc2F2ZVByb2plY3QsIFxuICAgIGFkZFRvZG9MaXN0TmFtZSwgcmVtb3ZlVG9kb0xpc3ROYW1lLCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMsIFxuICAgIGRlbGV0ZVByb2plY3QgfTsiLCJpbXBvcnQgeyByZW1vdmVUb2RvTGlzdE5hbWUgfSBmcm9tIFwiLi9wcm9qZWN0TW9kdWxlLmpzXCI7XG5cbi8vIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHRvZG8gbGlzdC4gXG4vLyB0aXRsZTogVGhlIHRpdGxlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuXG4vLyBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gZHVlRGF0ZTogVGhlIGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIG93bmVyUHJvamVjdDogVGhlIHByb2plY3Qgd2hpY2ggb3ducyB0aGUgdG9kbyBsaXN0LlxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0IH07XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBwdXQgYSB0b2RvIHRvIHRoZSBsb2NhbCBzdG9yYWdlLlxuZnVuY3Rpb24gcHV0VG9kbyh0b2RvU3RvcmFnZU5hbWUsIHRvZG9PYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9PYmplY3QpKTsgXG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBzYXZlIGEgdG9kbyBsaXN0IGluIGEgcHJvamVjdC4gXG4vLyB0aGVUb2RvT2JqZWN0OiBUaGUgdG9kbyBvYmplY3QgdG8gYmUgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gVGhlIG5hbWUgb2YgdGhlIHRvZG8gaW4gdGhlIGxvY2FsIHN0b3JhZ2UsIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXIuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IHRoZSBjb250ZW50IG9mIHdoaWNoIGlzIHRvIGJlIHVwZGF0ZWQgXG4vLyBieSBhZGRpbmcgdGhlIG5ldyB0b2RvIGxpc3QuXG5mdW5jdGlvbiBzYXZlVG9kb0xpc3QodGhlVG9kb09iamVjdCwgc3RvcmFnZU5hbWUsIHRoZVByb2plY3ROYW1lKSB7XG4gICAgcHV0VG9kbyhzdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhlVG9kb09iamVjdCkpO1xuICAgIC8vIGFkZFRvZG9MaXN0TmFtZSh0aGVQcm9qZWN0TmFtZSwgc3RvcmFnZU5hbWUpO1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZ2V0IGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSkpOyBcbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGl0bGUgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG9TdG9yYWdlTmFtZSwgbmV3VGl0bGUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIHRlbXBPYmplY3QudGl0bGUgPSBuZXdUaXRsZTsgXG4gICAgcHV0VG9kbyh0b2RvU3RvcmFnZU5hbWUsIHRlbXBPYmplY3QpO1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG9TdG9yYWdlTmFtZSwgbmV3RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIHRlbXBPYmplY3QuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgXG4gICAgcHV0VG9kbyh0b2RvU3RvcmFnZU5hbWUsIHRlbXBPYmplY3QpO1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZHVlIGRhdGUgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdEdWVEYXRlOiBUaGUgbmV3IGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSh0b2RvU3RvcmFnZU5hbWUsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIHRlbXBPYmplY3QuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IFxuICAgIHB1dFRvZG8odG9kb1N0b3JhZ2VOYW1lLCB0ZW1wT2JqZWN0KTtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHByaW9yaXR5IG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3UHJpb3JpdHk6IFRoZSBuZXcgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RQcmlvcml0eSh0b2RvU3RvcmFnZU5hbWUsIG5ld1ByaW9yaXR5KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTtcbiAgICB0ZW1wT2JqZWN0LnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IFxuICAgIHB1dFRvZG8odG9kb1N0b3JhZ2VOYW1lLCB0ZW1wT2JqZWN0KTtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byBkZWxldGUgYSB0b2RvIGxpc3QgXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSkgeyBcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpO1xuICAgIGNvbnN0IG93bmVyUHJvamVjdCA9IHRlbXBPYmplY3Qub3duZXJQcm9qZWN0OyBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0b2RvU3RvcmFnZU5hbWUpOyBcbiAgICByZW1vdmVUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0LCB0b2RvU3RvcmFnZU5hbWUpO1xufSBcblxuZXhwb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgdXBkYXRlVG9kb0xpc3RUaXRsZSwgXG4gICAgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiwgdXBkYXRlVG9kb0xpc3REdWVEYXRlLCB1cGRhdGVUb2RvTGlzdFByaW9yaXR5LCBcbiAgICBkZWxldGVUb2RvTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdE1vZHVsZVwiOyBcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHNhdmVQcm9qZWN0LCBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzLCBhZGRUb2RvTGlzdE5hbWUsIFxuZ2V0UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZVwiO1xuLy8gVGhlIGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoIHRvZG8gbGlzdHMgYW5kIHJlbGF0ZWQgcHJvamVjdHMgYXJlIG5vdyB0byBiZSBcbi8vIHRlc3RlZCB1c2luZyB0aGUgY29uc29sZS4gXG5cbi8vIGxvY2FsIHN0b3JhZ2UgaXMgY2xlYXJlZFxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIHRoZSB2YXJpYWJsZSBmb3IgdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMgaXMgZGVjbGFyZWRcbmxldCBleGlzdGluZ1Byb2plY3ROYW1lcztcblxuLy8gQ2hlY2sgaWYgdGhlIG9iamVjdCBcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIgZXhpc3RzIG9uIHRoZSBsb2NhbCBzdG9yYWdlLiBJZiBpdCBcbi8vIGV4aXN0cywgZmV0Y2ggaXQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gT3RoZXJ3aXNlLCBjcmVhdGUgaXQgYW5kIHN0b3JlIGl0IGluIFxuLy8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKSB7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSB7XG4gICAgICAgIHByb2plY3ROYW1lczogW10sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIk5vIGV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdQcm9qZWN0TmFtZXMpKTtcbn0gXG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pXG4vLyB0aGUgdG9kbyBpcyBzdG9yZWQgaW4gdGhlIHN0b3JhZ2VcbnNhdmVUb2RvTGlzdCh0b2RvLCBzdG9yYWdlTmFtZSwgb3duZXJQcm9qZWN0KTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nP1xuY29uc3QgaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwiaW5kZXhcIik7XG5jb25zb2xlLmxvZyhpbmRleCk7XG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdFxuYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdCwgc3RvcmFnZU5hbWUpO1xuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5jb25zdCB0aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=