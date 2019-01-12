import { IStyleDefinition } from '../';

/**
 * Interface that defines a cell of a table
 */

export interface ICell extends IStyleDefinition {
    colSpan: number;
    rowSpan: number;
    fillColor: string;
    border: [boolean, boolean?, boolean?, boolean?]
}