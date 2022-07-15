import { GridCell, Location } from "@/models/puzzle";

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

    public copy(): LightUpCell {
        const copy = new LightUpCell(this.data, this.location.copy());
        copy.isLit = this.isLit;
        return copy;
    }
}

export const importCell = (): LightUpCell => {


    return new LightUpCell(0, new Location(0, 0));
};
