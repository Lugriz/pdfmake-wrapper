import { StyleDefinition } from './style-definition';
import { IPageReference } from '../interfaces';

/**
 * Class to create a page reference to a Text object
 */
export class PageReference extends StyleDefinition<PageReference, IPageReference> {

    /**
     * @param _id receives the id reference
     */
    constructor(  
        private _id: string
    ) {
        super();
        this.content.pageReference = this._id;
    }

}