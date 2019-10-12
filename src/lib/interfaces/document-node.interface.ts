import { IText } from './text.interface';

/**
 * More about: https://pdfmake.github.io/docs/document-definition-object/page/#dynamically-control-page-breaks-for-instance-to-avoid-orphan-children
 * Defines the format of a node in the document
 */
export interface IDocumentNode {
    readonly id?: any;
    readonly headlineLevel?: any;
    readonly text?: string | (string | IText)[];
    readonly ul?: any;
    readonly ol?: any;
    readonly table?: any;
    readonly image?: any;
    readonly qr?: any;
    readonly canvas?: any;
    readonly columns?: any;
    readonly style?: any;
    readonly pageOrientation?: string;
    readonly pageNumbers?: number[];
    readonly pages?: number;
    readonly stack?: boolean;
    readonly startPosition?: any;
    [propName: string]: any;
}