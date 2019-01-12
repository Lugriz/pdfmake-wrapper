import { IStyleDefinition } from '.';

/**
 * Interface that defines a column
 */

export interface IColumns extends IStyleDefinition {
    readonly columns: any[];
    readonly columnGap?: number;
}