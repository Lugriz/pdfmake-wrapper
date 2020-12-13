import { IStyleDefinition } from '../';
import { ITableBody, ICustomTableLayout } from './';

/**
 * Interface that defines a table
 */
export interface ITable extends IStyleDefinition {
    readonly layout?: string | ICustomTableLayout;
    readonly table: ITableBody;
}