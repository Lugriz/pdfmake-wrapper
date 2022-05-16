---
sidebar_position: 19
---

# Rect

Creates a vector rect (extends from **[vector](./vector.md)**). This should be used with **[Canvas](./canvas.md)**.

## constructor(point: number | [number, number], size: number | [number, number])

```typescript
// creates a rect where x and y get 10 and width and height get 50
new Rect(10, 50).end;

// Creates a rect where x = 10 and y = 50
// and width = 50 and height = 10
new Rect([10, 50], [50, 10]).end;
```

## round(num: number): Rect

Defines border radius.

```typescript
new Rect(10, 10).round(50).end;
```

## Types

#### IRect

Rect properties, it extends from **[IVector](./canvas.md#ivector)**.

* `readonly` x?: `number`;
* `readonly` y?: `number`;
* `readonly` w?: `number`;
* `readonly` h?: `number`;
* `readonly` r?: `number`;
