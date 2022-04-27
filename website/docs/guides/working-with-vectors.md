---
sidebar_position: 5
---

# Working with vectors

Sometimes we want to draw some shapes in our PDF documents to make them look good and vectors help us to do it.

To use vectors you need to create a **[canvas](../api-references/definitions/canvas.md)** which is where vectors will be drawn.

In this example we are going to create a simple cover page.

:::info NOTE
Keep in mind that vectors are used for drawing rather than structuring content, you can use columns and stacks instead.
:::

First, we are going to create a **Canvas**:

```typescript
new Canvas([]).end
```

Inside the canvas we will add a **rect** and will place it in the bottom on the page. You need to add the coords and sizes to the **rect**.


```typescript
new Canvas([
    new Rect([0, 692], [597, 150]).end
]).end
```

To avoid page breaking when the size of the rect is higher than the page size, we can use `absolutePosition()` in the canvas and will apply `x` and `y` as 0.

```typescript
new Canvas([
    new Rect([0, 692], [597, 150]).end
]).absolutePosition(0, 0).end
```
After, we can add some shapes on the top of the page. We will add two **polyline** definition to draw those shapes.

```typescript
new Canvas([
    ...

    new Polyline([
        { x: 597, y: 0 },
        { x: 597, y: 300 },
        { x: 0, y: 0 },
      ])
        .closePath()
        .color('#2E8BC0')
        .lineColor('#2E8BC0').end,

    new Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 845 },
    { x: 597, y: 0 },
    ])
    .closePath()
    .color('#0C2D48')
    .lineColor('#0C2D48').end,
]).absolutePosition(0, 0).end
```

The first polyline will draw a triangle on the top-right side on the page and the second one on the left side.

:::info KEEP IN MIND
The order matters on the canvas, the last vector will be on top of the others.
:::

Now, just for tweaking the cover page and didactic purpose, we will add an ellipse on the left-top of the page.

```typescript
new Canvas([
    ...

    new Ellipse([100, 90], 50).color('#145DA0').end,
]).absolutePosition(0, 0).end
```

Finally, we will add a line and a title on the page.

```typescript
new Canvas([
    ...

    new Line([200, 745], [540, 745]).lineWidth(8).lineCap('round').end,
]).absolutePosition(0, 0).end
```

```typescript
pdf.add(
    new Txt('My Cover Page').fontSize(50).bold().absolutePosition(200, 680).end
);
```

You can see the result **[here](https://stackblitz.com/edit/typescript-2aat6b)**.
