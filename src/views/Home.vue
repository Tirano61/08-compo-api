<template>
  <div class="home">
    
    <h1>Rective vs ref</h1>
    <h2>{{iroman}}</h2>
    <h2>{{hulk}}</h2>

    <button @click="changeIroman">Cambiar Iroman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Iroman :{{ iromanIsAlive }}</h3>
    <h3>Hulk :{{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Cambair status</button>
  
  </div>
</template>

<script>
import { ref, reactive } from 'vue'


export default {
  name: 'Home',
  setup() {
    const iroman = ref({ name:'Tony', age: 50})
    const hulk = reactive({ name:'Bruce', age: 50})

    const iromanIsAlive = reactive(false)

    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return{
      iroman,
      hulk,
      iromanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIroman: () =>{
        iroman.value.name = 'Tony Stark',
        iroman.value.age = 45
      },
      changeHulk: () =>{
        hulk.name = 'Bruce Banner',
        hulk.age = 45
      }
    }
  }

}
</script>
