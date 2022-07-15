import { GridBoard, GridCell, Puzzle } from "@/models/puzzle";
import { defineStore } from "pinia";

export const usePuzzleStore = defineStore("puzzle", {
    state: () => {
        return {
            puzzle: undefined as Puzzle | undefined
        };
    },
    actions: {
        setPuzzle(puzzle: Puzzle) {
            this.puzzle = puzzle;
        },
        updateCell(cell: GridCell<any>) {
            const board = this.puzzle?.getCurrentBoard();
            if (board instanceof GridBoard) {
                board.addCell(cell);
            }
        }
    },
    getters: {
        getAllElements(state) {
            const board = state.puzzle?.getCurrentBoard();
            if (board instanceof GridBoard) {
                return board.getElements();
            }
        }
    }
});
