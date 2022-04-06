---
sidebar_position: 17
---

# Vector

This is an abstract class that is used to extend shapes (line, rect, ellipse and polyline). You won't need this class directly, but you'll need to know what are the methods are available for shapes.

:::info KEEP IN MIND
**T** (as a return type) represents the generic type is used at that moment. **"(Any definition instance)"** means these methods can be used on any vector (Line, Ellipse, Rect and Polyline).
:::

## color(color: string): T

Sets the vector color.

```typescript
(Any definition instance).color('blue').end;
```

## lineColor(lineColor: string): T

Sets the vector color line.

```typescript
(Any definition instance).lineColor('blue').end;
```

## lineWidth(lineWidth: number): T

Sets the line width.

```typescript
(Any definition instance).lineWidth(5).end;
```

## lineCap(type: 'round' | 'square'): T

Defines the line caps (corners).

```typescript
(Any definition instance).lineCap('round').end;
```

## fillOpacity(fillOpacity: number): T

Sets vector opacity.

```typescript
(Any definition instance).fillOpacity(0.5).end;
```

## linearGradient(linearGradient: string[]): T

Sets a linear gradient. It receives and array of colors.

```typescript
(Any definition instance).linearGradient(['blue', 'red']).end;
```

## dash(length: number): T

Defines a dashed line with a length of each dash.

```typescript
(Any definition instance).dash(5).end;
```

## Types

#### IVector

Shapes (line, ellipse, rect and polyline) interfaces extend from this one.

* `readonly` type: `string`;
* `readonly` color?: `string`;
* `readonly` lineColor?: `string`;
* `readonly` lineWidth?: `number`;
* `readonly` lineCap?: `string`;
* `readonly` dash?: `{ length: number }`;
* `readonly` fillOpacity?: `number`;
* `readonly` linearGradient?: `string`[];