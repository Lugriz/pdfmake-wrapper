---
sidebar_position: 1
---

# DocumentDefinition

This class represent the document itself and how document is configured. This class is commonly used on server side.

## add(content: any): void

Adds (push) a value to the content, can be either a single text or any object that pdfmake knows.

```typescript
const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

/**
 * Internally:
 * {
 *      content: [
 *          'Hello world!',
 *      ]
 * }
*/

pdf.add(new Txt('Second item').bold().end);

/**
 * Internally:
 * {
 *      content: [
 *          'Hello world!',
 *          { text: 'Second item', bold: true }
 *      ]
 * }
*/

pdf.add({ text: 'Item 3' });

/**
 * Internally:
 * {
 *      content: [
 *          'Hello world!',
 *          { text: 'Second item', bold: true },
 *          { text: 'Item 3' }
 *      ]
 * }
*/
```

## rawContent(content: any): void

Defines a raw content. Differences between **add** and this method is that this one fills the full content property (it replaces the content if it has some value previously) and **add** pushes a new element to the content. This will allows same values as **add** method.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.rawContent('Simple content');

/**
 * Internally:
 * {
 *      content: 'Simple content'
 * }
*/

pdf.rawContent(new Txt('Replace previous content').end);

/**
 * Internally:
 * {
 *      content: { text: 'Replace previous content' }
 * }
*/
```

## images(images: Record<string, [IImg](./definitions/img.md#iimg) | string\>): void

Adds an object of images that you can reference later using its key. This allow you to load images once and reference them in the whole document, intead of loading them any time the image is used through the document.

```typescript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

// async method
async function main() {
    const pdf = new PdfMakeWrapper();

    pdf.images({
        picture1: await new Img('http://domain.com/picture1.jpeg').build(),
        picture2: await new Img('http://domain.com/picture2.jpeg').build(),
        ...
    });

    // In the original PDFmake library will look like this:

    /*
        const doc = {
            content: [],
            images: {
                picture1: 'base64 image',
                picture2: 'base64 image'
            }
        };
    */
}

main();
```

## styles(styles: Record<string, [IStyleDefinition](./style-definition.md#types)\>): void

Adds an object of styles that you can reference later using its key.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.styles({
    style1: {
        bold: true
    },
    style2: {
        italics: true
    }
});

/**
 * Internally:
 * {
 *      content: [],
 *      styles: {
 *          style1: {
 *              bold: true
 *          },
 *          style2: {
 *              italics: true
 *          }
 *      }
 * }
*/
```

## defaultStyle(styles: [IStyleDefinition](#IStyleDefinition)): void

Adds a default style that will be applied to the entire document.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.defaultStyle({
    bold: true,
    fontSize: 15
});

/**
 * Internally:
 * {
 *      content: [],
 *      defaultStyle: {
 *          bold: true,
 *          fontSize: 15
 *      }
 * }
*/
```

## header(header: any): void

Defines the document header. The header is displayed on each page. The value can be any value/object that pdfmake supports.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.header('This is a header');

/**
 * Internally:
 * {
 *      header: 'This is a header',
 *      content: []
 * }
*/
```

## footer(footer: any): void

Defines the document footer. The footer is displayed on each page. The value can be any value/object that pdfmake supports.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.footer('This is a footer');

/**
 * Internally:
 * {
 *      footer: 'This is a footer',
 *      content: []
 * }
*/
```

## background(background: any): void

Defines the document background. The background is displayed on each page. The value can be any value/object that pdfmake supports.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.background('This is a background');

/**
 * Internally:
 * {
 *      background: 'This is a background',
 *      content: []
 * }
*/
```

## pageSize(size: string | [ICustomPageSize](#icustompagesize)): void

