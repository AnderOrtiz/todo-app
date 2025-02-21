import { Todo } from "../todos/models/todo.model";
import { createTodoHTML } from "./create-todo-html";

export const renderTodos = (elementId, todos = [] ) => {
    
    //TODO: referencia 
    const element = document.querySelector(elementId);
    todos.forEach( todo => {
        element.append(createTodoHTML(todo))
    });
}