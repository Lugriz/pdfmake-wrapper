---
sidebar_position: 8
---

# SVG

Creates a SVG object.

## constructor(svg: string)

```typescript
// If no width/height/fit is used, then dimensions from the svg element is used.
new SVG('<svg width="300" height="200" viewBox="0 0 300 200">...</svg>').end;
```

## fit(fit: [number, number]): Img

Fits the image inside a container, you can see it as a witdh and height in the same place.

```typescript
new SVG('...').fit([100, 100]).end;
```

## Types

#### ISVG

Svg properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` svg: `string`;
* `readonly` fit?: [`number`, `number`];
