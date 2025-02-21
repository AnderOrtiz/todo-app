import { Todo } from "../todos/models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {uuid} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = [] ) => {

    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`Element ${ elementId} not fount`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append(createTodoHTML(todo));
    });
}