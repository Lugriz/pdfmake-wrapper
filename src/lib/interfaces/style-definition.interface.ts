import { IContentDefinition, IPoint } from '.';

/**
 * Interface that defines the style definition type
 */
export interface IStyleDefinition extends IContentDefinition {
    readonly fontSize?: number;
    readonly width?: number;
    readonly height?: number;
    readonly alignment?: 'center' | 'left' | 'right' | 'justify';
    readonly bold?: boolean;
    readonly italics?: boolean;
    readonly margin?: number | [number, number] | [number, number, number, number];
    readonly link?: string;
    readonly linkToPage?: number;
    readonly noWrap?: boolean;
    readonly background?: string;
    readonly style?: string | string[];
    readonly color?: string;
    readonly decoration?: 'underline' | 'lineThrough' | 'overline';
    readonly decorationStyle?: 'dashed' | 'dotted' | 'double' | 'wavy';
    readonly decorationColor?: string;
    readonly fontFeatures?: ('smcp' | 'c2sc' | 'onum')[];
    readonly absolutePosition?: IPoint;
    readonly relativePosition?: IPoint;
    readonly font?: string;
    readonly lineHeight?: number;
}