import { IStyleDefinition } from '.';

/**
 * Interface that defines the Image Type
 */
export interface IImg extends IStyleDefinition {
    readonly image: string;
    readonly fit?: [number, number];
    readonly opacity?: number;
}