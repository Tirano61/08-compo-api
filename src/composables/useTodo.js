
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {

    const store = useStore()

    const currentTab = ref('all')
    

    //Se definiria asi si se necesitaria usar en el setup
    // const pending = computed(() => store.getters['pendingTodos'])
    // const all = computed(() => store.getters['allTodos'])
    // const completed = computed(() => store.getters['completedTodos'])
    
    return {
      currentTab,
      //si solo se necesita en la vista se declara aca
      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      getTodosbyTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
      //Methos
      toggleTodo:  ( id ) => store.commit('toggleTodoMutation', id)
    }  
}


export default useTodo