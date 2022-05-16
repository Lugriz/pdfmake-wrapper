---
sidebar_position: 11
---

# TocItem

Creates an item for the table of content. You should create a table of content (**[Toc](./toc.md)**) first to link the items.

## constructor(text: **[IText](./text.md#itext)**)

```typescript
new TocItem(
    new Txt('Page 1').end
).end;
```

## tocStyle(style: IStyleDefinition): TocItem

Defines styles for the item.

```typescript
new TocItem(
    new Txt('Page 1').end
).tocStyle({
    color: 'blue',
    bold: true
}).end;
```

## tocMargin(margin: number | [number, number] | [number, number, number, number]): TocItem

Defines margins for the item.

```typescript
new TocItem(
    new Txt('Page 1').end
).tocMargin([20, 10]).end;
```

## Types

#### ITocItem

TocItem properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` tocItem: `boolean`;
* `readonly` tocStyle?: [`IStyleDefinition`](#istyledefinition);
* `readonly` tocMargin?: `number` | [`number`, `number`] | [`number`, `number`, `number`, `number`];
