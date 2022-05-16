---
sidebar_position: 2
---

# Working with tables

Using tables are pretty common in a PDF document, so we will cover a section that explains how to work with them by using most of their features to create a complex table.

In this example, we are going to create a table of contacts separated alphabetically by name.

## Creating the table

Let's create a table, defining the headers and some contacts. Remember that the first subarray is treated as headers.

```typescript
new Table([
    ['Name', 'Address', 'Email', 'Phone'],
    ['Anastasia', 'Some direction 1', 'anastasia@domain.com', '123 4566 187'],
    ['Alexander', 'Some direction 2', 'alexander@domain.com', '123 4566 187'],
    ['Clementine', 'Some direction 3', 'clementine@domain.com', '123 4566 187'],
    ['Chelsey', 'Some direction 4', 'chelsey@domain.com', '123 4566 187'],
    ['Nicholas', 'Some direction 5', 'nicholas@domain.com', '123 4566 187'],
]).end;
```

## Resizing the table and headers

Now, we want to customize the width of the columns, we just need to use the **widths** method and apply the size we want on each column.

```typescript
new Table([
    ...
]).widths([100, 150, '*', 100]).end;
```

also, we want to resize the height of the headers to distinguish them from the rows. To do that we will call the method **heights** by establishing the size.

```typescript
new Table([
    ...
])
.widths(...)
.heights(rowIndex => rowIndex === 0 ? 25 : 0)
.end;
```

When the row number matches the row 0, 30 will be applied as the height.

## Adding format to headers

We will make the headers bold to make them look better, we need to use **Txt** definition (because we will be adding styles to the text) and call the **bold** method.

```typescript
new Table([
    [
        new Txt('Name').bold().end,
        new Txt('Address').bold().end,
        new Txt('Email').bold().end,
        new Txt('Phone').bold().end
    ],
    // Rows
    ...
])
.widths(...)
.heights(...)
.end;
```

## Combining columns

Do you remember we mentioned to separate rows by name? Well, we will do it using **colSpan** method. This method is part of **Cell** definition. As mentioned in **[Cell](./../api-references/definitions/cell.md)** API reference, this must receive an object instead of literal string.

```typescript
new Table([
    [
        new Txt('Name').bold().end,
        new Txt('Address').bold().end,
        new Txt('Email').bold().end,
        new Txt('Phone').bold().end
    ],
    [new Cell(new Txt('A').end).colSpan(4).end, null, null, null],
    ['Anastasia', 'Some direction 1', 'anastasia@domain.com', '123 4566 187'],
    ['Alexander', 'Some direction 2', 'alexander@domain.com', '123 4566 187'],
    [new Cell(new Txt('C').end).colSpan(4).end, null, null, null],
    ['Clementine', 'Some direction 3', 'clementine@domain.com', '123 4566 187'],
    ['Chelsey', 'Some direction 4', 'chelsey@domain.com', '123 4566 187'],
    [new Cell(new Txt('N').end).colSpan(4).end, null, null, null],
    ['Nicholas', 'Some direction 5', 'nicholas@domain.com', '123 4566 187'],
])
.widths(...)
.heights(...)
.end;
```

:::info NOTE
All rows (subarrays) must contain the same number of elements, even if you are using  **colSpan** and **colSpan** must not exceed the length of the subarray.
:::

## Styling the table

Lastly, we can style the table using some of the predefined layouts or create a custom one. First, we can choose one of the predefined layouts and see how it looks. Styling a table is easy, we just need to call **layout** method and apply the style.

```typescript
new Table([
    ...
])
.widths(...)
.heights(...)
.layout('lightHorizontalLines')
.end;
```

This looks good, but we want some colors and custom lines. Let's define our own layout. Instead of passing a string, we need to pass an object that defines our layout.

We'll change the header color to *#6096ba* and leave all rows as *#ffffff*. To change the color, we will use **fillColor** property which receives a function. As we know, header is the first row, so we will return *#6096ba*, when **rowIndex** matches 0.

```typescript
new Table([
    ...
])
.widths(...)
.heights(...)
.layout({
    fillColor: (rowIndex) => {
        // row 0 is the header
        if (rowIndex === 0) {
          return '#6096ba';
        }

        return '#ffffff';
    }
})
.end;
```

Also, we want to remove the vertical lines. We'll use **vLineWidth** property and return 0 as the width;

```typescript
new Table([
    ...
])
.widths(...)
.heights(...)
.layout({
    ...

    vLineWidth: () => 0,
})
.end;
```

We will tweak horizontal lines changing the color to *#8b8c89* using **hLineColor** property.

```typescript
new Table([
    ...
])
.widths(...)
.heights(...)
.layout({
    ...

    hLineColor: () => '#8b8c89',
})
.end;
```

Finally, we will change the color to *#a3cef1* of those cells that work as dividers (A, C, N). In this case, we will call **fillColor** method from **Cell** definition, this is an easy approach, instead of creating conditions in the **layout** method (but this will depends on requirements).

```typescript
new Table([
    ...
    [new Cell(new Txt('A').end).colSpan(4).fillColor('#a3cef1').end, null, null, null],
    ...
    [new Cell(new Txt('C').end).colSpan(4).fillColor('#a3cef1').end, null, null, null],
    ...
    [new Cell(new Txt('N').end).colSpan(4).fillColor('#a3cef1').end, null, null, null],
    ...
])
.widths(...)
.heights(...)
.layout(...)
.end;
```

And it's done, we have a custom table! You can see the result **[here](https://stackblitz.com/edit/typescript-ubysjv?file=index.ts)**.

:::info NOTE
This was just an example of using tables, you can always structure your code in a clean way to improve readability.
:::

To know more about tables, go to **[API Refecences](../api-references/definitions/table.md)**.
