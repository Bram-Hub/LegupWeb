import {GridCell, Location} from "@/models/puzzle";
import {LightUpBoard} from "@/puzzles/lightup/board";


export enum LightUpCellType {
    Bulb = -3,
    Empty = -2,
    Black = -1,
    Number = 0
}

export class LightUpCell extends GridCell<number> {
    private isLit: boolean;

    constructor(val: number, location: Location) {
        super(val, location);
        this.isLit = false;
    }

    public getType() {
        if (this.data >= 0) {
            return LightUpCellType.Number;
        }
        return this.data;
    }

    public getIsLit() {
        return this.isLit;
    }

    public setIsLit(isLit: boolean) {
        this.isLit = isLit;
    }
}

export const importCell = (): LightUpCell => {


    //return new LightUpCell();
};
