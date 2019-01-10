import { IContentDefinition } from './interfaces';

/**
 * Interface that defines the style definition type
 */

export interface IStyleDefinition extends IContentDefinition {
    readonly fontSize?: number;
    readonly width?: number;
    readonly height?: number;
    readonly alignment?: string;
    readonly bold?: boolean;
    readonly italics?: boolean;
    readonly margin?: number | [number, number] | [number, number, number, number];
}