function printTodo() {
    // the name of the project which owns the todo
    const projectName = this.parentNode.firstChild.textContent; 
    // the name of the todo
    const todoName = this.textContent; 
    // the storage name of the todo
    const todoStorageName = projectName + "-" + todoName; 
}