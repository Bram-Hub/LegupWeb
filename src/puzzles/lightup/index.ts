import { Puzzle } from "@/models/puzzle";
import LightUpBoard from "./LightUpBoard.vue";
import { CaseRules } from "@/puzzles/lightup/rules";

class LightUp extends Puzzle {
    constructor() {
        super(LightUpBoard);
        this.initRules(CaseRules);
    }



}

export default LightUp;
