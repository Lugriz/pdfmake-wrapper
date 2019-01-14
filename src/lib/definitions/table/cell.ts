import { StyleDefinition } from '../style-definition';
import { ICell } from '../../interfaces';

/**
 * Class to create a cell of a table
 */

export class Cell extends StyleDefinition<Cell, ICell> {

    /**
     * @param data receives a any object and add cell properties 
     */

    constructor(  
        private data: { [propName: string]: any }
    ) {
        super();
        for (const key in this.data) {
            this.content[key] = this.data[key];
        }
    }

    /**
     * @param space optional space between columns
     */

    public colSpan(cols: number): Cell {
        this.content.colSpan = cols;
        return this;
    }

    /**
     * @param rows define a number of rowSpan
     */

    public rowSpan(rows: number): Cell {
        this.content.rowSpan = rows;
        return this;
    }

    /**
     * @param color define a color code or name
     */

    public fillColor(color: string): Cell {
        this.content.fillColor = color;
        return this;
    }

    /**
     * @param border define the border top, left, bottom and right
     */

    public border(border: [boolean, boolean?, boolean?, boolean?]): Cell {
        this.content.border = border;
        return this;
    }

}