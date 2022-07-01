<template>
    <table class="board-table">
        <tr v-for="(boardRow, rowIdx) in puzzle.board" v-bind:key="rowIdx" class="cell-rw">
            <td v-for="(boardCell, cellIdx) in boardRow" v-bind:key="cellIdx" class="cell-td">
                <div
                    class="cell"
                    @click="$emit('leftClick', rowIdx, cellIdx)"
                    :class="{ lit: isLit(rowIdx, cellIdx), solid: isSolid(rowIdx, cellIdx) }"
                    @contextmenu.prevent="$emit('rightClick', rowIdx, cellIdx)"
                >
                    <div 
                        class="cell-inner-wrapper"
                        :class="{ 'white-text': isSolid(rowIdx, cellIdx) }"
                    >
                        {{ typeof(boardCell) === "number" && boardCell === 0 ? "" : boardCell }}
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";
//import { Cell } from "@/models/puzzle";
import Vue from "vue";

// const props = defineProps<{
//     board: Array<Array<Cell>>
// }>();

const puzzle = usePuzzleStore();

const isLit = (row: number, col: number) => {
    for (let i = 0; i < puzzle.board.length; i++) {
        if (puzzle.board[i][col] === "💡") {
            return true;
        }
    }
    for (let i = 0; i < puzzle.board[row].length; i++) {
        if (puzzle.board[row][i] === "💡") {
            return true;
        }
    }
    return false;
};

const isSolid = (row: number, col: number) => {
    return typeof(puzzle.board[row][col]) === "number";
}

// const updateCell = (row: number, col: number) => {
//     props.board[row][col] = Math.floor(Math.random() * 9);
// };

</script>

<style scoped>
.cell {
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
}

.cell:hover {
    background-color: gray;
    cursor: pointer;
}

.lit:hover {
    background-color: lightyellow !important;
}

.cell-td {
    margin: 0;
    padding: 0;
}

.cell-rw {
    margin: 0;
    padding: 0;
}

.board-table {
    /*border-spacing: 0;*/
    border-collapse: collapse;
}

.lit {
    background-color: yellow;
}

.solid {
    background-color: black;
}

.cell-inner-wrapper {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.white-text {
    color: white;
}
</style>