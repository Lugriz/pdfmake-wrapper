import { IStyleDefinition } from '../';

/**
 * Interface that defines a cell of a table
 */

export interface ICell extends IStyleDefinition {
    readonly colSpan?: number;
    readonly rowSpan?: number;
    readonly fillColor?: string;
    readonly border?: [boolean] | [boolean, boolean] | [boolean, boolean, boolean, boolean];
}