import { renderTodos } from '../use-cases';
import html from './app.html?raw'
import todoStore from '../store/todo.store'

const elementIDs = {
    TodoList: '.todo-list',
}


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
}

    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}