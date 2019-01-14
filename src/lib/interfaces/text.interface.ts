import { IStyleDefinition } from '.';

/**
 * Interface that defines a text line
 */

export interface IText extends IStyleDefinition {
    readonly text: string;
    readonly preserveLeadingSpaces?: boolean;
    readonly opacity?: number;
    readonly id?: string;
}