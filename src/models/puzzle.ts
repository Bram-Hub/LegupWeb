import { BasicRule, CaseRule, ContradictionRule } from "@/models/rules";
import { Tree } from "@/models/tree";


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

    public copy(): Location {
        return new Location(this.x, this.y);
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

export abstract class GridBoard extends Board {
    protected height: number;
    protected width: number;

    protected constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
        for (let i = 0; i < height * width; i++) {
            this.elements.push(null);
        }
    }

    public getCell(x: number, y: number): GridCell<any> | null {
        const res = this.elements[y * this.width + x];
        if (res === null) {
            return null;
        }
        return res as GridCell<any>;
    }

    public getCellFromLocation(location: Location) {
        return this.getCell(location.getX(), location.getY());
    }

    public setCell(x: number, y: number, cell: GridCell<any>) {
        this.elements[y * this.width + x] = cell;
        this.handleChange();
    }

    public addCell(cell: GridCell<any>) {
        this.addCellWithoutUpdate(cell);
        this.handleChange();
    }

    public addCellWithoutUpdate(cell: GridCell<any>) {
        const location = cell.getLocation();
        this.elements[location.getY() * this.width + location.getX()] = cell;
    }

    protected setWithoutUpdate(cell: GridCell<any>) {
        const location = cell.getLocation();
        this.elements[location.getY() * this.width + location.getX()] = cell;
    }

    /**
     * @returns [[PuzzleElement]]
     */
    public getElements(): Array<Array<PuzzleElement<any>>> {
        const array = new Array(this.height);
        for (let i = 0; i < this.height; i++) {
            array[i] = new Array(this.width);
            for (let j = 0; j < this.width; j++) {
                array[i][j] = this.elements[i * this.width + j];
            }
        }
        return array;
    }

    public abstract handleChange(): void;
}


export abstract class PuzzleElement<T> {
    protected data: T;

    protected constructor(data: T) {
        this.data = data;
    }

    public getData(): T {
        return this.data;
    }

    public setData(data: T) {
        this.data = data;
    }

    public abstract copy(): PuzzleElement<T>;
}

export class GridCell<T> extends PuzzleElement<T> {
    protected location: Location;

    constructor(data: T, location: Location) {
        super(data);
        this.location = location;
    }

    public getLocation() {
        return this.location;
    }

    public copy(): GridCell<T> {
        return new GridCell(this.data, this.location.copy());
    }
}

export abstract class Puzzle {
    private readonly id: string;
    private readonly name: string;

    private currentBoard?: Board;
    private tree?: Tree;

    private basicRules: Array<BasicRule>;
    private caseRules: Array<CaseRule>;
    private contradictionRules: Array<ContradictionRule>;

    protected importer?: PuzzleImporter;
    protected exporter?: PuzzleExporter;

    protected constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.basicRules = [];
        this.caseRules = [];
        this.contradictionRules = [];
        this.currentBoard = undefined;
        this.tree = undefined;
        this.importer = undefined;
        this.exporter = undefined;
    }

    protected initRules(caseRules: CaseRule[]): void {
        this.caseRules = caseRules;
    }

    public getBasicRules() {
        return this.basicRules;
    }

    public getCaseRules() {
        return this.caseRules;
    }

    public getContradictionRules() {
        return this.contradictionRules;
    }

    public setTree(tree: Tree) {
        this.tree = tree;
    }

    public getCurrentBoard() {
        return this.currentBoard;
    }

    public setCurrentBoard(board: Board) {
        this.currentBoard = board;
    }

    public getId() {
        return this.id;
    }

    public getImporter() {
        return this.importer;
    }

    public getExporter() {
        return this.exporter;
    }

}

export abstract class PuzzleImporter {
    protected puzzle: Puzzle;

    protected constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    public importPuzzle(puzzle: object) {
        // TODO: call import board and proof here
        this.importBoard(puzzle);
        this.importProof(puzzle);
    }

    abstract importBoard(input: object): void;

    protected importProof(input: object) {
        console.log(input);
        // TODO: import proof
    }
}

export abstract class PuzzleExporter {
    protected puzzle: Puzzle;

    protected constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    public exportPuzzle() {
        // TODO: call export board and proof here
    }

    abstract exportBoard(): object;

    protected exportProof(): object {
        // TODO: export proof
        return {};
    }
}


