import { StyleDefinition } from '../style-definition';
import { ITocItem, IText, IStyleDefinition } from '../../interfaces';

/**
 * Class to create a toc item
 */
export class TocItem extends StyleDefinition<TocItem, ITocItem> {

    /**
     * @param _txt receives a text object and adds it as toc item
     */
    constructor(  
        private _txt: IText
    ) {
        super();
        
        this.content.tocItem = true;

        for (const key in this._txt) {
            this.content[key] = (this._txt as any)[key];
        }
    }

    /**
     * Set a style to de toc item
     * @param style The defined style
     */
    public tocStyle(style: IStyleDefinition): TocItem {
        this.content.tocStyle = style;
        return this;
    }

    /**
     * Set a margin to de toc item
     * @param margin The defined margin
     */
    public tocMargin(margin: number | [number, number] | [number, number, number, number]): TocItem {
        this.content.tocMargin = margin;
        return this;
    }

}