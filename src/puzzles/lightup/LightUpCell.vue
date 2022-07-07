<template>
  <div
    :class="{
      white: isWhite,
      lit: isLit,
      black: isBlack
    }"
  >
    <p v-if="cell.getType() === LightUpCellType.Bulb">💡</p>
    <p v-else-if="cell.getType() === LightUpCellType.Number">{{ cell.getData() }}</p>
  </div>
</template>

<script setup lang="ts">


import {LightUpCell, LightUpCellType} from "@/puzzles/lightup/index";

const props = defineProps<{
  cell: LightUpCell
}>();

const isWhite = () => {
    return props.cell.getType() === LightUpCellType.Empty;
}

const isLit = () => {
    return props.cell.getIsLit();
}

const isBlack = () => {
    return props.cell.getType() === LightUpCellType.Number || props.cell.getType() === LightUpCellType.Black;
}


</script>

<style scoped>
.cell {
    width: 50px;
    height: 50px;
}



</style>