import { Todo } from "../todos/models/todo.model"

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filters: Filters
}

const initStore = () => {
    console.log({state});
    console.log('initStore 🥑');
}

const loadStore = () => {
    throw new Error('not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('not implemented');
}

const toggleTodo = (todoId) => {
    throw new Error('not implemented');
}

const deleteTodo = (todoId) => {
    throw new Error('not implemented');
}

const deleteCompleted = () => {
    throw new Error('not implemented');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('not implemented');
}

const getCurrentFilter = () => {
    throw new Error('not implemented');
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}