/**
 * Abstract class that defines the common properties of a vector
 */
export abstract class Vector<T extends Vector<T, I>, I> {
    protected readonly content: any = {};

    /**
     * @returns  the built content 
     */
    get end(): I {
        return this.content as I;
    }

    /**
     * @param type Vector type
     */
    constructor(type: string) {
        this.content.type = type;
    }

    /**
     * Sets a color to the vector
     * @param color The color
     * @returns T
     */
    public color(color: string): T {
        this.content.color = color;
        return this as any;
    }

    /**
     * Sets a color to the line
     * @param lineColor the color
     * @returns T
     */
    public lineColor(lineColor: string): T {
        this.content.lineColor = lineColor;
        return this as any;
    }

    /**
     * Sets the width of the line
     * @param lineWidth the width
     * @returns T
     */
    public lineWidth(lineWidth: number): T {
        this.content.lineWidth = lineWidth;
        return this as any;
    }

    /**
     * Defines the boder type of a line
     * @param type 'round' | 'square'
     * @returns T
     */
    public lineCap(type: 'round' | 'square'): T {
        this.content.lineCap = type;
        return this as any;
    }

    /**
     * Sets opacity to the vector
     * @param fillOpacity the number of opacity
     * @returns T
     */
    public fillOpacity(fillOpacity: number): T {
        this.content.fillOpacity = fillOpacity;
        return this as any;
    }

    /**
     * Sets a linear gradient to the vector
     * @param linearGradient an array of given colors
     * @returns T
     */
    public linearGradient(linearGradient: string[]): T {
        this.content.linearGradient = linearGradient;
        return this as any;
    }

    /**
     * Sets a dash on the line of the vector
     * @param length The length of the dash
     * @returns T
     */
    public dash(length: number): T {
        this.content.dash = { length };
        return this as any;
    }
}