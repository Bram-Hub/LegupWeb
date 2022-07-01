import { Board } from "@/models/puzzle";
import { defineStore } from "pinia";


export const usePuzzleStore = defineStore('puzzle', {
    state: () => {
        return {
            board: {} as Board,
            currentPuzzle: null as string | null
        };
    }
});
