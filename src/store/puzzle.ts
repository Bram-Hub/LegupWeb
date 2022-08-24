import { GridBoard, GridCell, Puzzle } from "@/models/puzzle";
import { defineStore } from "pinia";
import {TreeNode, TreeTransition} from "@/models/tree";

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

            //const tree = this.puzzle?.getTree();
            const treeElement = this.puzzle?.getCurrentTreeElement();
            if (/*tree !== undefined && */treeElement !== undefined) {
                if (treeElement.isNode()) {
                    let node = treeElement as TreeNode;
                    if (node.getChildren().length === 0) {
                        const transition = new TreeTransition(node.getBoard().copy());
                        node.addChild(transition);
                        this.puzzle?.setCurrentTreeElement(transition);
                        this.puzzle?.setCurrentBoard(transition.getBoard());
                    }
                }
            }

            const board = this.puzzle?.getCurrentBoard();

            console.log(this.puzzle);
            console.log(board);

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
