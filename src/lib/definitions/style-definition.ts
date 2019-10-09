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

    public alignment(align: 'center' | 'left' | 'right' | 'justify'): T {
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
     * Set a margin 
     * @param margin Margins
     */

    public margin(margin: number | [number, number] | [number, number, number, number]): T {
        this.content.margin = margin;
        return this as any;
    }

    /**
     * Set a style 
     */

    public style(style: string | string[]): T {
        this.content.style = style;
        return this as any;
    }

    /**
     * Set a color 
     */

    public color(color: string): T {
        this.content.color = color;
        return this as any;
    }

    /**
     * Set a background 
     */

    public background(background: string): T {
        this.content.background = background;
        return this as any;
    }

    /**
     * Set a link 
     */

    public link(link: string): T {
        this.content.link = link;
        return this as any;
    }

    /**
     * Set a link to any page
     */

    public linkToPage(page: number): T {
        this.content.linkToPage = page;
        return this as any;
    }

    /**
     * Set noWrap 
     */

    public noWrap(): T {
        this.content.noWrap = true;
        return this as any;
    }

    /**
     * Set decoration 
     */

    public decoration(decoration: 'underline' | 'lineThrough' | 'overline'): T {
        this.content.decoration = decoration;
        return this as any;
    }

    /**
     * Set decorationStyle 
     */

    public decorationStyle(decorationStyle: 'dashed' | 'dotted' | 'double' | 'wavy'): T {
        this.content.decorationStyle = decorationStyle;
        return this as any;
    }

    /**
     * Set decorationColor 
     */

    public decorationColor(decorationColor: string): T {
        this.content.decorationColor = decorationColor;
        return this as any;
    }

    /**
     * Set fontFeatures 
     */

    public fontFeatures(fontFeatures: ('smcp' | 'c2sc' | 'onum')[]): T {
        this.content.fontFeatures = fontFeatures;
        return this as any;
    }

    /**
     * Sets the content in an absolute position
     * @param x coord X
     * @param y coord Y
     */
    public absolutePosition(x: number, y: number): T {
        this.content.absolutePosition = { x, y };
        return this as any;
    }

    /**
     * Sets the content in an relative position
     * @param x coord X
     * @param y coord Y
     */
    public relativePosition(x: number, y: number): T {
        this.content.relativePosition = { x, y };
        return this as any;
    }
}