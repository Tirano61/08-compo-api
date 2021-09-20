
import {ref} from 'vue'

const useCounter = ( initValue = 5) => {
    const contador = ref(initValue)

    return {

        contador,
        increase: () => contador.value ++,
        dicrease: () => contador.value --

    }
}


export default useCounter