import { ContentDefinition } from './content-definition';

/**
 * Class that contains the global style definitions
 */

export abstract class StyleDefinition<T extends StyleDefinition<T, I>, I> extends ContentDefinition<T, I> {

    /**
     * Set the fontSize
     * @param size Size 
     */

    public fontSize(size: number): T {
        this.content.fontSize = size;
        return this as any;
    }

    /**
     * Set the width
     * @param size Size 
     */

    public width(size: number): T {
        this.content.width = size;
        return this as any;
    }

    /**
     * Set the height
     * @param size Size 
     */

    public height(size: number): T {
        this.content.height = size;
        return this as any;
    }

    /**
     * Set the alignment
     * @param align The alignment
     */

    public alignment(align: string): T {
        this.content.alignment = align;
        return this as any;
    }

    /**
     * Set bold text
     */

    public bold(): T {
        this.content.bold = true;
        return this as any;
    }

    /**
     * Set italics text
     */

    public italics(): T {
        this.content.italics = true;
        return this as any;
    }

    /**
     * Set tbe margin 
     * @param margin Margins
     */

    public margin(margin: number | [number, number] | [number, number, number, number]): T {
        this.content.margin = true;
        return this as any;
    }

    /**
     * Set style 
     */

    public style(style: string | string[]): T {
        this.content.style = style;
        return this as any;
    }

    /**
     * Set color 
     */

    public color(color: string): T {
        this.content.color = color;
        return this as any;
    }

    /**
     * Set background 
     */

    public background(background: string): T {
        this.content.background = background;
        return this as any;
    }

    /**
     * Set link 
     */

    public link(link: string): T {
        this.content.link = link;
        return this as any;
    }

    /**
     * Set noWrap 
     */

    public noWrap(noWrap: boolean): T {
        this.content.noWrap = noWrap;
        return this as any;
    }
}