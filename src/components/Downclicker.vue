<template>
    <div class="btn btn-secondary" @click="clickerStore.count--">Click to decrease</div>
    <span class="p-3">{{ clickerStore.count }}</span>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useClickerStore } from "../stores/clickerStore";

const router = useRouter();
const clickerStore = useClickerStore();
const BACK_TO_HOME_TIMEOUT = 5000;

onMounted(() => {
    console.log(`Downclicker mounted. Count: ${clickerStore.count}`);
    setTimeout(backToHome, BACK_TO_HOME_TIMEOUT);
})

function backToHome() {
    router.push({ name: 'Home'});
}
</script>

<style scoped>
</style>