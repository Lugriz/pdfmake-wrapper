---
sidebar_position: 15
---

# Cell

Helps to modify a cell in a **[Table](./table.md)**.

## constructor(content: Record<string, any\>)

Content should be trated as a cell for modification.

:::info KEEP IN MIND
**Cell** receives an object as a parameter, if you want to use a text, use **[Txt](./text.md)** instead of literal text.
:::

```typescript
new Cell(
    new Txt('Column').bold().end
).end;
```

## colSpan(cols: number): Cell

Combines columns into one.

```typescript
new Table([
    [
        'Column 1'
        new Cell(
            new Txt('Column 2').bold().end
        ).colSpan(2).end
    ],
    [
        'Column 1'
        'Column 2',
        'Column 3'
    ]
]).end;
```

## rowSpan(rows: number): Cell

Combines rows into one.

```typescript
new Table([
    [
        new Cell(
            new Txt('Column 1').bold().end
        ).rowSpan(2).end,
        'Column 2',
        'Column 3'
    ],
    [
        null, // This value will be replaced by the extended row
        'Column 2',
        'Column 3'
    ]
]).end;
```

## fillColor(color: string): Cell

Sets a cell color.

```typescript
new Table([
    [
        new Cell(
            new Txt('Column 1').bold().end
        ).fillColor('#fefefe').end,
        'Column 2',
        'Column 3'
    ],
    [
        'Column 1',
        'Column 2',
        'Column 3'
    ]
]).end;
```

## border(border: [boolean] | [boolean, boolean] | [boolean, boolean, boolean, boolean]): Cell

Defines chich borders should be displayed. You can pass an array of 1, 2 or 4 booleans.

```typescript
new Table([
    [
        new Cell(
            new Txt('Column 1').bold().end
        ).border([false, true]).end,
        'Column 2',
        'Column 3'
    ],
    [
        'Column 1',
        'Column 2',
        'Column 3'
    ]
]).end;
```

## Types

#### ICell

Defines cell properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` colSpan?: `number`;
* `readonly` rowSpan?: `number`;
* `readonly` fillColor?: `string`;
* `readonly` border?: [`boolean`] | [`boolean`, `boolean`] | [`boolean`, `boolean`, `boolean`, `boolean`];