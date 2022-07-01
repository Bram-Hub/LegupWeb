<template>
    <component :is="getPuzzle()"></component>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";
import { Puzzles } from "@/types";
import { useRouter } from "vue-router";

const puzzle = usePuzzleStore();
const router = useRouter();

if (puzzle.currentPuzzle === null) {
    router.push({
        "name": "puzzle-selector"
    });
}

const getPuzzle = () => {
    if (puzzle.currentPuzzle !== null) {
        return Puzzles[puzzle.currentPuzzle].boardView;
    }
};



</script>

<style scoped>

</style>