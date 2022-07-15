import { Puzzle } from "@/models/puzzle";
import Board from "./NurikabeBoard.vue";

class Nurikabe extends Puzzle {
    constructor() {
        super(
            "nurikabe",
            "Nurikabe"
        );
    }


}

export default Nurikabe;

export { Board };
