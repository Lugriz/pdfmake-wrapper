/**
 * Interface that defines a table body
 */
export interface ITableBody {
    readonly widths?: string | number | ( string | number )[];
    readonly heights?: (rowIndex: number) => (number | number[]) | number | number[];
    readonly body: any[][];
    readonly dontBreakRows?: boolean;
    readonly keepWithHeaderRows?: number;
}
