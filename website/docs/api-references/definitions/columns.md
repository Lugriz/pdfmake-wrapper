---
sidebar_position: 5
---

# Columns

Creates columns. This is useful for structuring content by columns.

## constructor(columns: any[])

```typescript
new Columns([
    new Txt('Column 1').end,
    'Column 2'
]).end;
```

## columnGap(space: number): Columns

Defines the space between columns.

```typescript
new Columns([
    new Txt('Column 1').end,
    'Column 2'
]).columnGap(30).end;
```

## Types

#### IColumns

Column properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` columns: `any`[];
* `readonly` columnGap?: `number`;
