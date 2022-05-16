---
sidebar_position: 3
---

# Ol

Creates an ordered list.

## constructor(items: any[])

```typescript
new Ol([
    'item 1',
    'item 2'
]).end;
```

## type(type: 'lower-alpha' | 'upper-alpha' | 'upper-roman' | 'lower-roman' | 'none'): Ol

Defines marker type.

```typescript
new Ol([
    'item 1',
    'item 2'
]).type('lower-roman').end;
```

## reversed(): Ol

Orders the list in descending mode.

```typescript
new Ol([
    'item 1',
    'item 2'
]).reversed().end;
```

## separator(separator: string | [string, string]): Ol

Changes the separator. By default, it's a dot (**.**). When an array is passed, the first position will be applied before the number and the second one will be applied after it.

```typescript
new Ol([
    'item 1',
    'item 2'
]).separator('-').end;

// adding a separator before and after the number
new Ol([
    'item 1',
    'item 2'
]).separator(['*', '-']).end;
```

## start(start: number): Ol

Defines the initial number in the list.

```typescript
new Ol([
    'item 1',
    'item 2'
]).start(10).end;
```

## markerColor(color: string): Ol

Sets the color to the marker.

```typescript
new Ol([
    'item 1',
    'item 2'
]).markerColor('blue').end;
```

## Types

#### IOl

Ol properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` ol: `any`[];
* `readonly` separator?: `string` | [`string`, `string`];
* `readonly` reversed?: `boolean`;
* `readonly` start?: `number`;
* `readonly` type?: `number`;
* `readonly` markerColor?: `number`;
