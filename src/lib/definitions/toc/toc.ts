import { StyleDefinition } from '../style-definition';
import { IToc, IStyleDefinition } from '../../interfaces';

/**
 * Class to create a table of content
 */
export class Toc extends StyleDefinition<Toc, IToc> {

    /**
     * @param _toc receives the title of the toc
     */
    constructor(  
        private _toc: any
    ) {
        super();
        this.content.toc = {};
        this.content.toc.title = this._toc;
    }
    /**
     * Set a style to the text
     * @param style the style to apply
     */
    public textStyle(style: IStyleDefinition): Toc {
        this.content.toc.textStyle = style;
        return this;
    }

    /**
     * Set a style to the number
     * @param style the style to apply
     */
    public numberStyle(style: IStyleDefinition): Toc {
        this.content.toc.numberStyle = style;
        return this;
    }

     /**
     * Set a magin to the toc
     * @param margin the margin to apply
     */
    public textMargin(margin: number | [number, number] | [number, number, number, number]): Toc {
        this.content.toc.textMargin = margin;
        return this;
    }

}