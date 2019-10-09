import { IVector } from './vector.interface';

export interface IPoint {
    readonly x: number;
    readonly y: number;
}

/**
 * Interface that defines the properties that a polyline can has
 */
export interface IPolyline extends IVector {
    readonly closePath?: boolean;
    readonly points?: IPoint[];
}