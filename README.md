# pdfmake-wrapper

This package is a wrapper to [pdfmake](http://pdfmake.org) library

You can check the examples in the original pdfmake repository [https://github.com/bpampuch/pdfmake/blob/master/examples/](https://github.com/bpampuch/pdfmake/blob/master/examples/)

## New features

* pdfmake needs to be installed on your own.
* Custom fonts.
* Icons support.
* *style*({ ... }) and *defaultStyle*({ ... }) methods implement *IStyleDefinition* interface to help to define the styles correctly.
* *width* and *height* methods allow string options ('*', 'auto', '10%').
* Relative and absolute positions are available.
* Drawing shapes using **Canvas** *class*.
* Adding *svg* in the PDF.
* Security implementing passwords and permissions.

## Installation

To install **pdfmake-wrapper**, you need to install **pdfmake**. This version was built considering **pdfmake@0.1.60**. You can use from **0.1.60** to higher versions.

> $ npm install pdfmake --save

and

> $ npm install pdfmake-wrapper --save

## Usage

**IMPORTANT:** This version does not implement any fonts. The reason is to allow you to use any fonts you need.

This is a simple example to generate a PDF. Import the package in your code, import the fonts to use and create an instance:

```javascript
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

pdf.create().download();
```

**KEEP IN MIND:** Fonts are instantiated in the global scope (window), for that reason configuring the fonts once is more than enough.

**RECOMMENDATIONS:** It is recommended to use *PdfMakeWrapper.setFonts(fonts)* in a bootstrap code, config module or main module. Configuring the fonts more times will have sense if you have bundles of separate generated fonts, but it is more common to have one bundle with many types of fonts. The last one is recommended. More about fonts configuration in the *custom fonts* section.

**NOTE:** Most classes are called as the original pdfmake library properties (columns, tables, etc..), but there are exceptions like *text* which is represented as **Txt**, it's the same with *Image* which is represented as **Img** and other similar examples. The reason is that exist native objects in the browser like **Image**, **Text**, etc..

## Common

* [Generate custom fonts](#generate-custom-fonts)
* [How to use custom fonts](#how-to-use-custom-fonts)
* [How to use icons](#how-to-use-icons)

## PdfMakeWrapper members

* [add(content: any) -> void](#add(content:-any)-->-void)
* [images(images: { [prop: string]: IImg | string }) -> void](#images(images:-{-[prop:-string]:-IImg-|-string-})-->-void)
* [styles(styles: { [prop: string]: IStyleDefinition }) -> void](#styles(styles:-{-[prop:-string]:-IStyleDefinition-})-->-void)
* [defaultStyle(styles: IStyleDefinition) -> void](#defaultStyle(styles:-IStyleDefinition)-->-void)
* [header(header: any) -> void](#header(header:-any)-->-void)
* [footer(footer: any) -> void](#footer(footer:-any)-->-void)
* [background(background: any) -> void](#background(background:-any)-->-void)
* [pageSize(size: string | ICustomPageSize) -> void](#pageSize(size:-string-|-ICustomPageSize)-->-void)
* [pageMargins(margins: number | [number, number] | [number, number, number, number]) -> void](#pageMargins(margins:-number-|-[number,-number]-|-[number,-number,-number,-number])-->-void)
* [pageOrientation(orientation: 'landscape' | 'portrait') -> void](#pageOrientation(orientation:-'landscape'-|-'portrait')-->-void)
* [pageBreakBefore(breakBefore: (currentNode: IDocumentNode, followingNodesOnPage?: IDocumentNode[], nodesOnNextPage?: IDocumentNode[], previousNodesOnPage?: IDocumentNode[]) => boolean) -> void](#pageBreakBefore(breakBefore:-(currentNode:-IDocumentNode,-followingNodesOnPage?:-IDocumentNode[],-nodesOnNextPage?:-IDocumentNode[],-previousNodesOnPage?:-IDocumentNode[])-=>-boolean)-->-void)

PdfMakeWrapper is the main class, this class contains the content and other configurations of the document.

### add(content: any) -> void

Adds (push) a value to the content.

```javascript
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

pdf.add('Second item');

/**
 * Internally:
 * {
 *      content: [
 *          'Hello world!',
 *          'Second item'
 *      ]
 * }
*/
```

### images(images: { [prop: string]: [IImg](#IImg) | string }) -> void

Adds an object of images that you can reference later using a key (How to use images is explained later).

```javascript
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

### styles(styles: { [prop: string]: [IStyleDefinition](#IStyleDefinition) }) -> void

Adds an object of styles that you can reference later using a key.

```javascript
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

### defaultStyle(styles: [IStyleDefinition](#IStyleDefinition)) -> void

Adds a default style that will be applied to the entire PDF.

```javascript
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

### header(header: any) -> void

Defines the header of the document. The header is displayed on each page.

```javascript
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

### footer(footer: any) -> void

Defines the footer of the document. The footer is displayed on each page.

```javascript
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

### background(background: any) -> void

Defines the background of the document. The background is displayed on each page.

```javascript
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

### pageSize(size: string | [ICustomPageSize](#icustompagesize)) -> void

Defines the page size of the document. More about page sizes [here](https://pdfmake.github.io/docs/document-definition-object/page/).

```javascript
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

### pageMargins(margins: number | [number, number] | [number, number, number, number]) -> void

Defines the page margins of the document.

```javascript
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

### pageOrientation(orientation: 'landscape' | 'portrait') -> void

Defines the page orientation of the document.

```javascript
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

### pageBreakBefore(breakBefore: (currentNode: [IDocumentNode](#idocumentnode), followingNodesOnPage?: [IDocumentNode](#idocumentnode)[], nodesOnNextPage?: [IDocumentNode](#idocumentnode)[], previousNodesOnPage?: [IDocumentNode](#idocumentnode)[]) => boolean) -> void

Dynamically control page breaks. More about the implementation [here](https://pdfmake.github.io/docs/document-definition-object/page/#dynamically-control-page-breaks-for-instance-to-avoid-orphan-children).

```javascript
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

### info(info: [IInfo](#iinfo)) -> void

Defines metadata to the document. More about it [here](https://pdfmake.github.io/docs/document-definition-object/document-medatadata/).

```javascript
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

### compress(compress: boolean) -> void

Document compression. By default true.

```javascript
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

### rawContent(content: any) -> void

Defines a raw content. Differences between **add** and this method is that this one fills the full content property (it replaces the content if the content has any definition) and **add** pushes a new element to the content.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.rawContent('Simple content');

/**
 * Internally:
 * {
 *      content: 'Simple content'
 * }
*/
```

### watermark(watermark: string | [ITxt](#itext)) -> void

Creates a watermark, it's applied to each page.

```javascript
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

### userPassword(password: string) -> void

Encrypt the PDF when a user password is provided, when an user and users will be prompted to enter the password to decrypt the file when opening it.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.userPassword('123');
```

### permissions(password: string, permissions: [IPermissions](#ipermissions)) -> void

Sets privileges access providing an owner password and a privileges config. More about it [here](https://pdfmake.github.io/docs/document-definition-object/security/).

```javascript
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

### create() -> [ICreatePDF](#icreatepdf)

Creates the pdf. This returns other methods ([ICreatePDF](#icreatepdf)).

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.create();

/**
 * Returns:
 *  download(filename?: string, cb?: (v?: any) => void, options?: any ): void;
 *  open(options?: any, win?: Window ): void;
 *  print(options?: any, win?: Window ): void;
 *  getDataUrl(cb?: (v?: any) => void, options?: any ): void;
 *  getBase64(cb?: (v?: any) => void, options?: any ): void;
 *  getBuffer(cb?: (v?: any) => void, options?: any ): void;
 *  getBlob(cb?: (v?: any) => void, options?: any ): void;
 */
```

### ln(lines: number = 1) -> string

Adds new lines. By default '\n'.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    pdf.ln(2)
);

/**
 * Internally:
 * {
 *      content: [
 *          '\n\n'
 *      ]
 * }
*/
```

### static setFonts(fonts: [IFonts](#ifonts), fontTypesConfig?: { [propName: string]: [IFontTypes](#ifonttypes) }) -> void

Configures the set of fonts to use and configure the font types.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // pdfmake default fonts

/**
 * Configuring the default fonts provided by pdfmake. These are the fonts that pdfmake or pdfmake-wrapper
 * have available to use.
 */

PdfMakeWrapper.setFonts(pdfFonts);
```

### static useFont(fontName: string) -> void

Indicates which font to use. You need to have configured your fonts and then decide which font to use.

**IMPORTANT:** If you are using the default pdfmake fonts you do not need to indicate which font to use, by default pdfmake has configured them. you just have to provide the fonts as indicated above.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/custom"; // custom fonts

// Configuring custom fonts
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

**RECOMMENDATION:** It is recommended to use *useFont('...')* method in a bootstrap code. If you have more fonts configured you can call *useFont('...')* method in other parts of your code if you need another font.

> **NOTE:** More details, check the official [documentation](https://pdfmake.github.io/docs/getting-started/client-side/).

## Definitions

Definitions are classes that represent objects that pdfmake can read, for example, text, images, tables, columns, etc. All definitions extend from **StyleDefinition** which is an abstract class that contains all the styles (alignment, color, bold, etc...) and this one extends from **ContentDefinition** which is also an abstract class. These classes are not accessible, They are internally used to the library. To use a definition you need to import it and then use it:

```javascript
// importing definitions
import { Txt } from 'pdfmake-wrapper';

//using definition
new Txt('hi!').bold().end // Result: { text: 'hi!', bold: true }

// It's a must finish with end property to return the built object, otherwise, it'll return the Text Class
```

**IMPORTANT:** All definitions must finish with the **end** property, this property (**end**) returns the built object, the only exception is the **Img** class (it'll be explained later). Each definition has its own interface when finishing with **_.end_**, for example, **_new Txt('some text').end_** corresponds to **IText**.

**KEEP IN MIND:** Definition classes build objects that pdfmake can read and these objects have an format determinated from an interface (some properties are optional, but they show us the possible properties the object could have). Some methods will not work with some definitions, for example, you can not **bold** an image.

### Txt(text: string) -> Txt

Creates a text object.

```javascript
new Txt('Hello world!').end // { text: 'Hello world!' }

new Txt('Hello world!').alignment('center').italics().end // { text: 'Hello world!', alignment: 'center', italics: true }
```

**Suggestion:** Use **Txt** when the text requires a format (bold, alignment, etc...), otherwise, use literal string.

### Columns(columns: any[]) - Columns

Creates columns.

```javascript
new Columns([ 'Hello', 'world' ]).end // { columns: [ 'Hello', 'world' ] }

new Columns([ 'Hello', 'world' ]).columnGap(10).end // { columns: [ 'Hello', 'world' ], columnGap: 10 }

new Columns([ 'Hello', 'world' ]).columnGap(10).bold().end // { columns: [ 'Hello', 'world' ], columnGap: 10, bold: true }
```

### Stack(stack: any[]) -> Stack

Creates a stack.

```javascript
new Stack([ 'Hello', 'world' ]).end // { stack: [ 'Hello', 'world' ] }

new Stack([ 'Hello', 'world' ]).alignment(10).end // { stack: [ 'Hello', 'world' ], alignment: 10 }
```

### Table(body: any[][]) -> Table

Creates a table.

```javascript
// ============== Simple table ================

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).end;

/**
 *  Result:
 *  {
 *      table: {
 *          body: [
 *              [ 'column 1', 'column 2'],
 *              [ 'column 1', 'column 2']
 *          ]
 *      }
 *   }
 */

// ============= Costum widths ===============

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).widhts([ '*', 100 ]).end;

/**
 *  Result:
 *  {
 *      table: {
 *          widths: [ '*', 100 ],
 *          body: [
 *              [ 'column 1', 'column 2'],
 *              [ 'column 1', 'column 2']
 *          ]
 *      }
 *   }
 */

// =============== layout (it accepts custom layout) ===================

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).layout('noBorders').end;

/**
 *  Result:
 *  {
 *      table: {
 *          layout: 'noBorders',
 *          body: [
 *              [ 'column 1', 'column 2'],
 *              [ 'column 1', 'column 2']
 *          ]
 *      }
 *   }
 */
```

### Cell(content: any) -> Cell

Creates a cell, this class is used into a table for adding cell properties to any object. For example, colspan.

```javascript
// ============== Simple table using the cell class ================

new Table([
    [
        new Txt('Column 1').bold().end,
        new Cell( new Txt('Column 2 with colspan').bold().end ).colSpan(2).end
    ],
    [
        new Txt('Column 1').bold().end,
        'Column 2',
        'Column 3'
    ]
]).end;

/*
 *  Result:
 *    {
 *       table: {
 *            body: [
 *                [
 *                    { text:'Column 1', bold: true },
 *                    { text:'Column 2 with colspan', bold: true, colSpan: 2 }
 *                ],
 *                [
 *                    { text:'Column 1', bold: true },
 *                    'Column 2',
 *                    'Column 3'
 *                ]
 *            ]
 *        }
 *    }
 */
```

### Img(src: string, previuoslySaved: boolean = false) -> Img

The **Img** class accepts URL, base64 and keys of images previously saved using the pdf.images({ ... }) method.

to load an image is asynchronous, to use Img class you need to use **async/await** syntax or use the **then()** method. This class doesn't use the **end** property for ending, instead, it use **build()** method, this method transforms the URL (if an url is passed) to base64.

Using Img class with **async/await**. To use **async/await** you need an async method

```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

// async method
async function generate() {
    const pdf = new PdfMakeWrapper();

    pdf.add( await new Img('Http://domain.com/picture1.jpeg').build() );
  
    pdf.create().download();

    /**
     * {
     *      content: [
     *          { image: 'data:image/png;base64, ...' }
     *      ]
     * }
    */
}

// using the generate method
generate();
```

Using Img class with **then** method

```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

new Img('http://domain.com/picture1.jpeg').build().then( img => {
    pdf.add( img );

    pdf.create().download();
});

/**
 * {
 *      content: [
 *          { image: 'data:image/png;base64, ...' }
 *      ]
 * }
*/
```

Different usages

```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

// async method
async function main() {
    const pdf = new PdfMakeWrapper();

    // URL
    pdf.add( await new Img('http://domain.com/picture1.jpeg').build() );

    // base64
    pdf.add( await new Img('data:image/jpeg;base64, ...').build() );

    // key: the second param indicates that is a key of a previously saved images using the pdf.images({ ... }) method
    pdf.add( await new Img('myPicture1', true).build() );

    pdf.create().download();
}

main();
```

### Ul(items: any[]) -> Ul

Creates an unordered list.

```javascript
// ============== simple unordered list ============
new Ul([
    'item 1',
    'item 2'
]).end

/**
 * Internally:
 * {
 *      ul: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/

// ============== unordered list with square marker ============
new Ul([
    'item 1',
    'item 2'
]).type('square').end

/**
 * Internally:
 * {
 *      type: 'square',
 *      ul: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/
```

### Ol(items: any[]) -> Ol

Creates an ordered list.

```javascript
// ============== simple ordered list ============
new Ol([
    'item 1',
    'item 2'
]).end

/**
 * Internally:
 * {
 *      ol: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/

// ============== ordered list with upper roman numerals marker ============
new Ol([
    'item 1',
    'item 2'
]).type('upper-roman').end

/**
 * Internally:
 * {
 *      type: 'upper-roman',
 *      ol: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/

// ============== ordered list with a initial number as marker ============
new Ol([
    'item 1',
    'item 2'
]).start(10).end

/**
 * Internally:
 * {
 *      start: 10,
 *      ol: [
 *          'item 1',
 *          'item 2'
 *      ]
 * }
*/
```

### Item(content: any) -> Item

Creates an item, this method adds item properties to the passed content. use it in a list.

```javascript
// ============== simple example with unordered list ============
new Ul([
    new Item({ text: 'item 1' }).listType('square').end,

    new Item(
        new Txt('Item 2').bold().end
    ).listType('square').end,

    // new Item('Item 3').listType('square').end ( you can't do this, it only accepts an object )
]).end

/**
 * Internally:
 * {
 *      ul: [
 *          { text: 'item 1', listType: 'square' },
 *          { text: 'item 2', bold: true, listType: 'square' }
 *      ]
 * }
*/

// ============== simple example with ordered list ============
new Ol([
    new Item({ text: 'item 1' }).listType('lower-roman').end,

    new Item(
        new Txt('Item 2').bold().end
    ).counter(10).end,

    // new Item('Item 3').listType('lower-roman').end ( you can't do this, it only accepts an object )
]).end

/**
 * Internally:
 * {
 *      ol: [
 *          { text: 'item 1', listType: 'lower-roman' },
 *          { text: 'item 2', bold: true, counter: 10 }
 *      ]
 * }
*/
```

**NOTE:** Use **Item** class when you require items properties like counter and listType.

### QR(code: string) -> OR

Creates a QR code.

```javascript
// ============== simple qr code ============
new QR('my code').end

/**
 * Internally:
 * {
 *      qr: 'my code'
 * }
*/

// ============== qr code with a fit of 100 ============
new QR('my code').fit(100).end

/**
 * Internally:
 * {
 *      qr: 'my code',
 *      fit: 100
 * }
*/
```

### TextReference(id: string) -> TextReference and PageReference(id: string) -> PageReference

These classes create a reference to any text (Txt) object that contains an **id** property.

Using TextReference. This class will return the string (text) of the text object that is referenced when the PDF is created.

```javascript
import { PdfMakeWrapper, Txt, TextReference } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new TextReference('titlePage2').end // returns the text: This is the text to be referenced
);

pdf.add(
    new Txt('This is the text to be referenced').pageBreak('before').id('titlePage2').end
);

/**
 * Internally:
 * {
 *      content: [
 *          { textReference: 'titlePage2' },
 *          { text: 'This is the text to be referenced', pageBreak: 'before', id: 'titlePage2' }
 *      ]
 * }
*/
```

Using PageReference. This class will return the page number of the text object that is referenced when the PDF is created.

```javascript
import { PdfMakeWrapper, Txt, PageReference } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new PageReference('titlePage2').end // returns the page number, for example: 2
);

pdf.add(
    new Txt('This is the text to be referenced').pageBreak('before').id('titlePage2').end
);

/**
 * Internally:
 * {
 *      content: [
 *          { pageReference: 'titlePage2' },
 *          { text: 'This is the text to be referenced', pageBreak: 'before', id: 'titlePage2' }
 *      ]
 * }
*/
```

### Toc(toc: any) -> Toc

Creates a table of content.

```javascript
import { PdfMakeWrapper, Toc, Txt } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Toc(
        new Txt('INDEX').bold().end
    ).textStyle({ italics: true }).end
);

/**
 * Internally:
 * {
 *      content: [
 *          {
 *              toc: {
 *                  title: { text: 'INDEX', bold: true },
 *                  textStyle: { italics: true }
 *              }
 *          }
 *      ]
 * }
*/
```

**NOTE:** In this moment it's only created the table of content, but there isn't content to display

### TocItem(text: [IText](#itext)) -> TocItem

To display content in the table of content, it's required to set a *tocItem*, To do that use **TocItem** class, now the created **Toc** will display a list of content with the page number.

```javascript
import { PdfMakeWrapper, Toc, TocItem, Txt } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Toc(
        new Txt('INDEX').bold().end
    ).textStyle({ italics: true }).end
);

pdf.add(
    new TocItem(
        new Txt('Second page').pageBreak('before').end
    ).tocStyle({ color: 'red' }).end
);

/**
 * Internally:
 * {
 *      content: [
 *          {
 *              toc: {
 *                  title: { text: 'INDEX', bold: true },
 *                  textStyle: { italics: true }
 *              }
 *          },
 *          {
 *              text: 'Second page',
 *              pageBreak: 'before',
 *              tocItem: true,
 *              tocStyle: { color: 'red' }
 *          }
 *      ]
 * }
*/
```

### SVG(svg: string) -> SVG

Defines a sgv object. More [here](https://pdfmake.github.io/docs/document-definition-object/svgs/).

```javascript
import { PdfMakeWrapper, SVG } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    // If no width/height/fit is used, then dimensions from the svg element is used.
    new SVG('<svg width="300" height="200" viewBox="0 0 300 200">...</svg>').end
);
```

### Canvas(IVector[]) -> Canvas

Canvas allow us to draw shapes in the PDF. It is only a container where the vectors/shapes will be contained. You can define a canvas like this.

```javascript
import { PdfMakeWrapper, Canvas } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Canvas([
        // vectors
    ]).end
);

/**
 * Internally:
 * {
 *      content: [
 *          {
 *              canvas: [
 *                  // vectors
 *              ]
 *          },
 *      ]
 * }
*/
```

### Line(point1: number | [number, number], point2: number | [number, number]) -> Line

Draws a line.

```javascript
import { PdfMakeWrapper, Canvas, Line } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Canvas([
        new Line([10,10], [30, 30]).end
    ]).end
);

// if the values of a point are the same, you can shorcut like this:
pdf.add(
    new Canvas([
        new Line(10, 30).end
    ]).end
);

// or if one point has the same values
pdf.add(
    new Canvas([
        new Line(10, [10, 20]).end
    ]).end
);
```

### Rect(point: number | [number, number], size: number | [number, number]) -> Rect

Draws a square or rectangle.

```javascript
import { PdfMakeWrapper, Canvas, Rect } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Canvas([
        new Rect([10, 10], [30, 30]).end
    ]).end
);

// if the values of a point are the same, you can shorcut like this:
pdf.add(
    new Canvas([
        new Rect(10, 30).end
    ]).end
);

// or if one point has the same values
pdf.add(
    new Canvas([
        new Rect(10, [10, 20]).end
    ]).end
);
```

### Ellipse(point: number | [number, number], radius: number | [number, number]) -> Ellipse

Draws an ellipse.

```javascript
import { PdfMakeWrapper, Canvas, Ellipse } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new Canvas([
        new Ellipse([10, 10], [30, 30]).end
    ]).end
);

// if the values of a point are the same, you can shorcut like this:
pdf.add(
    new Canvas([
        new Ellipse(10, 30).end
    ]).end
);

// or if one point has the same values
pdf.add(
    new Canvas([
        new Ellipse(10, [10, 20]).end
    ]).end
);
```

### Polyline(points: [IPoint](#ipoint)[] = []) -> Polyline

If you need a complex shape, you can use polyline.

```javascript
import { PdfMakeWrapper, Canvas, Polyline } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

// passing points in the constructor
pdf.add(
    new Canvas([
        new Polyline([
            { x: 10, y: 10 },
            { x: 35, y: 40 },
            { x: 100, y: 40 },
            { x: 125, y: 10 }
        ]).closePath().end
    ]).end
);

// adding points
pdf.add(
    new Canvas([
        new Polyline()
            .closePath()
            .addPoint(10, 10)
            .addPoint(35, 40)
            .addPoint(100, 40)
            .addPoint(125, 10)
            .end
    ]).end
);
```

**RECOMMENDATION:** If you have many shapes, you can create a **_canvas_** and add all shapes there.

```javascript
import { PdfMakeWrapper, Canvas, Line, Rect, Ellipse, Polyline } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();
const line = new Line([10, 100], [30, 300]).end;
const rect = new Ellipse([10, 10], [40, 40]).end;
const ellipse = new Ellipse([110, 50], [210, 30]).end;
const polyline = new Polyline([
    { x: 10, y: 10 },
    { x: 35, y: 40 },
    { x: 100, y: 40 },
    { x: 125, y: 10 }
]).closePath().end;

// All shapes
pdf.add(
    new Canvas([
        line,
        rect,
        ellipse,
        polyline
    ]).end
);
```

## Interfaces

When finishing with *.end* or *.build()* (Img class) in a definition class (Txt, Stack, etc.), they return an result object, this one is formed depending the methods you called on the definition class instance (Txt, Stack, etc.) and each result object is based on an interface depending the definition class that intantiated it. for example:

```javascript
new Txt('Hello world').end;
/**
 * returned object:
 *  { text: 'Hello world' }
 * which belongs to the interface IText
 * /
```

An instance of Txt (defintion class) that finishes with *.end* returns us the result object which belongs to the interface **IText**. The interfaces help us to understand what available properties the result object could have.

#### IContentDefinition

#### IStyleDefinition

#### ICustomPageSize

#### IDocumentNode

#### IInfo

#### IPermissions

#### ICreatePDF

#### IFonts

#### IFontTypes

#### Ipoint

### Definition interfaces

All the definition interfaces extend from IStyleDefinition

#### IText

#### IImg

* image: string;
* fit?: [number, number];
* opacity?: number;

## Generate custom fonts

## How to use custom fonts

## How to use icons