Defines the page size of the document. More about page sizes [here](https://pdfmake.github.io/docs/document-definition-object/page/).

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.pageSize('A4');

/**
 * Internally:
 * {
 *      pageSize: 'A4',
 *      content: []
 * }
*/

// custom page size
pdf.pageSize({
    width: 595.28,
    height: 'auto'
});

/**
 * Internally:
 * {
 *      pageSize: {
 *          width: 595.28,
 *          height: 'auto'
 *      },
 *      content: []
 * }
*/
```

## pageMargins(margins: number | [number, number] | [number, number, number, number]): void

Defines the page margins of the document.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.pageMargins([ 40, 60, 40, 60 ]);

/**
 * Internally:
 * {
 *      pageMargins: [ 40, 60, 40, 60 ],
 *      content: []
 * }
*/

// OR

pdf.pageMargins([ 40, 60 ]); // affects top-bottom and right-left

pdf.pageMargins(40); // applies 40 margin entire sides
```

## pageOrientation(orientation: 'landscape' | 'portrait'): void

Defines the page orientation of the document.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.pageOrientation('landscape'); // 'portrait'

/**
 * Internally:
 * {
 *      pageOrientation: 'landscape',
 *      content: []
 * }
*/
```

## pageBreakBefore(breakBefore: (currentNode: [IDocumentNode](#idocumentnode), followingNodesOnPage?: [IDocumentNode](#idocumentnode)[], nodesOnNextPage?: [IDocumentNode](#idocumentnode)[], previousNodesOnPage?: [IDocumentNode](#idocumentnode)[]) => boolean): void

Dynamically control page breaks. More about the implementation [here](https://pdfmake.github.io/docs/document-definition-object/page/#dynamically-control-page-breaks-for-instance-to-avoid-orphan-children).

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.pageBreakBefore(
    (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) => {
        return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
    }
);

/**
 * Internally:
 * {
 *      pageBreakBefore: (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) => {
            return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
        },
 *      content: []
 * }
*/
```

## info(info: [IInfo](#iinfo)): void

Defines metadata to the document. More about it [here](https://pdfmake.github.io/docs/document-definition-object/document-medatadata/).

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.info({
    title: 'A document',
    author: 'pdfmake-wrapper',
    subject: 'subject of document',
});

/**
 * Internally:
 * {
 *      info: {
 *          title: 'A document',
 *          author: 'pdfmake-wrapper',
 *          subject: 'subject of document',
 *      },
 *      content: []
 * }
*/
```

## compress(compress: boolean): void

Document compression. By default true.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.compress(true);

/**
 * Internally:
 * {
 *      compress: true,
 *      content: []
 * }
*/
```

## watermark(watermark: string | [ITxt](#itext)): void

Creates a watermark, it's applied to each page.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

// ============= Simple watermark =============

pdf.watermark('Simple watermark');

/**
 * Internally:
 * {
 *      watermark: 'Simple watermark'
 * }
*/


// ============= watermark with Txt object =============

pdf.watermark( new Txt('watermark with Txt object').color('blue').end );

/**
 * Internally:
 * {
 *      watermark: { text: 'watermark with Txt object', color: 'blue' }
 * }
*/
```

## userPassword(password: string): void

Encrypts the PDF when a user password is provided, when an user and users will be prompted to enter the password to decrypt the file when opening it.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.userPassword('123');
```

## permissions(password: string, permissions: [IPermissions](#ipermissions)): void

Sets privileges access providing an owner password and a privileges config. More about it [here](https://pdfmake.github.io/docs/document-definition-object/security/).

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.permissions('123', {
    printing: 'lowResolution', // 'highResolution'
    copying: false,
    modifying: false,
    annotating: true,
    fillingForms: true,
    documentAssembly: true,
    contentAccessibility: true
});
```

## static useFont(fontName: string): void

Indicates which font to use. You need to have configured your fonts and then decide which font to use.

:::info IMPORTANT
If you are working on client side and using default pdfmake fonts you do not need to indicate which font to use, by default pdfmake has configured them. For server side the usage of fonts is a bit different, **[see more](../guides/working-on-server.md)**.
:::

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/custom"; // custom fonts

// Configuring custom fonts (setFonts IS USED FOR CLIENT SIDE ONLY)
PdfMakeWrapper.setFonts(pdfFonts, {
    myCustom: {
        normal: 'custom.ttf',
        bold: 'custom-bold.ttf',
        italics: 'custom-italics.ttf',
        bolditalics: 'custom-bolditalics.ttf'
    }
});

PdfMakeWrapper.useFont('myCustom');

/**
 * If you do not have some type of font, you can repeat them. for example, there are fonts to bold and
 * bolditalics.
 * PdfMakeWrapper.setFonts(pdfFonts, {
 *      myCustom: {
 *          normal: 'custom.ttf',
 *          bold: 'custom.ttf',
 *          italics: 'custom-italics.ttf',
 *          bolditalics: 'custom.ttf'
 *      }
 * });
 */
```

:::tip RECOMMENDATION
It's recommended to use *useFont('...')* method in a bootstrap code. If you have more fonts configured you can call *useFont('...')* method in other parts of your code if you need another one.
:::

## Types

---

#### ICustomPageSize

Defines a custom page size.

* `readonly` width: `number` | `string`;
* `readonly` height: `number` | `string`;

---

#### IDocumentNode

Defines the format of a document node which is returned for pageBreakBefore method.

* `readonly` id?: `any`;
* `readonly` headlineLevel?: `any`;
* `readonly` text?: `string` | (`string` | `IText`)[];
* `readonly` ul?: `any`;
* `readonly` ol?: `any`;
* `readonly` table?: `any`;
* `readonly` image?: `any`;
* `readonly` qr?: `any`;
* `readonly` canvas?: `any`;
* `readonly` columns?: `any`;
* `readonly` style?: `any`;
* `readonly` pageOrientation?: `string`;
* `readonly` pageNumbers?: `number`[];
* `readonly` pages?: `number`;
* `readonly` stack?: `boolean`;
* `readonly` startPosition?: `any`;
* [propName: `string`] : `any`;

---

#### IInfo

Defines the format when info metadata is provided to the PDF.

* `readonly` title: `string`;
* `readonly` author?: `string`;
* `readonly` subject?: `string`;
* `readonly` keywords?: `string`;
* `readonly` creator?: `string`;
* `readonly` producer?: `string`;
* `readonly` creationDate?: `string`;
* `readonly` modDate?: `string`;
* `readonly` trapped?: `string`;
* `readonly` [ propName: `string` ]: `string` | `undefined`;

---

#### IPermissions

Defines the possible permissions a document can have.

* `readonly` printing?: `'highResolution'` | `'lowResolution'`;
* `readonly` modifying?: `boolean`;
* `readonly` copying?: `boolean`;
* `readonly` annotating?: `boolean`;
* `readonly` fillingForms?: `boolean`;
* `readonly` contentAccessibility?: `boolean`;
* `readonly` documentAssembly?: `boolean`;