// the factory function to create a todo list. 
// storageName: The name of the object in the localStorage, set by the programmer. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user.
function createTodoList(storageName, title, description, dueDate, priority) {
    return { storageName, title, description, dueDate, priority };
}