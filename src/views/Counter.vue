<template>
    <h1> Counter Vue</h1>
    <h2>{{contador}}</h2>

    <button @click="increase">+1</button>
    <button @click="dicrease">-1</button>
</template>

<script>

import useCounter from "../composables/useCounter";

export default {
    name: 'Couter',
    props:{},
    emits:[],
    setup(){

        const {contador,increase,dicrease} = useCounter(25)

        return {
            contador,
            increase,
            dicrease
        }
    }
}
</script>

<style>

</style>