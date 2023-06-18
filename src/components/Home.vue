<template>
    <a>Home</a>
    <div>
        <div class="btn btn-dark"
             @click="toUpclicker">To Upclicker</div>
        <div class="btn btn-warning"
             @click="router.push({ name: 'Downclicker' })">To Downclicker</div>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

let router = useRouter();

function toUpclicker() {
    router.push({ name: 'Upclicker' })
}
</script>

<style scoped>
</style>