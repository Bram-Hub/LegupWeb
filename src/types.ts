import {DefineComponent} from "vue";
import LightUp from "@/puzzles/lightup";
import Nurikabe from "@/puzzles/nurikabe";
import {Puzzle} from "@/models/puzzle";

export type Component = DefineComponent<{}, {}, any>;

export const Puzzles: { [key: string]: Puzzle } = {
    lightup: new LightUp(),
    nurikabe: new Nurikabe()
}
