/**
 * Interface that defines a layout of a table
 */
export interface ICustomTableLayout {
    hLineWidth?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    vLineWidth?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    hLineColor?: (rowIndex?: number, node?: any, columnIndex?: number) => string;
    vLineColor?: (rowIndex?: number, node?: any, columnIndex?: number) => string;
    hLineStyle?: (rowIndex?: number, node?: any, columnIndex?: number) => any;
    vLineStyle?: (rowIndex?: number, node?: any, columnIndex?: number) => any;
    paddingLeft?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    paddingRight?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    paddingTop?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    paddingBottom?: (rowIndex?: number, node?: any, columnIndex?: number) => number;
    fillColor?: (rowIndex?: number, node?: any, columnIndex?: number) => string;    
    defaultBorder?: boolean;    
}
