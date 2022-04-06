---
sidebar_position: 18
---

# Line

Creates a vector line (extends from **[vector](./vector.md)**). This should be used with **[Canvas](./canvas.md)**.

## constructor(point1: number | [number, number], point2: number | [number, number])

Defines where the line should start and end.

```typescript
// creates a line which starts in position 10 (x, y) and ends in position 50 (x, y), drawing a diagonal line
new Line(10, 50).end;

// point1 starts in x = 10 and y = 10
// point2 finishes in x = 50 and y = 10
// drawing an horizontal line
new Line([10, 10], [50, 10]).end;
```

## Types

#### ILine

Line properties, it extends from **[IVector](./canvas.md#ivector)**.

* `readonly` x1?: `number`;
* `readonly` x2?: `number`;
* `readonly` y1?: `number`;
* `readonly` y2?: `number`;
