import { StyleDefinition } from './style-definition';
import { ISVG } from '../interfaces';

/**
 * Class to create an SVG definition
 */
export class SVG extends StyleDefinition<SVG, ISVG> {

    /**
     * @param svg {string} The svg
     */
    constructor(svg: string) {
        super();
        this.content.svg = svg;
    }

    /**
     * It fits the svg
     * @param fit {[ number, number ]} 
     */
    public fit(fit: [number, number]): SVG {
        this.content.fit = fit;
        return this;
    }
}