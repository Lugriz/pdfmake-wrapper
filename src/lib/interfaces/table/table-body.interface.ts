/**
 * Interface that defines a table body
 */

export interface ITableBody {
    widths?: string | number | ( string | number )[];
    heights?: (row: number) => (number | number[]) | number | number[];
    body: any[][];
    dontBreakRows?: boolean;
    keepWithHeaderRows?: number;
}
