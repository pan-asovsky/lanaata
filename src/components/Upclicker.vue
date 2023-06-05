<template>
    <div class="btn btn-primary" @click="count++">Click to increase</div>
    <span class="p-3">{{ count }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const count = ref(0);

const BACK_TO_HOME_TIMEOUT = 5000;

onMounted(() => {
    console.log(`Upclicker mounted. Count: ${route.params.count}`);
    count.value = Number(route.params.count);
    setTimeout(backToHome, BACK_TO_HOME_TIMEOUT);
})

function backToHome() {
    router.push({ name: 'Home'});
}
</script>

<style scoped>
</style>