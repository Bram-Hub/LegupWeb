<template>
    <h1>Legup</h1>
    <select v-model="selected">
        <option
            v-for="(val, name) in options"
            :value="val"
        >{{ name }}</option>
    </select>
    <button @click="select">Select!</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePuzzleStore } from "@/store/puzzle";
import LightUp from "@/puzzles/lightup";
import Nurikabe from "@/puzzles/nurikabe";
import { useRouter } from "vue-router";

const selected = ref();

const router = useRouter();

const options = {
    "Light Up": "lightup",
    "Nurikabe": "nurikabe"
};

const puzzle = usePuzzleStore();

const select = () => {
    puzzle.currentPuzzle = selected.value;
    router.push({
        name: "puzzle"
    });
};

</script>