import { Todo } from "../todos/models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

export const renderTodos = (elementId, todos = [] ) => {


    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`Element ${ elementId} not fount`)

        element.innerHTMl = '';

    todos.forEach( todo => {
        element.append(createTodoHTML(todo));
    });
}