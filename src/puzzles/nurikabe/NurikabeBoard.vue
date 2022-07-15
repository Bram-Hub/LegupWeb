<template>
  <table class="board-table">
    <tr
      v-for="(boardRow, rowIdx) in puzzle.getAllElements"
      :key="rowIdx"
      class="cell-rw"
    >
      <td
        v-for="(boardCell, cellIdx) in boardRow"
        :key="cellIdx"
        class="cell-td"
      >
        <p>WIP</p>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";

const puzzle = usePuzzleStore();

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