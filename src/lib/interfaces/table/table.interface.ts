import { IStyleDefinition } from '../';
import { ITableBody } from './';

/**
 * Interface that defines a table
 */

export interface ITable extends IStyleDefinition {
    readonly layout?: string;
    readonly table: ITableBody
}