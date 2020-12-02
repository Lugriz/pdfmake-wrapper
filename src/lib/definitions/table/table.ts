import { StyleDefinition } from '../style-definition';
import { ITable, ICustomTableLayout } from '../../interfaces';

/**
 * Class to create a table
 */
export class Table extends StyleDefinition<Table, ITable> {

    /**
     * @param _body receives an array of arrays
     */
    constructor(
        private _body: any[][]
    ) {
        super();
        this.content.table = {};
        this.content.table.body = this._body;
    }

    /**
     * @param layout set table layout {lightHorizontalLines|noBorders|headerLineOnly|ICustomTableLayout}
     */
    public layout(layout: 'lightHorizontalLines' | 'noBorders' | 'headerLineOnly' | ICustomTableLayout): Table {
        this.content.layout = layout;
        return this;
    }

    /**
     * @param rows set number of header rows
     */
    public headerRows(rows: number): Table {
        this.content.table.headerRows = rows;
        return this;
    }

    /**
     * @param widths set table widths
     */
    public widths(widths: number | '*' | 'auto' | (string | number)[]): Table {        
        this.content.table.widths = widths;
        return this;
    }

    /**
     * @param heights set table heights
     */
    public heights(heights: (row: number) => number | number | number[]): Table {
        this.content.table.heights = heights;
        return this;
    }

    /**
     * @param apply move the table to the next page when it will be cut it for a breaking page
     */
    public dontBreakRows(apply: boolean): Table {
        this.content.table.dontBreakRows = apply;
        return this;
    }

    /**
     * @param rows number of rows that are held next to the header
     */
    public keepWithHeaderRows(rows: number): Table {
        this.content.table.keepWithHeaderRows = rows;
        return this;
    }

}