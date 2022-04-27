---
sidebar_position: 20
---

# Ellipse

Creates a vector ellipse (extends from **[vector](./vector.md)**). This should be used with **[Canvas](./canvas.md)**.

## constructor(point: number | [number, number], radius: number | [number, number])

It receives the coords where ellipse will be displayed and the radius (size).

```typescript
// creates a ellipse where x and y get 10 and radius1 and radius2 get 50
new Ellipse(10, 50).end;

// Creates a ellipse where x = 10 and y = 50
// and radius1 = 50 and radius2 = 10
new Ellipse([10, 50], [50, 10]).end;
```

## Types

#### IEllipse

Ellipse properties, it extends from **[IVector](./canvas.md#ivector)**.

* `readonly` x?: `number`;
* `readonly` y?: `number`;
* `readonly` r1?: `number`;
* `readonly` r2?: `number`;
