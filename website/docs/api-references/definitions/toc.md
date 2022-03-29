---
sidebar_position: 10
---

# Toc

Creates a table of content. This works next to **[TocItem](./toc-item.md)** definition.

## constructor(code: string)

```typescript
new Toc('Table of content').end;
```

## textStyle(style: **[IStyleDefinition](../style-definition.md#istyledefinition)**): Toc

Defines the text style for toc items. It allows all the available methods **IStyleDefinition** provides as properties.

```typescript
new Toc('Table of content').textStyle({
    italics: true,
    fontSize: 10
}).end;
```

## numberStyle(style: **[IStyleDefinition](../style-definition.md#istyledefinition)**): Toc

Defines the number (page number) style for toc items. It allows all the available methods **IStyleDefinition** provides as properties.

```typescript
new Toc('Table of content').numberStyle({
    bold: true,
    fontSize: 15
}).end;
```

## textMargin(margin: number | [number, number] | [number, number, number, number]): Toc

Defines the text (toc items) margins.

```typescript
new Toc('Table of content').textMargin([50, 5]).end;
```

## Types

#### IToc

Toc properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` title: `any`;
* `readonly` numberStyle?: **[`IStyleDefinition`](../style-definition.md#istyledefinition)**;
* `readonly` textStyle?: **[`IStyleDefinition`](../style-definition.md#istyledefinition)**;
* `readonly` textMargin?: `number` | [`number`, `number`] | [`number`, `number`, `number`, `number`];
