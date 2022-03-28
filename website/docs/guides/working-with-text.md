---
sidebar_position: 1
---

# Working with text

This is the first definition you should know, this one allows you to create a text in a PDF document.

To create a text, you need create an instance of **Txt** class.

```typescript
// Single text.
new Txt('Hello world!').end;
```

**BUT** If your text doesn't have any format, it's recommended to create a literal text on your PDF.

```typescript
const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');
```

This will keep your code less verbose.

:::tip REMEMBER
Use **Txt** definition when the text requires a format/style (bold, alignment, etc...), otherwise, use a literal string, remember that **add** and **rawContent** methods can receive literal objects that pdfmake accepts.
:::

To add format/style to your text, you need to create a **Txt** instance and call the methods you need.

```typescript
// Adding format to text
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

This is all you need to know about text, you can play with **Txt** to explore what you can do.