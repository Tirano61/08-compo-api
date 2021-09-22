

<template>
   <h1>Lista de tareas de tanos</h1>

   <h4>Tareas : {{ $store.state.todos.length }}</h4>
   <h4>Pendientes : {{ pending.length }}</h4>
   <hr>
   
   <button :class="{'active': currentTab === 'all'}"
    @click="currentTab='all'">Todos
   </button>
   <button :class="{'active': currentTab === 'pending'}"
    @click="currentTab='pending'">Pendientes
   </button>
   <button :class="{'active': currentTab === 'completed'}"
    @click="currentTab='completed'">Completados
   </button>

   <div>
     <ul>
       <li v-for="todo in getTodosbyTab" :key="todo.id"
       :class="{'completed': todo.completed}">
         {{ todo.text }}
       </li>
     </ul>
   </div>
  
</template>
 
<script>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
export default {
  setup(){

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
      getTodosbyTab: computed(() => store.getters['getTodosByTab'](currentTab.value))

    }  
  }
}
</script>
 
 <style scoped>
 div{
   display: flex;
   justify-content: center;
   text-align: center;

 }
 ul{
   width: 300 px;
   text-align: left;

 }
 li{
   cursor: pointer;
   margin-bottom: 10px;
 }
 .active{
   background-color: #2c3e50;
   color: white;
 }
 .completed{
   text-decoration: line-through;
 }
 </style>