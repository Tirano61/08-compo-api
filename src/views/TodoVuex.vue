

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
       :class="{'completed': todo.completed}"
       @dblclick="toggleTodo(todo.id)">
         {{ todo.text }}
       </li>
     </ul>
   </div>
  
</template>
 
<script>
  import useTodo from '../composables/useTodo'

export default {
  setup(){

    const {currentTab,
          pending,
          all,
          completed,
          getTodosbyTab,
          toggleTodo
          } = useTodo() 

    return{
      currentTab,
      pending,
      all,
      completed,
      getTodosbyTab,
      toggleTodo
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