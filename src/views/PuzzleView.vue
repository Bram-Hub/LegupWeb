<template>
  <div class="total-container">
<!--    <h1>Legup</h1>-->
    <div class="toolbar">
      <p>toolbar</p>
    </div>
    <div class="board-rules-container">
      <div class="rules-container">
        <RulesPanel />
      </div>
      <div class="board-container">
        <Board id="board" />
      </div>
    </div>
    <div class="tree-container">
      <TreePanel />
    </div>
  </div>
<!--  <button @click="buildPuzzle">make a puzzle</button>-->
</template>

<script setup lang="ts">
import Board from "@/components/TheBoard.vue";
import RulesPanel from "@/components/RulesPanel.vue";
import TreePanel from "@/components/TreePanel.vue";

</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>

<style scoped>
#board {
    margin-left: auto;
    margin-right: auto;

}

.tree-container {
    height: 35%;
    max-height: 35%;
}

.toolbar {
    height: 5%;
}

.board-container {
    height: 100%;
    max-width: 50%;
    overflow: scroll;
}

.total-container {
    height: 100vh;
}

.board-rules-container {
    height: 60%;
    display: flex;
    justify-content: space-around;
}
</style>
