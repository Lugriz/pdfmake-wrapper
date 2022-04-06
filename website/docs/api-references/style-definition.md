---
sidebar_position: 3
---

# StyleDefinition

**StyleDefinition** is an abstract and generic class that extends from **[ContentDefinition](./content-definition.md)** class, don't worry about these two classes, you won't use them directly (this classs is not exported by the library), instead they are super classes for all definitions (all definitions extend from **StyleDefinition**), but is useful to learn about all methods it provides.

:::info KEEP IN MIND
**T** (as a return type) represents the generic type is used at that moment. **"(Any definition instance)"** means these methods can be used on any definition (Txt, Columns, Stack, Img, etc...). The Only exception is when working with vectors (Line, Ellipse, Rect and Polyline).
:::

:::tip Playground
If you want to know how these styles work, you can play with them in this **[playground examples](https://stackblitz.com/edit/typescript-6ahnng)**.
:::

## fontSize(size: number): T

Sets the font size.

```typescript
(Any definition instance).fontSize(10).end;
```

## width(size: number | string): T

Sets the width. If a string is passed, it allows _'*'_, _'auto'_, _'<1-100>%'_.

```typescript
// any number 
(Any definition instance).width(10).end;

// Passing string
(Any definition instance).width('*').end;
(Any definition instance).width('auto').end;
(Any definition instance).width('70%').end;
```

## height(size: number | string): T

Sets the height. If a string is passed, it allows _'*'_, _'auto'_, _'<1-100>%'_.

```typescript
// any number 
(Any definition instance).height(10).end;

// Passing string
(Any definition instance).height('*').end;
(Any definition instance).height('auto').end;
(Any definition instance).height('70%').end;
```

## alignment(align: 'center' | 'left' | 'right' | 'justify'): T

Sets the alignment.

```typescript
(Any definition instance).alignment('center').end;
```

## bold(): T

Sets text as bold.

```typescript
(Any definition instance).bold().end;
```

## italics(): T

Sets text as italics.

```typescript
(Any definition instance).italics().end;
```

## margin(margin: number | [number, number] | [number, number, number, number]): T

Sets margin.

```typescript
(Any definition instance).margin(10).end;
(Any definition instance).margin([10, 5]).end;
(Any definition instance).margin([10, 5, 15, 20]).end;
```

## style(style: string | string[]): T

Sets a style or list of styles previously defined using **[styles(...)](./document-definition.md#stylesstyles--prop-string-istyledefinition--void)** method.

```typescript
(Any definition instance).style('myStyle').end;
(Any definition instance).style(['myStyle1', 'myStyle2']).end;
```

## color(color: string): T

Sets a text color.

```typescript
(Any definition instance).color('#ffffff').end;
(Any definition instance).color('white').end;
```

## background(background: string): T

Sets a background color.

```typescript
(Any definition instance).background('#ffffff').end;
(Any definition instance).background('white').end;
```

## link(link: string): T

Creates a link wrapping the definition.

```typescript
(Any definition instance).link('https://domain.com').end;

// Example using text
new Txt('Visit this domain').link('https://domain.com').end;
```

## linkToPage(page: number): T

Creates a link to any page number.

```typescript
// Creates a link to page 2
(Any definition instance).linkToPage(2).end;
```

## noWrap(): T

Overflows the content when it's greater than container/page size. Similar to CSS noWrap value.

```typescript
(Any definition instance).noWrap().end;
```

## decoration(decoration: 'underline' | 'lineThrough' | 'overline'): T

Adds decoration to text.

```typescript
(Any definition instance).decoration('underline').end;
```

## decorationStyle(decorationStyle: 'dashed' | 'dotted' | 'double' | 'wavy'): T

Adds decoration styles. This should be combined using other decoration methods.

```typescript
(Any definition instance).decorationStyle('dotted').end;

// Example using a text and decoration method. This will underline the text in dashed style.
new Txt('Hello world!').decoration('underline').decorationStyle('dashed').end;
```

## decorationColor(decorationColor: string): T

Adds color to some decoration. This should be combined using other decoration methods.

```typescript
(Any definition instance).decorationColor('red').end;

// Example using a text and decoration method. This will underline the text in red color.
new Txt('Hello world!').decoration('underline').decorationColor('red').end;
```

## fontFeatures(fontFeatures: ('smcp' | 'c2sc' | 'onum')[]): T

Adds font features.

```typescript
(Any definition instance).fontFeatures('smcp').end;
```

## font(fontName: string): T

Selects the fonts to use. You can use any font previously configured using **static setFonts()** method when working on client side or **Pdfmake({...})** when working on server side.

```typescript
(Any definition instance).font('roboto').end;

// Example using different font types in same line text
new Txt([
    'Hello',
    new Txt('world').font('myfont1').end, // This text will use the font type 'myfont1'
    new Txt('!!!!!!').font('myfont2').end // This will use the font type 'myfont2'
]).end; // This will pick the default used font
```

## absolutePosition(x: number, y: number): T

Sets the content in absolute position.

```typescript
(Any definition instance).absolutePosition(30, 50).end;
```

## relativePosition(x: number, y: number): T

Sets the content in relative position.

```typescript
(Any definition instance).relativePosition(30, 50).end;
```

## lineHeight(height: number): T

Sets the height of the bottom line text. This will create a separation between lines in text.

```typescript
(Any definition instance).lineHeight(5).end;
```

## characterSpacing(spacing: number): T

Sets the size between letter spacing in pt.

```typescript
(Any definition instance).characterSpacing(5).end;
```

## Types

#### IStyleDefinition

This interface contains all possible styles that a definition can have. This type is generally used with other definitions when styling them or when a style object is required as a parameter. 

This one extends from **[IContentDefinition](./content-definition.md#icontentdefinition)**.

* `readonly` fontSize?: `number`;
* `readonly` width?: `number`;
* `readonly` height?: `number`;
* `readonly` alignment?: `'center'` | `'left'` | `'right'` | `'justify'`;
* `readonly` bold?: `boolean`;
* `readonly` italics?: `boolean`;
* `readonly` margin?: `number` | [`number`, `number`] | [`number`, `number`, `number`, `number`];
* `readonly` link?: `string`;
* `readonly` linkToPage?: `number`;
* `readonly` noWrap?: `boolean`;
* `readonly` background?: `string`;
* `readonly` style?: `string` | `string`[];
* `readonly` color?: `string`;
* `readonly` decoration?: `'underline'` | `'lineThrough'` | `'overline'`;
* `readonly` decorationStyle?: `'dashed'` | `'dotted'` | `'double'` | `'wavy'`;
* `readonly` decorationColor?: `string`;
* `readonly` fontFeatures?: (`'smcp'` | `'c2sc'` | `'onum'`)[];
* `readonly` absolutePosition?: [`IPoint`](#ipoint);
* `readonly` relativePosition?: [`IPoint`](#ipoint);
* `readonly` font?: `string`;
* `readonly` lineHeight?: `number`;
* `readonly` characterSpacing?: `number`;