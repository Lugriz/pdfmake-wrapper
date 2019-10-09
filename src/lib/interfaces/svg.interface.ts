import { IStyleDefinition } from '.';

/**
 * Interface that defines a svg
 */
export interface ISVG extends IStyleDefinition {
    readonly svg: string;
    readonly fit?: [number, number];
}