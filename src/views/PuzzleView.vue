<template>
    <h1>Legup</h1>
    <Board id="board" />
    <button @click="buildPuzzle">make a puzzle</button>
</template>

<script setup lang="ts">
import Board from "@/components/Board.vue";
import { usePuzzleStore } from "@/store/puzzle";

const puzzle = usePuzzleStore();

const buildPuzzle = () => {
    puzzle.board = [];
    for (let i = 0; i < 10; i++) {
        puzzle.board[i] = [];
        for (let j = 0; j < 10; j++) {
            puzzle.board[i][j] = Math.floor(Math.random() * 9);
        }
    }
}

</script>

<style scoped>
#board {
  margin-left: auto;
  margin-right: auto;
}
</style>
