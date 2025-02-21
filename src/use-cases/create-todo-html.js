import { Todo } from "../todos/models/todo.model";


export const createTodoHTML = (todo) => {
    if(!todo) throw new Error('A TODO OBJECT IS REQUIRED');

    const html = `<h1>${ todo.description }</h1>`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;

    return liElement;
}