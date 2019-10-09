import { IVector } from './vector.interface';

/**
 * Interface that defines the properties that a line can has
 */
export interface ILine extends IVector {
    readonly x1?: number;
    readonly x2?: number;
    readonly y1?: number;
    readonly y2?: number;
}