---
sidebar_position: 2
---

# Definitions

Definitions are objects that a PDF can contain, for example, text, images, tables, columns, etc. All of these definitions extend from **[StyleDefinition](../../api-references/style-definition.md)**, which is an abstract class that contains all the styles (alignment, color, bold, etc...) that a definition can apply. This class is not exported, it is internally used in the library.

:::info IMPORTANT
Since definitions extend from **StyleDefinition**, all styles are available to those definitions, but some methods won't work with some of them, for example, you can not **bold** an image.
:::

To use a definition you need to import it and then instantiate it. A definition can apply multiple styles by calling methods next to each other by chaining them and when you are done, use **end** property to return the resulting object (this result is the format pdfmake knows), the only exception is when using images, since loading an image is asynchronously, this needs to be treated differently, continue reading to learn about it.

Each definition has its own *result type* (interface) when calling **end** property, it returns an object which has its own type, for example, when using  **Txt** definition class, it corresponds to **IText**, when using a **Ol** (ordered list), it corresponds to **IOl** and so on. This *types* (interfaces) show us the possible properties these objects can have, but some properties are optional.

:::info KEPP IN MIND
Most classes are called as the original pdfmake library properties (columns, tables, etc..), but there are exceptions like *text* which is represented as **Txt**, it's the same with *Image* which is represented as **Img**. The reason is that there are existing native objects in the browser like **Image** and **Text**.
:::

Here are some definition examples with their corresponding result *type*.

Using a single text:

```typescript
import { Txt, IText } from 'pdfmake-wrapper';

const text: IText = new Txt('hi!').bold().end;

/**
 * text result:
 * { text: 'hi!', bold: true }
*/

// It's a must finish with end property to return the built object, otherwise, it'll return the Text Class
```

Using an ordered list:

```typescript
import { Ol, IOl } from 'pdfmake-wrapper';

const ol: IOl = new Ol([
    'item 1',
    'item 2'
]).type('upper-roman').end;

/**
 * ol result:
 * {
 *      type: 'upper-roman',
 *      ol: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/
```

As we mentioned early, images are treated differently, instead of using **end** property when finishing to styled them, you need to call **build()** method, which will return a promise with the object result.

Calling *then* method.

```typescript
import { Img, IImg } from 'pdfmake-wrapper';

new Img('http://domain.com/picture1.jpeg').build().then((result: IImg) => {
    /**
     * Result:
     * { image: 'data:image/png;base64, ...' }
    */
});
```
Using *async/await*:

```typescript
import { Img, IImg } from 'pdfmake-wrapper';

const result: IImg = await new Img('http://domain.com/picture1.jpeg').build();
/**
 * Result:
 * { image: 'data:image/png;base64, ...' }
*/
```

You can take a look to the definition list in **[API References](../../api-references/definitions/text.md)** or some usage in **[Guides](../../guides/using-text.md)** section.
