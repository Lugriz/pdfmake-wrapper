import { IInfo, IImg, ICreatePDF } from './interfaces/interfaces';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


// declare var pdfMake: any;

/**
 * Main class that contains the essencial for build the PDF
 */

export class PdfMakeWrapper {

    /**
     * It defines the pdf definition
     */

    private definition: any = {
        content: []
    };

    constructor() {}

    /**
     * It adds content to the PDF body
     * @param content any content
     */

    public add(content: any): void {
        this.definition.content.push( content );
    }

    /**
     * Preload images setting a name to each images
     * 
     * @example 
     * { pricture1: 'data:image/jpeg;base64...' } or { pricture1: new Img('/path/image.png').end }
     * 
     * @param imgs Ditionary of default images
     */

    public images(imgs: { [propName: string]: IImg | string }): void {

        let newImgs: any = {};

        for (let p in imgs) {

            if (typeof imgs[ p ] === 'string' && /^data:image\/(jpeg|png|jpg);base64,/.test( imgs[ p ] as string ) ) {
                newImgs[ p ] = imgs[ p ];

            // it's probably that the first condition is not passed for the regex condition, but it's a string yet
            } else if (typeof imgs[ p ] !== 'string') {
                newImgs[ p ] = (imgs[ p ] as IImg).image;
            }

        }

        this.definition.images = newImgs;
    }

    /**
     * Preload styles setting a name to each custom styles
     * 
     * @example 
     * { style1: { bold: true, fontSize: 15 } }
     * 
     * @param styles Dictionary of default styles
     */

    public styles(styles: { [propName: string]: { [propName: string]: string | number | boolean } }): void {
        this.definition.styles = styles;
    }

    /**
     * Preload styles setting name to each custom style that is applied to whole PDF
     * 
     * @example 
     * { style1: { bold: true, fontSize: 15 } }
     * 
     * @param styles Dictionary of default styles
     */

    public defaultStyle(styles: { [propName: string]: { [propName: string]: string | number | boolean } }): void {
        this.definition.defaultStyle = styles;
    }

    /**
     * Set a header definition
     * @param header Data that is applied as header
     */

    public header(header: any): void {
        this.definition.header = header;
    }

    /**
     * Set a footer definition
     * @param footer Data that is applied as footer
     */
    
    public footer(footer: any): void {
        this.definition.footer = footer;
    }

    /**
     * Set a background layer definition
     * @param background Data that is applied as background
     */
    
    public background(background: any): void {
        this.definition.background = background;
    }

    /**
     * Set the page size
     * @param size The page size
     */

    public pageSize(size: string): void {
        this.definition.pageSize = size;
    }

    /**
     * Set the page margin
     * @param margin The page margin
     */

    public pageMargins(margin: number | [number, number] | [number, number, number, number]): void {
        this.definition.pageMargins = margin;
    }

    /**
     * Set the page orientation
     * @param orientation the orientation
     */

    public pageOrientation(orientation: string): void {
        this.definition.pageOrientation = orientation;
    }

    /**
     * Break the page before the condition defined
     * @param breakBefore Function that defines the break of the page
     */

    public pageBreakBefore(breakBefore: (currentNode: any, followingNodesOnPage?: any, nodesOnNextPage?: any, previousNodesOnPage?: any) => boolean): void {
        this.definition.pageBreakBefore = breakBefore;
    }

    /**
     * Set metadata to the document, you can set a custom metadata
     * @param info The metadata 
     */

    public info(info: IInfo): void {
        this.definition.info = info;
    }

    /**
     * It defines if use compress
     * @param compress 
     */

    public compress(compress: boolean): void {
        this.definition.compress = compress;
    }

    /** 
     * Set a raw content
    */

    public rawContent(content: any): void {
        this.definition.content = content;
    }

    /**
     * Create the PDF
     */

    public create(): ICreatePDF {
        return pdfMake.createPdf( this.definition ) as ICreatePDF;
    }
}