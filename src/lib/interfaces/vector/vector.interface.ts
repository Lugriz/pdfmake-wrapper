/**
 * Interface that defines the properties that a vector can has
 */
export interface IVector {
    readonly type: string;
    readonly color?: string;
    readonly lineColor?: string;
    readonly lineWidth?: number;
    readonly lineCap?: string;
    readonly dash?: { length?: number };
    readonly fillOpacity?: number;
    readonly linearGradient?: string[];
}