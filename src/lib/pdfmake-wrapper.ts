import { IInfo, IImg, ICreatePDF, IText, IFontTypes, IFonts, IStyleDefinition, IPermissions } from './interfaces';
import pdfMake from 'pdfmake/build/pdfmake';

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

    /**
     * The font config that is being used
     */
    private static usedFont: { font: string };

    constructor() {
        this.defaultStyle({});
    }

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
     * { picture1: 'data:image/jpeg;base64...' } or { picture1: await new Img('/path/image.png').build() }
     * 
     * @param imgs Dictionary of default images
     */
    public images(imgs: { [propName: string]: IImg | string }): void {
        const REGEX_BASE64_IMAGE: RegExp = /^data:image\/(jpeg|png|jpg);base64,/;
        const newImgs: any = {};

        for (let p in imgs) {

            if (typeof imgs[ p ] === 'string' && REGEX_BASE64_IMAGE.test( imgs[ p ] as string ) ) {
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
    public styles(styles: { [propName: string]: IStyleDefinition }): void {
        this.definition.styles = styles;
    }

    /**
     * Preload styles setting name to each custom style that is applied to whole PDF.
     * Some styles won't work
     * 
     * @example 
     * { style1: { bold: true, fontSize: 15 } }
     * 
     * @param styles Dictionary of default styles
     */
    public defaultStyle(styles: IStyleDefinition ): void {
        if (PdfMakeWrapper.usedFont) {
            styles = { ...styles, ...PdfMakeWrapper.usedFont };
        }

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
     * Set a watermark
    */
    public watermark(watermark: string | IText): void {
        this.definition.watermark = watermark;
    }

    /** 
     * Set a raw content
    */
    public rawContent(content: any): void {
        this.definition.content = content;
    }

    /**
     * Sets a password to the PDF to encrypt it and when an user wants to open the document
     * a popup will be shown to type the password
     * @param password 
     */
    public userPassword(password: string): void {
        this.definition.userPassword = password;
    }

    /**
     * Sets access privileges providing an owner password and the privileges setting
     * @param password The password
     * @param permissions The permission setting
     */
    public permissions(password: string, permissions: IPermissions): void {
        this.definition.ownerPassword = password;
        this.definition.permissions = permissions;
    }

    /**
     * Sets custom fonts. This changes the global font types
     * @param fonts {{ [propName: string]: string }} The generated fonts object
     * @param fontTypesConfig {{ [propName: string]: IFontTypes }} The font type configuration
     * 
     * @example
     * import { PdfMakeWrapper } from 'pdfmake-wrapper';
     * import customFonts 'path/to/custom/fonts';
     * 
     * PdfMakeWrapper.setFonts(
     *  customFonts,
     *  {
     *      customFonts: { // The property name can be any
     *          normal: 'custom-fonts.ttf',
     *          bold: 'custom-fonts-bold.ttf',
     *          italics: 'custom-fonts-italics.ttf',
     *          bolditalics: 'custom-fonts-bolditalics.ttf'
     *      },
     *      ...
     *  }
     * );
     */
    public static setFonts(fonts: IFonts, fontTypesConfig?: { [propName: string]: IFontTypes }): void {
        pdfMake.vfs = fonts.pdfMake.vfs;

        if (fontTypesConfig)
            pdfMake.fonts = fontTypesConfig;
    }

    /**
     * Sets the font that will be used to generate a PDF
     * @param fontName The font type configuration name
     */
    public static useFont(fontName: string): void {
        this.usedFont = { font: fontName };
    }

    /**
     * Create the PDF
     */
    public create(): ICreatePDF {
        return pdfMake.createPdf( this.definition ) as ICreatePDF;
    }

    // ======================== HELPERS =========================

    /**
     * It returns new lines
     * @param num numbers of newline
     */
    public ln(num: number = 1): string {
        if (num < 1) num = 1;
        
        return '\n'.repeat( num );
    }
}