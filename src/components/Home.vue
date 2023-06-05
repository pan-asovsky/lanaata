<template>
    <a>Home</a>
    <div>
        <div class="btn btn-dark"
             @click="toUpclicker">To Upclicker</div>
        <div class="btn btn-warning"
             @click="router.push({ name: 'Downclicker', params: { count: 2 }})">To Downclicker</div>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

let router = useRouter();

function toUpclicker() {
    router.push({ name: 'Upclicker', params: { count: 1 }})
}
</script>

<style scoped>
</style>