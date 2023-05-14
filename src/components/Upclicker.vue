<template>
    <div class="btn btn-primary" @click="count++">Click to increase</div>
    <span class="ms-3">{{ count }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref} from "vue";

const count = ref(0);

onMounted(() => {
    console.log('Upclicker mounted. Count is ' + count.value);
})
</script>

<style scoped>
</style>