import { BasicRule, CaseRule, ContradictionRule } from "@/models/rules";
import { Component } from "@/types";


export interface Location {
    x: number;
    y: number;
}

//export type Board = Array<PuzzleElement<any>>;

export abstract class Board {
    protected elements: (PuzzleElement<any> | null)[]; // eslint-disable-line @typescript-eslint/no-explicit-any
    private modified: Set<PuzzleElement<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
    private modifiable: boolean;

    protected constructor() {
        this.elements = [];
        this.modified = new Set<PuzzleElement<any>>(); // eslint-disable-line @typescript-eslint/no-explicit-any
        this.modifiable = true;
    }
}

export class GridBoard extends Board {
    private height: number;
    private width: number;

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
    private data: T;

    protected constructor(data: T) {
        this.data = data;
    }
}

export class GridCell<T> extends PuzzleElement<T> {
    private location: Location;

    constructor(data: T, x: number, y: number) {
        super(data);
        this.location = { x, y };
    }
}

export abstract class Puzzle {
    private boardView: Component;
    private board: Board | null;
    private basicRules: Array<BasicRule>;
    private caseRules: Array<CaseRule>;
    private contradictionRules: Array<ContradictionRule>;

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


