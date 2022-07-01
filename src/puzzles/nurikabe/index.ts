import { Puzzle } from "@/models/puzzle";
import NurikabeBoard from "./NurikabeBoard.vue";

class Nurikabe extends Puzzle {
    constructor() {
        super(NurikabeBoard);
    }


}

export default Nurikabe;
