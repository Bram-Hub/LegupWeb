import { DefineComponent } from "vue";
import LightUp from "@/puzzles/lightup";
import Nurikabe from "@/puzzles/nurikabe";
import {BasicRule, CaseRule, ContradictionRule} from "@/models/rules";
import { Component } from "@/types";


export interface Location {
    x: number;
    y: number;
}

//export type Board = Array<PuzzleElement<any>>;

export abstract class Board {
    elements: (PuzzleElement<any> | null)[];
    modified: Set<PuzzleElement<any>>;
    modifiable: boolean;

    protected constructor() {
        this.elements = [];
        this.modified = new Set<PuzzleElement<any>>();
        this.modifiable = true;
    }
}

export class GridBoard extends Board {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
        for (let i = 0; i < height * width; i++) {
            this.elements.push(null);
        }
    }
}


export abstract class PuzzleElement<T> {
    data: T;

    protected constructor(data: T) {
        this.data = data;
    }
}

export class GridCell<T> extends PuzzleElement<T> {
    location: Location;

    constructor(data: T, x: number, y: number) {
        super(data);
        this.location = {x, y};
    }
}


//export type Cell = " " | "💡" | "•" | number;
export abstract class Puzzle {
    boardView: Component;
    board: Board | null;
    basicRules: Array<BasicRule>;
    caseRules: Array<CaseRule>;
    contradictionRules: Array<ContradictionRule>;

    protected constructor(boardView: Component) {
        this.boardView = boardView;
        this.basicRules = [];
        this.caseRules = [];
        this.contradictionRules = [];
        this.board = null;
    }

    initRules(caseRules: CaseRule[]) {
        this.caseRules = caseRules;
    }

}


