import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      {id: '2', text: 'Piedra del alma', completed: true},
      {id: '3', text: 'Piedra del poder', completed: true},
      {id: '4', text: 'Piedra de realidad', completed: false},
      {id: '5', text: 'Conseguir nuevos secuases', completed: false}
    ]
  },
  mutations: {
    toggleTodoMutation(state, id){
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed 
    }
  },
  actions: {
  },
  getters: {
    pendingTodos: ( state, getters, rootState) => {
      return state.todos.filter( t => !t.completed )
    },
    allTodos:( state, getters, rootState ) =>{
      return state.todos
    },
    completedTodos: ( state, getters, rootState ) => {
      return state.todos.filter( t => t.completed )
    },
    //El primer agumento es obligatorio pero no lo utilizo por eso el guion _
    getTodosByTab: ( _, getters ) => ( tab ) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'completed': return getters.completedTodos
        case 'pending': return getters.pendingTodos
      }
    }
  },
  modules: {
  },

})
