<template>
  <div class="btn btn-secondary" @click="count--">Click to decrease</div>
  <span class="ms-2">{{ count }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const count = ref(0);

onMounted(() => {
    console.log('Downclicker mounted.')
})
</script>

<style scoped>
</style>