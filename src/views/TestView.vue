<template>
  <TreePanel
    id="test"
    :tree="tree"
  />
</template>

<script setup lang="ts">
import TreePanel from "@/components/TreePanel.vue";
import { reactive } from "vue";
import { Tree } from "@/models/tree";
import { GridBoard } from "@/models/puzzle";

let tree = reactive(new Tree(new GridBoard(10, 10)));

</script>

<style scoped>
#test {
    height: 100vh;
}
</style>