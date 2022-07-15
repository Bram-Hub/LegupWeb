import { Puzzle, PuzzleExporter, PuzzleImporter, Location } from "@/models/puzzle";
import Board from "./LightUpBoard.vue";
import { CaseRules } from "@/puzzles/lightup/rules";
import { LightUpCell, LightUpCellType, importCell } from "@/puzzles/lightup/cell";
import { LightUpBoard } from "./board";


class LightUp extends Puzzle {
    constructor() {
        super(
            "lightup",
            "Light Up"
        );
        this.initRules(CaseRules);
        this.importer = new LightUpImporter(this);
        this.exporter = new LightUpExporter(this);
    }

}

class LightUpImporter extends PuzzleImporter {
    constructor(lightup: LightUp) {
        super(lightup);
    }

    importBoard(input: { board: any }): void {
        console.log("light up importing!");
        const board = input.board;
        const lightupBoard = new LightUpBoard(board.height, board.width);
        for (let i = 0; i < board.data.length; i++) {
            const data = board.data[i];
            lightupBoard.addCellWithoutUpdate(new LightUpCell(data.val, new Location(data.x, data.y)));
        }
        for (let i = 0; i < board.height; i++) {
            for (let j = 0; j < board.width; j++) {
                if (lightupBoard.getCell(j, i) === null) {
                    lightupBoard.addCellWithoutUpdate(new LightUpCell(LightUpCellType.Empty, new Location(j, i)));
                }
            }
        }
        lightupBoard.handleChange();
        this.puzzle.setCurrentBoard(lightupBoard);
    }
}

class LightUpExporter extends PuzzleExporter {
    constructor(lightup: LightUp) {
        super(lightup);
    }

    exportBoard(): object {
        return {};
    }

}

export default LightUp;

export { LightUpCellType, LightUpCell, Board, LightUpBoard, importCell };
