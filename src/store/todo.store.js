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
        new Todo('Piedra del poder'),
        new Todo('Piedra del espacio'),
    ],
    filters: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('initStore 🥑');
    console.log(state.todos)
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filters = filter;
}

const saveStateToLocaslStorege = () => {

    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {

    switch(filter) {
        case Filters.All:
            return[...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Completed:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${ filter } is not valid.`);

    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));

    saveStateToLocaslStorege();
}

const toggleTodo = (todoId) => {
    
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId ){
            todo.done = !todo.done
        }
        return todo;
    });
    saveStateToLocaslStorege();

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id != todoId)
    saveStateToLocaslStorege();

}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)
    saveStateToLocaslStorege();
}

const setFilter = (newFilter = Filters.All) => {
    state.filters = newFilter;
    saveStateToLocaslStorege();

}

const getCurrentFilter = () => {
    // object.key(filters).include
    return state.filters
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}