import { List } from './list';
import { IUl } from '../../interfaces';

/**
 * Class to create an unordered list definition
 */

export class Ul extends List<Ul, IUl> {

    /**
     * @param items Items to print
     */
    
    constructor(
        private _items: any[]     
    ) {
        super();
        this.content.ul = this._items;
    }

    /**
     * It applies a type marker
     * @param type ( square, circle, none )
     */

    public type(type: 'square' | 'circle' | 'none'): Ul {
        return super.type( type );
    }
    
}