import { renderTodos } from '../use-cases';
import html from './app.html?raw'
import todoStore from '../store/todo.store'

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
}

    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();

    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList)

    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0 ) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) => {
        const element =  event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    // todoListUl.addEventListener('click', (event) => {
    //     const element =  event.target.closest('[data-id]');
    //     todoStore.toggleTodo(element.getAttribute('data-id'));
    //     displayTodos();
    // })

}