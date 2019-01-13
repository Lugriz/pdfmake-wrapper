import { List } from './list';
import { IOl } from '../../interfaces';

/**
 * Class to create an ordered list definition
 */

export class Ol extends List<Ol, IOl> {

    /**
     * @param items Items to print
     */
    
    constructor(
        private _items: any[]     
    ) {
        super();
        this.content.ol = this._items;
    }

    /**
     * It applies a type marker
     * @param type ( lower-alpha, upper-alpha, upper-roman, lower-roman, none )
     */

    public type(type: 'lower-alpha' | 'upper-alpha' | 'upper-roman' | 'lower-roman' | 'none'): Ol {
        return super.type( type );
    }
    
    /**
     * Orden the list descendent
     */

    public reversed(): Ol {
        this.content.reversed = true;
        return this;
    }

    /**
     * It sets a separator
     * @param separator Type of the separator
     */

    public separator(separator: string | [string, string]): Ol {
        this.content.separator = separator;
        return this;
    }

    /**
     * It sets the number to start the list
     * @param start number to start
     */
    
    public start(start: number): Ol {
        this.content.start = start;
        return this;
    }
    
}