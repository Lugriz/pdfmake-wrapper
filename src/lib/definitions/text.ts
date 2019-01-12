import { StyleDefinition } from './style-definition';
import { IText } from '../interfaces';

/**
 * Class to create a text definition
 */

export class Txt extends StyleDefinition<Txt, IText> {

    /**
     * @param text Text to print
     */
    
    constructor(
        private _text: string | string[] | Text[]     
    ) {
        super();
        this.content.text = this._text;
    }
    
}