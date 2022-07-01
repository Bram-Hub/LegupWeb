<template>
  <div class="node" :class="{ selected }">

  </div>
</template>

<script setup lang="ts">
defineProps<{
  selected: boolean
}>();
</script>

<style scoped>
.node {
  width: 70px;
  height: 70px;
  background-color: yellow;
  border-radius: 70px;
  border-color: black;
  border-width: 2px;
  border-style: solid;
}

.node:hover {
  background-color: dodgerblue;
}

.selected {
  background-color: blue;
}
</style>