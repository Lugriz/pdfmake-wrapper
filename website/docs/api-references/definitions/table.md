---
sidebar_position: 14
---

# Table

Creates a table.

## constructor(body: any[][])

By default, the first position (0) in principal array is considered as a header.

```typescript
new Table([
    // By default, first position is considered a header
    [ 'Header 1', 'Header 2'],
    [ 'Column 1', 'Column 2']
]).end;
```

## headerRows(rows: number): Table

Defines the number of rows will be treat as headers.

```typescript
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).headerRows(2).end;
```

## widths(widths: number | '*' | 'auto' | (string | number)[]): Table

Defines columns width.

```typescript
// Applying 'auto' for each column
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).widths('auto').end;

// Defining sizes for each column
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).widths([100, 150]).end;
```

## heights(heights: (row: number) => number | number | number[]): Table

Defines rows height.

```typescript
// Defining 100px 
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).heights(100).end;

// Defining rows height dinamically
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).heights((rowIndex: number) => {
    return rowIndex % 2 == 0 ? 50 : 20;
}).end;
```

## dontBreakRows(apply: boolean): Table

Moves the table to the next page when it is going to be breaking (when the table is divided for the page limit).

```typescript
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).dontBreakRows(true).end;
```

## keepWithHeaderRows(rows: number): Table

Defines the number of rows are held next to the header when page breaking.

```typescript
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'header 1.1', 'Header 2.1']
]).keepWithHeaderRows(1).end;
```

## layout(layout: 'lightHorizontalLines' | 'noBorders' | 'headerLineOnly' | **[ICustomTableLayout](#icustomtablelayout)**): Table

Defines a predefined layout (style) or a custom one.

```typescript
// Using a predefined layout
new Table([
    [ 'Header 1', 'Header 2'],
    [ 'Column 1', 'Column 2']
]).layout('lightHorizontalLines').end;

// Using a custom layout
new Table([
    // By default, first position is considered a header
    [ 'Header 1', 'Header 2'],
    [ 'Column 1', 'Column 2']
]).layout({
    fillColor: () => '#CCCCCC',
    ...
}).end;
```

## Types

#### ITable

Defines table properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` table: [`ITableBody`](#itablebody);
* `readonly` layout?: `string` | [`ICustomTableLayout`](#icustomtablelayout);

#### ITableBody

Defines table body properties, this is only used internally by **[ITable](#itable)** type.

* `readonly` widths?: `string` | `number` | ( `string` | `number` )[];
* `readonly` heights?: `(row: number) => (number | number[])` | `number` | `number`[];
* `readonly` body: `any`[][];
* `readonly` dontBreakRows?: `boolean`;
* `readonly` keepWithHeaderRows?: `number`;

#### ICustomTableLayout

Custom table layout properties.

* hLineWidth?: `(i?:number, node?:any, columnIndex?:any) => number`;
* vLineWidth?: `(i?:number, node?:any, columnIndex?:any) => number`;
* hLineColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* vLineColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* hLineStyle?: `(i?:number, node?:any, columnIndex?:any) => any`;
* vLineStyle?: `(i?:number, node?:any, columnIndex?:any) => any`;
* paddingLeft?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingRight?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingTop?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingBottom?: `(i?:number, node?:any, columnIndex?:any) => number`;
* fillColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* defaultBorder?: `boolean`;