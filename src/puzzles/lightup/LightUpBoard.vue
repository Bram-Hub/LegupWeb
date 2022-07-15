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
        <LightUpCellComponent
          :cell="boardCell as LightUpCell"
          @click="lClick(boardCell as LightUpCell)"
        />
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";
import LightUpCellComponent from "@/puzzles/lightup/LightUpCell.vue";
import { LightUpCell, LightUpCellType } from "@/puzzles/lightup/cell";
import { toRaw } from "vue";

const puzzle = usePuzzleStore();

const lClick = (cell: LightUpCell) => {
    const newCell = toRaw(cell).copy();
    console.log(newCell);
    switch (cell.getType()) {
    case LightUpCellType.Empty:
        newCell.setData(LightUpCellType.Bulb);
        break;
    case LightUpCellType.Bulb:
        newCell.setData(LightUpCellType.Empty);
        break;
    default:
        return;
    }
    puzzle.updateCell(newCell);
};

</script>

<style scoped>
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
</style>