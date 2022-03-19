---
sidebar_position: 1
---

# Txt

Creates a text.

## constructor(_text: string | (string | IText)[])

```typescript
// Single text.
new Txt('Hello world!').end;

// Adding styles to text
new Txt('Hello world!').alignment('center').italics().end;
```

If you want to create a more complex text, you can pass an array of strings/Txt's as a parameter. For example, this code will create a text in this format:

> **This** <span style={{color:'red'}}>is</span> a *complex* ~~TEXT~~ .

```typescript
new Txt([
    new Txt('This ').bold().end,
    new Txt('is ').color('red').end,
    'a ',
    new Txt('complex ').italics().end,
    new Txt('TEXT').decoration('lineThrough').end
]).end;
```

:::tip Suggestion
Use **Txt** definition when the text requires a format/style (bold, alignment, etc...), otherwise, use a literal string, remember that **add** and **rawContent** methods can receive literal objects that pdfmake accepts.
:::

## preserveLeadingSpaces(): Txt

Preserves leading spaces.

```typescript
new Txt('...').preserveLeadingSpaces().end;
```

## opacity(opacity: number): Txt

Adds opacity to text (0-1).

```typescript
new Txt('...').opacity(0.5).end;
```

## Types

#### IText

Text properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` text: `string` | (`string` | [`IText`](#itext))[];
* `readonly` preserveLeadingSpaces?: `boolean`;
* `readonly` opacity?: `number`;
