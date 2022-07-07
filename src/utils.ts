import {Puzzle} from "@/models/puzzle";

export const readJson = async (json: string): Puzzle => {
    let content = JSON.parse(json);
    const module = await import(`./puzzles/${content.puzzle}`);

}
