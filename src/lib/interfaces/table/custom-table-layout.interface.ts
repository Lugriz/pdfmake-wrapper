/**
 * Interface that defines a layout of a table
 */

export interface ICustomTableLayout {
    hLineWidth?: (i?:number, node?:any, columnIndex?:any) => number;
    vLineWidth?: (i?:number, node?:any, columnIndex?:any) => number;
    hLineColor?: (i?:number, node?:any, columnIndex?:any) => string;
    vLineColor?: (i?:number, node?:any, columnIndex?:any) => string;
    hLineStyle?: (i?:number, node?:any, columnIndex?:any) => any;
    vLineStyle?: (i?:number, node?:any, columnIndex?:any) => any;
    paddingLeft?: (i?:number, node?:any, columnIndex?:any) => number;
    paddingRight?: (i?:number, node?:any, columnIndex?:any) => number;
    paddingTop?: (i?:number, node?:any, columnIndex?:any) => number;
    paddingBottom?: (i?:number, node?:any, columnIndex?:any) => number;
    fillColor?: (i?:number, node?:any, columnIndex?:any) => string;    
    defaultBorder?: boolean;    
}
