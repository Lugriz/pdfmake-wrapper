---
sidebar_position: 21
---

# Polyline

Creates a polyline vector (extends from **[vector](./vector.md)**). This should be used with **[Canvas](./canvas.md)**.

## constructor(points: IPoint[] = [])

Gets an array of points.

```typescript
new Polyline([
    { x: 10, y: 10 },
    { x: 35, y: 40 },
    { x: 100, y: 40 },
    { x: 125, y: 10 }
]).end
```

## closePath(): Polyline

Closes the first and last points.

```typescript
new Polyline([
    { x: 10, y: 10 },
    { x: 35, y: 40 },
    { x: 100, y: 40 },
    { x: 125, y: 10 }
]).closePath().end
```

## addPoint(x: number, y: number): Polyline

Adds a point. This can be useful when building a polyline dynamically, but you can use what you prefer (contructor option or addPoint method option).

```typescript
new Polyline([
    { x: 10, y: 10 },
    { x: 35, y: 40 },
    { x: 100, y: 40 }
])
.addPoint(125, 10)
.end
```

## Types

#### IPolyline

Polyline properties, it extends from **[IVector](./canvas.md#ivector)**.

* `readonly` closePath?: `boolean`;
* `readonly` points?: [`IPoint`](#ipoint)[];

#### IPoint

Point properties.

* `readonly` x: `number`;
* `readonly` y: `number`;
