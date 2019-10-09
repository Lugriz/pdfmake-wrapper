import { IVector } from './vector.interface';

/**
 * Interface that defines the properties that an ellipse can has
 */
export interface IEllipse extends IVector {
    readonly x?: number;
    readonly y?: number;
    readonly r1?: number;
    readonly r2?: number;
}