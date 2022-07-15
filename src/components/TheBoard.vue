<template>
  <component :is="getPuzzle()" />
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";
import { useRouter } from "vue-router";
import { getBoardView } from "@/utils";

const puzzle = usePuzzleStore();
const router = useRouter();
console.log(puzzle.puzzle);
if (puzzle.puzzle === undefined || puzzle.puzzle.getCurrentBoard() === undefined) {
    router.push({
        "name": "puzzle-selector"
    });
}

const getPuzzle = () => {
    const puz = puzzle.puzzle;
    if (puz !== undefined) {
        return getBoardView(puz.getId());
    }
};



</script>

<style scoped>

</style>