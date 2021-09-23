

<template>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>

    <modal v-if="isOpen"
            @on:close="closeModal">
        <!-- <h2>Titulo</h2>
        <p>Consectetur consequat qui anim reprehenderit non consectetur dolor est Lorem.</p>
        <button>Salir</button> -->
        <template v-slot:header>
            <h2>Título del modal</h2>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:body>
            <p>Voluptate id cupidatat occaecat ea reprehenderit et voluptate dolor anim incididunt ea. Ullamco nostrud reprehenderit enim proident adipisicing commodo ex eiusmod culpa.</p>
        </template>
    </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

export default {
    components: {
        Modal
    },
    setup(){
        const isOpen = ref(false)

        return{
            isOpen,
            
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>