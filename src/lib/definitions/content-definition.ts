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
    public pageBreak(brk: 'before' | 'after'): T {
        this.content.pageBreak = brk;
        return this as any;
    }

    /**
     * Change the orientation with a page break
     * @param orientation The orientation
     * @param brk the form of page break
     */
    public pageOrientationAndBreak(orientation: 'landscape' | 'portrait', brk: 'before' | 'after'): T {
        this.content.pageOrientation = orientation;
        this.content.pageBreak = brk;
        return this as any;
    }

    /**
     * Helper to use with automatically page break
     * @param data Any data
     */
    public headlineLevel(data: any): T {
        this.content.headlineLevel = data;
        return this as any;
    }

    /**
     * Sets an ID to an object, This is useful for referencing an object
     * @param id ID
     */
    public id(id: string): T {
        this.content.id = id;
        return this as  any;
    }

}