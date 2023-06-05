<template>
    <RouterView/>
</template>

<script setup lang="ts">
import {watch} from "vue";
import {useRoute} from "vue-router";

let route = useRoute();

watch(route, (from, to) => {
    console.log(`Old route: ${from.name}, new route: ${to?.name}`)
    }, { flush: 'pre', immediate: true, deep: true});
</script>

<style scoped>
</style>