import { IStyleDefinition } from '..';

/**
 * Interface that defines a list
 */
export interface IList extends IStyleDefinition {
    readonly type?: string;
    readonly markerColor?: string;
}