import {defineStore} from "pinia";
import {ref, Ref} from "vue";

interface ClickerState {
    count: Ref<number>
}

export const useClickerStore = defineStore('clicker', {
    state: (): ClickerState => ({
        count: ref(0)
    })
});