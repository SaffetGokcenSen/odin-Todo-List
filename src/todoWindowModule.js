import { getTodo } from "./todoListModule";

function printTodo() {
    // the name of the project which owns the todo
    const projectName = this.parentNode.parentNode.firstChild.textContent; 
    // the name of the todo
    const todoName = this.textContent; 
    // the storage name of the todo
    const todoStorageName = projectName + "-" + todoName; 
    const todoObject = getTodo(todoStorageName); 
    this.addEventListener("click", printTodo, {once: true}); 
    console.log(todoObject); 
    // access to the todos window div
    const todosWindow = document.getElementsByClassName("todosWindow")[0];
    // create the input element for the todo title
    const titleInput = document.createElement("input");
} 

export { printTodo };