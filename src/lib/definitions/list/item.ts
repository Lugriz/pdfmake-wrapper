import { StyleDefinition } from '../style-definition';
import { IItem } from '../../interfaces';

/**
 * Class to create a list definition
 */

export class Item extends StyleDefinition<Item, IItem> {

    constructor(
        private _content: { [propName: string ]: any }
    ) {
        super();

        for (const key in this._content) {
            this.content[key] = this._content[key];
        }
    }

    /**
     * It applies a counter on the marker
     * @param counter The counter of the marker
     */

    public counter(counter: number): Item {
        this.content.counter = counter;
        return this;
    }

    /**
     * It applies a type of marker
     * @param type The type of the marker
     */

    public listType(type: string): Item {
        this.content.listType = type;
        return this;
    }
    
}