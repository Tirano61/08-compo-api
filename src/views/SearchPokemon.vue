

<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
      <input type="number" 
      placeholder="Número del Pokemon" 
      v-model="pokemonId"
      ref="txtSerchId"
      >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()

        const pokemonId = ref(1)
        const txtSerchId = ref()

        onActivated(() => {
            txtSerchId.value.select()
        })
        
        return{
            pokemonId,
            txtSerchId,
            onSubmit: () =>{
                //console.log('pokemon a buscar : ', pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value }})

            }
        }

    }
}
</script>

<style>

</style>