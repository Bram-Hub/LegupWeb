<template>
  <h1>Legup</h1>
  <!--  <select v-model="selected">-->
  <!--    <option-->
  <!--      v-for="(val, name) in options"-->
  <!--      :key="val"-->
  <!--      :value="val"-->
  <!--    >-->
  <!--      {{ name }}-->
  <!--    </option>-->
  <!--  </select>-->
  <!--  <button @click="select">Select!</button>-->
  <form @submit.prevent="open">
    <label for="puzzle-file-picker">Choose a puzzle file!</label><br>
    <input
      id="puzzle-file-picker"
      type="file"
      @change="selectFile"
    ><br>
    <button type="submit">Open!</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePuzzleStore } from "@/store/puzzle";
import { useRouter } from "vue-router";
import { readJson } from "@/utils";

const router = useRouter();

const puzzle = usePuzzleStore();

// const select = () => {
//     // puzzle.currentPuzzle = selected.value;
//     // router.push({
//     //     name: "puzzle"
//     // });
// };

const file = ref();

const selectFile = (event: any) => {
    const files = event.target.files;
    if (files !== null) {
        file.value = files[0];
    }
};

const open = async () => {
    const thing = await read(file);
    const thePuzzle = await readJson(thing as string);

    puzzle.setPuzzle(thePuzzle);

    router.push({
        name: "puzzle"
    });
};

const read = (file: any) => {
    return new Promise((res, rej) => {
        const fReader = new FileReader();

        fReader.onload = () => {
            res(fReader.result);
        };

        fReader.onerror = () => {
            rej();
        };

        fReader.readAsText(file.value);
    });
};

</script>