import { ICreatePDF, IFontTypes, IFonts } from './interfaces';
import { DocumentDefinition } from './document-definition';
import pdfMake from 'pdfmake/build/pdfmake';

/**
 * Main class that contains the essencial for build the PDF
 */
export class PdfMakeWrapper extends DocumentDefinition {

    private static usedFont: { font: string };

    constructor() {
        super();

        if (PdfMakeWrapper.usedFont) {
            this.defaultStyle(PdfMakeWrapper.usedFont);
        }
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

        if (fontTypesConfig) {
            pdfMake.fonts = fontTypesConfig;
        }
    }

    /**
     * Sets the font that will be used to generate a PDF
     * @param fontName The font type configuration name
     */
    public static useFont(fontName: string): void {
        PdfMakeWrapper.usedFont = { font: fontName };
    }

    /**
     * Create the PDF
     */
    public create(): ICreatePDF {
        return pdfMake.createPdf(this.getDefinition()) as ICreatePDF;
    }

    // ======================== HELPERS =========================

    /**
     * It returns new lines
     * @param num numbers of newline
     * @deprecated This will be deprecated in next minor version
     */
    public ln(num: number = 1): string {
        if (num < 1) num = 1;
        
        return '\n'.repeat( num );
    }
}