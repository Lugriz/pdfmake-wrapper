import { IStyleDefinition } from '.';

/**
 * Interface that defines a stack of paragraphs
 */

export interface IStack extends IStyleDefinition {
    readonly stack: string[];
}