import { StyleDefinition } from './style-definition';
import { IStack } from '../interfaces';

/**
 * Class to create a stack of paragraphs 
 */

export class Stack extends StyleDefinition<Stack, IStack> {

    /**
     * @param _stack receives an array of text
     */
    constructor(
        private _stack: any[]
    ) {
        super();
        this.content.stack = this._stack;
    }

}