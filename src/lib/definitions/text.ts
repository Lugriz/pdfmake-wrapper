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
        private _text: string | (string | IText)[]     
    ) {
        super();
        this.content.text = this._text;
    }

    /**
     * preserve leading spaces
     */

    public preserveLeadingSpaces(): Txt {
        this.content.preserveLeadingSpaces = true;
        return this;
    }

    /**
     * Set opacity to the text
     */

    public opacity(opacity: number): Txt {
        if (opacity > 1) opacity = 1;
        
        this.content.opacity = opacity;
        return this;
    }

    /**
     * Set an id to the text object. This is useful for referencing the text object
     */

    public id(id: string): Txt {
        this.content.id = id;
        return this;
    }
    
}