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
    <input type="file" id="puzzle-file-picker" @change="selectFile"><br>
    <button type="submit">Open!</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePuzzleStore } from "@/store/puzzle";
import { useRouter } from "vue-router";
import {readJson} from "@/utils";

const selected = ref();

const router = useRouter();

const options = {
    "Light Up": "lightup",
    "Nurikabe": "nurikabe"
};

const puzzle = usePuzzleStore();

const select = () => {
    puzzle.currentPuzzle = selected.value;
    router.push({
        name: "puzzle"
    });
};

const file = ref();

const selectFile = (event: { target: HTMLInputElement }) => {
    const files = event.target.files;
    if (files !== null) {
        file.value = files[0];
    }
}

const open = () => {
    const fReader = new FileReader();
    fReader.onload = (event) => {
        if (event.target) {
            const res = event.target.result;
            if (res) {
                //console.log(JSON.parse(res
                // as string));

                readJson(res as string);
            }
        }
    };
    fReader.readAsText(file.value);
}

</script>