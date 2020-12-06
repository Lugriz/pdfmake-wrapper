import { IStyleDefinition } from '..';

/**
 * Interface that defines an item of an list
 */
export interface IItem extends IStyleDefinition {
    readonly counter?: number;
    readonly listType?: string;
}