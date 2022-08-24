import { GridBoard } from "@/models/puzzle";
import { LightUpCell, LightUpCellType } from "@/puzzles/lightup/cell";


export class LightUpBoard extends GridBoard {
    constructor(height: number, width: number) {
        super(height, width);
    }

    /**
     * Mark or unmark lit status
     */
    public handleChange() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const cell = this.getCell(x, y) as LightUpCell;
                cell.setIsLit(false);
            }
        }
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let cell: LightUpCell = this.getCell(x, y) as LightUpCell;
                if (cell.getType() === LightUpCellType.Bulb) {
                    cell.setIsLit(true);
                    let tmp_x = x;
                    let tmp_y = y;
                    while (tmp_x >= 0 && cell.getType() !== LightUpCellType.Number && cell.getType() !== LightUpCellType.Black) {
                        cell.setIsLit(true);
                        this.addCellWithoutUpdate(cell);
                        //this.setWithoutUpdate(cell);
                        tmp_x--;
                        cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    }
                    tmp_x = x;
                    cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    while (tmp_x < this.width && cell.getType() !== LightUpCellType.Number && cell.getType() !== LightUpCellType.Black) {
                        cell.setIsLit(true);
                        this.addCellWithoutUpdate(cell);
                        //this.setWithoutUpdate(cell);
                        tmp_x++;
                        cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    }
                    tmp_x = x;
                    tmp_y = y;
                    cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    while (tmp_y >= 0 && cell.getType() !== LightUpCellType.Number && cell.getType() !== LightUpCellType.Black) {
                        cell.setIsLit(true);
                        this.addCellWithoutUpdate(cell);
                        //this.setWithoutUpdate(cell);
                        tmp_y--;
                        cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    }
                    tmp_y = y;
                    cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    while (tmp_y < this.height && cell !== undefined && cell.getType() !== LightUpCellType.Number && cell.getType() !== LightUpCellType.Black) {
                        cell.setIsLit(true);
                        this.addCellWithoutUpdate(cell);
                        //this.setWithoutUpdate(cell);
                        tmp_y++;
                        cell = this.getCell(tmp_x, tmp_y) as LightUpCell;
                    }
                }
            }
        }
        // let x = location.getX();
        // let y = location.getY();
        // let cell: LightUpCell = this.getCell(x, y) as LightUpCell;
        //
        // if (cell.getType() === LightUpCellType.Bulb) {
        //     // fill lights
        //
        //
        // }
    }


}
