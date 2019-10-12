import { IStyleDefinition } from '.';

/**
 * Interface that defines a text line
 */

export interface IText extends IStyleDefinition {
    readonly text: string | (string | IText)[];
    readonly preserveLeadingSpaces?: boolean;
    readonly opacity?: number;
}