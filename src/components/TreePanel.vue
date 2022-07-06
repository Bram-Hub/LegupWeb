<template>
  <svg viewBox="0 0 100 100">
    <!--    <circle r="4" cy="50" cx="20" stroke="black" class="circle" stroke-width="0.3"></circle>-->
    <!--    <polygon points="36,50 33,52 33,48" stroke="black" class="tri" stroke-width="0.3"></polygon>-->
    <!--    <circle r="4" cy="50" cx="40" stroke="black" class="circle" stroke-width="0.3"></circle>-->
    <!--    <path d="M 24 50 L 33 50" stroke="black" stroke-width="0.3"></path>-->
    <g
      v-for="(element, idx) in elements"
      :key="idx"
    >
      <circle
        r="4"
        cy="50"
        :cx="(idx + 1) * 20"
        stroke="black"
        stroke-width="0.3"
        class="circle"
      />
      <polygon
        v-if="idx !== 0"
        :points="makePoints(50, (idx + 1) * 20)"
        stroke="black"
        stroke-width="0.3"
        class="tri"
      />
    </g>
    <path d="" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Tree, TreeElement, TreeTransition, TreeNode } from "@/models/tree";

const makePoints = (y: number, edge: number) => {
    return `${edge - 4},${y} ${edge - 7},${y + 2} ${edge - 7},${y - 2}`;
};

// const makePath = (elements: TreeElement[]) => {
//
// };

//const elements = reactive<TreeElement[]>([]);

const elements = computed(() => {
    let nodes: (TreeNode | null)[] = [props.tree.root];
    let transitions: TreeTransition[] = [];
    let nodeIndex = 0;
    let transitionIndex = 0;
    while (true) {
        let added = false;
        for (; nodeIndex < nodes.length; nodeIndex++) {
            let newTransitions = nodes[nodeIndex];
            if (newTransitions !== null) {
                transitions = transitions.concat(newTransitions.getChildren());
            }
            added = true;
        }
        for (; transitionIndex < transitions.length; transitionIndex++) {
            nodes.push(transitions[transitionIndex].getChild());
            added = true;
        }
        if (!added) {
            break;
        }
    }

    return (nodes as TreeElement[]).concat(transitions);
});

const props = defineProps<{
    tree: Tree
}>();



</script>

<style scoped>
svg {
    margin: 0;
    padding: 0;
}

.circle:hover {
    fill: dodgerblue;
}

.circle {
    fill: yellow;
}

.tri {
    fill: lightgreen;
}
</style>