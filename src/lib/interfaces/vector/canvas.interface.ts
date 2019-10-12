import { IStyleDefinition } from '../style-definition.interface';
import { IVector } from './vector.interface';

/**
 * Interface that defines the properties that a canvas can has
 */
export interface ICanvas extends IStyleDefinition {
    readonly canvas: IVector[];
}
