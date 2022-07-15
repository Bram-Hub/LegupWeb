<template>
  <h1>Legup</h1>
  <Board id="board" />
  <RulesPanel />
<!--  <button @click="buildPuzzle">make a puzzle</button>-->
</template>

<script setup lang="ts">
import Board from "@/components/TheBoard.vue";
import RulesPanel from "@/components/RulesPanel.vue";

</script>

<style scoped>
#board {
  margin-left: auto;
  margin-right: auto;
}
</style>
