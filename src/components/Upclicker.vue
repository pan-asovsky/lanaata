<template>
    <div class="btn btn-primary" @click="count++">Click to increase</div>
    <span class="p-3">{{ count }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const count = ref(0);

onMounted(() => {
    console.log(`Upclicker mounted. Count: ${route.params.count}`);
    count.value = route.params.count;
})
</script>

<style scoped>
</style>