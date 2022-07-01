<template>
    <h1>Legup</h1>
    <p>Welcome to Legup!</p>
    <button @click="switchToSelect">Get Started!</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const switchToSelect = () => {
    router.push({
        name: "puzzle-selector"
    })
};

</script>

<style>

</style>