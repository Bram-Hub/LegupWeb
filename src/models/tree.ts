import { Board } from "@/models/puzzle";
import { Rule } from "@/models/rules";

export class Tree {
    root: TreeNode;

    constructor(board: Board) {
        this.root = new TreeNode(board);
        this.root.setRoot(true);
    }
}

export abstract class TreeElement {
    private board: Board;

    protected constructor(board: Board) {
        this.board = board;
    }
}

export class TreeNode extends TreeElement {
    private parent: TreeTransition | null;
    private children: TreeTransition[];
    private isRoot: boolean;

    constructor(board: Board) {
        super(board);
        this.parent = null;
        this.children = [];
        this.isRoot = false;
    }

    public setRoot(root: boolean) {
        this.isRoot = root;
    }

    public getChildren() {
        return this.children;
    }
}

export class TreeTransition extends TreeElement {
    private parents: TreeNode[];
    private child: TreeNode | null;
    private rule: Rule | null;
    private correct: boolean;
    private valid: boolean;

    constructor(board: Board) {
        super(board);
        this.parents = [];
        this.child = null;
        this.rule = null;
        this.correct = false;
        this.valid = false;
    }

    public getChild() {
        return this.child;
    }
}

