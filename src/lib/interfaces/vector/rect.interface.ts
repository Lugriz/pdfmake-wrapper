import { IVector } from './vector.interface';

/**
 * Interface that defines the properties that a rect can has
 */
export interface IRect extends IVector {
    readonly x?: number;
    readonly y?: number;
    readonly w?: number;
    readonly h?: number;
    readonly r?: number;
}