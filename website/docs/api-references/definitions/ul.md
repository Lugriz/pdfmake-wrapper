---
sidebar_position: 2
---

# Ul

Creates an unordered list.

## constructor(items: any[])

```typescript
new Ul([
    'item 1',
    'item 2'
]).end;
```

## type(type: 'square' | 'circle' | 'none'): Ul

Defines marker type.

```typescript
new Ul([
    'item 1',
    'item 2'
]).type('square').end;
```

## markerColor(color: string): Ul

Sets the color to the marker.

```typescript
new Ul([
    'item 1',
    'item 2'
]).markerColor('blue').end;
```

## Types

#### IUl

UL properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` ul: `any`[];
* `readonly` type?: `number`;
* `readonly` markerColor?: `number`;
