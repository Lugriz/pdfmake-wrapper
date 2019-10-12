
interface IVFS {
    vfs: { [propName: string]: string }
}

/**
 * Defines the type of the generated fonts
 */
export interface IFonts {
    pdfMake: IVFS;
}