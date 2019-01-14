import { StyleDefinition } from './style-definition';
import { ITextReference } from '../interfaces';

/**
 * Class to create a text reference to a Text object
 */

export class TextReference extends StyleDefinition<TextReference, ITextReference> {

    /**
     * @param _id receives the id reference
     */

    constructor(  
        private _id: string
    ) {
        super();
        this.content.textReference = this._id;
    }

}
