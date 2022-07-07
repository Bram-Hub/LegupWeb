import { Puzzle } from "@/models/puzzle";
import LightUpBoard from "./LightUpBoard.vue";
import { CaseRules } from "@/puzzles/lightup/rules";
import { LightUpCell, LightUpCellType, importCell } from "@/puzzles/lightup/cell";


class LightUp extends Puzzle {
    constructor() {
        super(LightUpBoard);
        this.initRules(CaseRules);
    }



}

export default LightUp;

export { LightUpCellType, LightUpCell, importCell };
