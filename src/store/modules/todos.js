import axios from "axios";

const state = {
    todos: [
    ],
    todo: ''
}
const getters = {
    allTodos: (state) => state.todos,
    currentTodo: (state) => state.todo
}
const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },
    async fetchTodoDetail({commit}, id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('setTodo', response.data)

    },
    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
        commit('newTodo', response.data)
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`
        https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    },
    async filterTodos({commit}, limit) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos', response.data)

    },
    async updateTodo({commit}, updTodo) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`)
        commit('updTodo', updTodo)
    }
}
const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updTodo: (state, updTodo) => {
        const idx = state.todos.findIndex((todo) => todo.id === updTodo.id)
        if (idx !== -1) {
            state.todos.splice(idx, 1, updTodo)
        }
    },
    setTodo: (state, todo) => state.todo = todo
}

export default {
    state, getters, actions, mutations
}
