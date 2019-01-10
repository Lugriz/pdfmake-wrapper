/**
 * The main generic class that defines the main properties of the class, T: defines the TYPE to use and I defined the interface that of "content" property will use
 */

export abstract class ContentDefinition<T extends ContentDefinition<T, I>, I> {

    /**
     * The content that is shaped on every called method
     */
    
    protected readonly content: any = {};

    /**
     * @returns  the built content 
     */

    get end(): I {
        return this.content as I;
    }

    /**
     * Break a page
     * @param brk when it break a page (before, after)
     */

    public pageBreak(brk: string): T {
        this.content.pageBreak = brk;
        return this as any;
    }

    /**
     * Change the orientation with a page break
     * @param orientation The orientation
     * @param brk the form of page break
     */

    public pageOrientationAndBreak(orientation: string, brk: string): T {
        this.content.pageOrientation = orientation;
        this.content.pageBreak = brk;
        return this as any;
    }

}