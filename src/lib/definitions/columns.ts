import { StyleDefinition } from './style-definition';
import { IColumns } from '../interfaces';

/**
 * Class to create some columns
 */

export class Columns extends StyleDefinition<Columns, IColumns> {

    /** 
     * @param _columns receives a column array
     */

    constructor(
        private _columns: any[]
    ) {
        super();
        this.content.columns = this._columns;
    }

    /**
     * @param space optional space between columns
     */

    public columnGap(space: number): Columns {
        this.content.columnGap = space;        
        
        return this;
    }
}