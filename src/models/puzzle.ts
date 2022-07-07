import { BasicRule, CaseRule, ContradictionRule } from "@/models/rules";
import { Component } from "@/types";
import {Tree} from "@/models/tree";


export class Location {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
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
    protected data: T;

    protected constructor(data: T) {
        this.data = data;
    }

    public getData(): T {
        return this.data;
    }
}

export class GridCell<T> extends PuzzleElement<T> {
    protected location: Location;

    constructor(data: T, location: Location) {
        super(data);
        this.location = location;
    }
}

export abstract class Puzzle {
    private boardView: Component;
    private currentBoard: Board | null;
    private tree: Tree | null;
    private basicRules: Array<BasicRule>;
    private caseRules: Array<CaseRule>;
    private contradictionRules: Array<ContradictionRule>;

    protected constructor(boardView: Component) {
        this.boardView = boardView;
        this.basicRules = [];
        this.caseRules = [];
        this.contradictionRules = [];
        this.currentBoard = null;
        this.tree = null;
    }

    protected initRules(caseRules: CaseRule[]): void {
        this.caseRules = caseRules;
    }

    public setTree(tree: Tree) {
        this.tree = tree;
    }

    public setCurrentBoard(board: Board) {
        this.currentBoard = board;
    }

}

export abstract class PuzzleImporter {
    private puzzle: Puzzle;

    protected constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    public importPuzzle() {
        // TODO: call import board and proof here
    }

    abstract importBoard(input: object): void;

    protected importProof() {
        // TODO: import proof
    }
}

export abstract class PuzzleExporter {
    private puzzle: Puzzle;

    protected constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    public exportPuzzle() {
        // TODO: call export board and proof here
    }

    abstract exportBoard(): object;

    protected exportProof() {
        // TODO: export proof
    }
}


