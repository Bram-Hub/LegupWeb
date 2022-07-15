<template>
  <div
    :class="{
      white: isWhite(),
      lit: isLit(),
      black: isBlack(),
      cell: true
    }"
  >
    <p v-if="cell.getType() === LightUpCellType.Bulb">💡</p>
    <p v-else-if="cell.getType() === LightUpCellType.Number">{{ cell.getData() }}</p>
    <p v-else />
  </div>
</template>

<script setup lang="ts">


import { LightUpCell, LightUpCellType } from "@/puzzles/lightup";

const props = defineProps<{
  cell: LightUpCell
}>();

const isWhite = () => {
    return props.cell.getType() === LightUpCellType.Empty;
};

const isLit = () => {
    return props.cell.getIsLit();
};

const isBlack = () => {
    return props.cell.getType() === LightUpCellType.Number || props.cell.getType() === LightUpCellType.Black;
};


</script>

<style scoped>
.cell {
    width: 50px;
    height: 50px;
    background-color: white;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}

.black {
    background-color: black;
    color: white;
}

.white {
    background-color: white;
    color: black;
}

.white:hover {
    background-color: lightgray;
    cursor: pointer;
}

.lit {
    background-color: yellow;
}


</style>