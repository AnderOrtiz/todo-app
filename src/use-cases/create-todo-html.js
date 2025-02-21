import { Todo } from "../todos/models/todo.model";


export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A TODO OBJECT IS REQUIRED');

    const html = `
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
                <label>${ todo.description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);

    (todo.done) ? liElement.classList.add('completed'): '';

    return liElement;
}