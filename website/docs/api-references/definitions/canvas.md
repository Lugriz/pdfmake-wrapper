---
sidebar_position: 16
---

# Canvas

Creates a canvas to draw shapes.

## constructor(vectors: **[IVector](./vector.md#ivector)**[])

Receives an array of vectors (line, ellipse, rect and polyline).

```typescript
new Canvas([/* list of vectors */]).end;
```

:::tip TIP
You can create one canvas and pass all vectors in it, instead to create multiple canvas for each vector.
:::

## Types

#### ICanvas

Canvas properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` canvas: [`IVector`](#ivector)[];
