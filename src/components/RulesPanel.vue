<template>
  <p>rules panel</p>
  <button @click="updateRules('basic')">basic rules</button>
  <button @click="updateRules('case')">case rules</button>
  <button @click="updateRules('contradiction')">contradiction rules</button>
  <div>
    <p>rules...</p>
    <p
      v-for="rule in curRules"
      :key="rule.getName()"
    >
      {{ rule.getName() }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePuzzleStore } from "@/store/puzzle";
import { reactive } from "vue";
import { Rule } from "@/models/rules";

const puzzle = usePuzzleStore();

const curRules: Rule[] = reactive([]);

const updateRules = (type: string) => {
    curRules.length = 0;
    switch (type) {
    case "basic":
        const basicRules = puzzle.puzzle?.getBasicRules();
        if (basicRules === undefined) {
            return;
        }
        for (const rule of basicRules) {
            curRules.push(rule);
        }
        break;
    case "case":
        const caseRules = puzzle.puzzle?.getCaseRules();
        if (caseRules === undefined) {
            return;
        }
        for (const rule of caseRules) {
            curRules.push(rule);
        }
        break;
    case "contradiction":
        const contradictionRules = puzzle.puzzle?.getContradictionRules();
        if (contradictionRules === undefined) {
            return;
        }
        for (const rule of contradictionRules) {
            curRules.push(rule);
        }
        break;
    }
};


</script>

<style scoped>

</style>