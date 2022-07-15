import { Puzzle } from "@/models/puzzle";
import { Board as LightUpBoard } from "@/puzzles/lightup";
import { Board as NurikabeBoard } from "@/puzzles/nurikabe";

export const readJson = async (json: string) => {
    const content = JSON.parse(json);
    const module = await import(`./puzzles/${content.puzzle}`);
    const puzzle: Puzzle = new (module.default)();
    puzzle.getImporter()?.importPuzzle(JSON.parse(json));
    return puzzle;
};

const PuzzleViews: { [key: string]: any } = {
    lightup: LightUpBoard,
    nurikabe: NurikabeBoard
};

export const getBoardView = (id: string) => {
    return PuzzleViews[id];
};
