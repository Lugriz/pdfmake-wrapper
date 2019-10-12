# pdfmake-wrapper

This package is a wrapper to [pdfmake](http://pdfmake.org) library

You can check the examples in the original pdfmake repository [https://github.com/bpampuch/pdfmake/blob/master/examples/](https://github.com/bpampuch/pdfmake/blob/master/examples/)

- [pdfmake-wrapper](#pdfmake-wrapper)
  - [New features](#new-features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [PdfMakeWrapper members](#pdfmakewrapper-members)
    - [add(content: any) -> void](#addcontent-any---void)
    - [images(images: { [prop: string]: IImg | string }) -> void](#imagesimages--prop-string-iimg--string----void)
    - [styles(styles: { [prop: string]: IStyleDefinition }) -> void](#stylesstyles--prop-string-istyledefinition----void)
    - [defaultStyle(styles: IStyleDefinition) -> void](#defaultstylestyles-istyledefinition---void)
    - [header(header: any) -> void](#headerheader-any---void)
    - [footer(footer: any) -> void](#footerfooter-any---void)
    - [background(background: any) -> void](#backgroundbackground-any---void)
    - [pageSize(size: string | ICustomPageSize) -> void](#pagesizesize-string--icustompagesize---void)
    - [pageMargins(margins: number | [number, number] | [number, number, number, number]) -> void](#pagemarginsmargins-number--number-number--number-number-number-number---void)
    - [pageOrientation(orientation: 'landscape' | 'portrait') -> void](#pageorientationorientation-landscape--portrait---void)
    - [pageBreakBefore(breakBefore: (currentNode: IDocumentNode, followingNodesOnPage?: IDocumentNode[], nodesOnNextPage?: IDocumentNode[], previousNodesOnPage?: IDocumentNode[]) => boolean) -> void](#pagebreakbeforebreakbefore-currentnode-idocumentnode-followingnodesonpage-idocumentnode-nodesonnextpage-idocumentnode-previousnodesonpage-idocumentnode--boolean---void)
    - [info(info: IInfo) -> void](#infoinfo-iinfo---void)
    - [compress(compress: boolean) -> void](#compresscompress-boolean---void)
    - [rawContent(content: any) -> void](#rawcontentcontent-any---void)
    - [watermark(watermark: string | ITxt) -> void](#watermarkwatermark-string--itxt---void)
    - [userPassword(password: string) -> void](#userpasswordpassword-string---void)
    - [permissions(password: string, permissions: IPermissions) -> void](#permissionspassword-string-permissions-ipermissions---void)
    - [create() -> ICreatePDF](#create---icreatepdf)
    - [ln(lines: number = 1) -> string](#lnlines-number--1---string)
    - [static setFonts(fonts: IFonts, fontTypesConfig?: { [propName: string]: IFontTypes }) -> void](#static-setfontsfonts-ifonts-fonttypesconfig--propname-string-ifonttypes----void)
    - [static useFont(fontName: string) -> void](#static-usefontfontname-string---void)
  - [Definitions](#definitions)
    - [Txt(text: string) -> Txt](#txttext-string---txt)
    - [Columns(columns: any[]) - Columns](#columnscolumns-any---columns)
    - [Stack(stack: any[]) -> Stack](#stackstack-any---stack)
    - [Table(body: any[][]) -> Table](#tablebody-any---table)
    - [Cell(content: any) -> Cell](#cellcontent-any---cell)
    - [Img(src: string, previuoslySaved: boolean = false) -> Img](#imgsrc-string-previuoslysaved-boolean--false---img)
    - [Ul(items: any[]) -> Ul](#ulitems-any---ul)
    - [Ol(items: any[]) -> Ol](#olitems-any---ol)
    - [Item(content: any) -> Item](#itemcontent-any---item)
    - [QR(code: string) -> OR](#qrcode-string---or)
    - [TextReference(id: string) -> TextReference and PageReference(id: string) -> PageReference](#textreferenceid-string---textreference-and-pagereferenceid-string---pagereference)
    - [Toc(toc: any) -> Toc](#toctoc-any---toc)
    - [TocItem(text: IText) -> TocItem](#tocitemtext-itext---tocitem)
    - [SVG(svg: string) -> SVG](#svgsvg-string---svg)
    - [Canvas(IVector[]) -> Canvas](#canvasivector---canvas)
    - [Line(point1: number | [number, number], point2: number | [number, number]) -> Line](#linepoint1-number--number-number-point2-number--number-number---line)
    - [Rect(point: number | [number, number], size: number | [number, number]) -> Rect](#rectpoint-number--number-number-size-number--number-number---rect)
    - [Ellipse(point: number | [number, number], radius: number | [number, number]) -> Ellipse](#ellipsepoint-number--number-number-radius-number--number-number---ellipse)
    - [Polyline(points: IPoint[] = []) -> Polyline](#polylinepoints-ipoint-----polyline)
  - [Interfaces](#interfaces)
    - [General interfaces](#general-interfaces)
      - [IContentDefinition](#icontentdefinition)
      - [IStyleDefinition](#istyledefinition)
      - [ICustomPageSize](#icustompagesize)
      - [IDocumentNode](#idocumentnode)
      - [IInfo](#iinfo)
      - [IPermissions](#ipermissions)
      - [ICreatePDF](#icreatepdf)
      - [IFonts](#ifonts)
      - [IFontTypes](#ifonttypes)
    - [Definition interfaces](#definition-interfaces)
      - [IText](#itext)
      - [IColumns](#icolumns)
      - [IStack](#istack)
      - [IImg](#iimg)
      - [IQR](#iqr)
      - [ISVG](#isvg)
      - [IPageReference](#ipagereference)
      - [ITextReference](#itextreference)
      - [IToc](#itoc)
      - [ITocItem](#itocitem)
      - [IOl](#iol)
      - [IUl](#iul)
      - [IItem](#iitem)
      - [ITable](#itable)
      - [ITableBody](#itablebody)
      - [ICustomTableLayout](#icustomtablelayout)
      - [ICell](#icell)
      - [ICanvas](#icanvas)
      - [IVector](#ivector)
      - [ILine](#iline)
      - [IRect](#irect)
      - [IEllipse](#iellipse)
      - [IPolyline](#ipolyline)
      - [IPoint](#ipoint)
  - [Generate custom fonts](#generate-custom-fonts)
  - [How to use custom fonts](#how-to-use-custom-fonts)
  - [How to use icons](#how-to-use-icons)

## New features

* pdfmake needs to be installed on your own.
* [Custom fonts](#static-usefontfontname-string---void).
* [Icons support](#how-to-use-icons).
* *style*({ ... }) and *defaultStyle*({ ... }) methods implement [*IStyleDefinition*](#istyledefinition) interface to help to define the styles correctly.
* *width* and *height* methods allow string options ('*', 'auto', '10%').
* Relative and absolute positions are available (They are defined in StyleDefinition class, all definition class can use them).
* Drawing shapes using [**Canvas**](#canvasivector---canvas) *class*.
* Adding [*svg*](#svgsvg-string---svg) in the PDF.
* Security implementing [passwords](#userpasswordpassword-string---void) and [permissions](#permissions(password:-string,-permissions:-IPermissions)-->-void).

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

## PdfMakeWrapper members

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

### General interfaces

#### IContentDefinition

Main interface to define an object definition.

* `readonly` id?: `string`;
* `readonly` pageBreak?: `string`;
* `readonly` pageOrientation?: `string`;
* `readonly` headlineLevel?: `any`;

#### IStyleDefinition

This interface contains all possible styles that an object can have. This one extends from [IContentDefinition](#icontentdefinition).

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

#### ICustomPageSize

Defines a custom page size.

* `readonly` width: `number` | `string`;
* `readonly` height: `number` | `string`;

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

#### IPermissions

Defines the possible permissions a document can have.

* `readonly` printing?: `'highResolution'` | `'lowResolution'`;
* `readonly` modifying?: `boolean`;
* `readonly` copying?: `boolean`;
* `readonly` annotating?: `boolean`;
* `readonly` fillingForms?: `boolean`;
* `readonly` contentAccessibility?: `boolean`;
* `readonly` documentAssembly?: `boolean`;

#### ICreatePDF

Defines the result of a [create](#create()-->-ICreatePDF) method.

* download`(filename?: string, cb?: (v?: any) => void, options?: any ): void`;
* open`(options?: any, win?: Window ): void`;
* print`(options?: any, win?: Window ): void`;
* getDataUrl`(cb?: (v?: any) => void, options?: any ): void`;
* getBase64`(cb?: (v?: any) => void, options?: any ): void`;
* getBuffer`(cb?: (v?: any) => void, options?: any ): void`;
* getBlob`(cb?: (v?: any) => void, options?: any ): void`;

#### IFonts

Defines the format of the generated fonts. This is used internally.

* pdfMake: `IVFS`;

#### IFontTypes

Defines the font types.

* normal: `string`;
* bold: `string`;
* italics: `string`;
* bolditalics: `string`;

### Definition interfaces

All the definition interfaces extend from [IStyleDefinition](#istyledefinition).

#### IText

Defines the possible properties a text object can have.

* `readonly` text: `string` | (`string` | [`IText`](#itext))[];
* `readonly` preserveLeadingSpaces?: `boolean`;
* `readonly` opacity?: `number`;

#### IColumns

Defines the possible properties a column object can have.

* `readonly` columns: `any`[];
* `readonly` columnGap?: `number`;

#### IStack

Defines a stack object.

* `readonly` stack: `string`[];

#### IImg

Defines the possible properties an image object can have.

* `readonly` image: `string`;
* `readonly` fit?: [`number`, `number`];
* `readonly` opacity?: `number`;

#### IQR

Defines the possible properties a QR object can have.

* `readonly` qr: `string`;
* `readonly` foreground?: `string`;
* `readonly` version?: `number`;
* `readonly` fit?: `number`;
* `readonly` eccLevel?: `string`;
* `readonly` mode?: `string`;
* `readonly` mask?: `number`;

#### ISVG

Defines the possible properties a SVG object can have.

* `readonly` svg: `string`;
* `readonly` fit?: [`number`, `number`];

#### IPageReference

Defines a page referance object.

* `readonly` pageReference: `string`;

#### ITextReference

Defines a text reference object.

* `readonly` textReference: `string`;

#### IToc

Defines the possible properties a toc object can have.

* `readonly` title: `any`;
* `readonly` numberStyle?: [`IStyleDefinition`](#istyledefinition);
* `readonly` textStyle?: [`IStyleDefinition`](#istyledefinition);
* `readonly` textMargin?: `number` | [`number`, `number`] | [`number`, `number`, `number`, `number`];

#### ITocItem

Defines the possible properties a toc item object can have.

* `readonly` tocItem: `boolean`;
* `readonly` tocStyle?: [`IStyleDefinition`](#istyledefinition);
* `readonly` tocMargin?: `number` | [`number`, `number`] | [`number`, `number`, `number`, `number`];

#### IOl

Defines the possible properties an ordered list object can have.

* `readonly` ol: `any`[];
* `readonly` separator?: `string` | [`string`, `string`];
* `readonly` reversed?: `boolean`;
* `readonly` start?: `number`;

#### IUl

Defines an unordered list object.

* `readonly` ul: `any`[];

#### IItem

Defines the possible properties an item object can have.

* `readonly` counter?: `number`;
* `readonly` listType?: `string`;

#### ITable

Defines the possible properties a table object can have.

* `readonly` table: [`ITableBody`](#itablebody);
* `readonly` layout?: `string` | [`ICustomTableLayout`](#icustomtablelayout);

#### ITableBody

Defines the possible properties a table body object can have.

* `readonly` widths?: `string` | `number` | ( `string` | `number` )[];
* `readonly` heights?: `(row: number) => (number | number[])` | `number` | `number`[];
* `readonly` body: `any`[][];
* `readonly` dontBreakRows?: `boolean`;
* `readonly` keepWithHeaderRows?: `number`;

#### ICustomTableLayout

Defines the possible properties a custom table layout object can have.

* hLineWidth?: `(i?:number, node?:any, columnIndex?:any) => number`;
* vLineWidth?: `(i?:number, node?:any, columnIndex?:any) => number`;
* hLineColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* vLineColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* hLineStyle?: `(i?:number, node?:any, columnIndex?:any) => any`;
* vLineStyle?: `(i?:number, node?:any, columnIndex?:any) => any`;
* paddingLeft?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingRight?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingTop?: `(i?:number, node?:any, columnIndex?:any) => number`;
* paddingBottom?: `(i?:number, node?:any, columnIndex?:any) => number`;
* fillColor?: `(i?:number, node?:any, columnIndex?:any) => string`;
* defaultBorder?: `boolean`;

#### ICell

Defines the possible properties a cell object can have.

* `readonly` colSpan?: `number`;
* `readonly` rowSpan?: `number`;
* `readonly` fillColor?: `string`;
* `readonly` border?: [`boolean`] | [`boolean`, `boolean`] | [`boolean`, `boolean`, `boolean`, `boolean`];

#### ICanvas

Defines a canvas object.

* `readonly` canvas: [`IVector`](#ivector)[];

#### IVector

Shape (line, ellipse, rect and polyline) interfaces extend from this one.

* `readonly` type: `string`;
* `readonly` color?: `string`;
* `readonly` lineColor?: `string`;
* `readonly` lineWidth?: `number`;
* `readonly` lineCap?: `string`;
* `readonly` dash?: `{ length: number }`;
* `readonly` fillOpacity?: `number`;
* `readonly` linearGradient?: `string`[];

#### ILine

Defines a line shape.

* `readonly` x1?: `number`;
* `readonly` x2?: `number`;
* `readonly` y1?: `number`;
* `readonly` y2?: `number`;

#### IRect

Defines a rect shape.

* `readonly` x?: `number`;
* `readonly` y?: `number`;
* `readonly` w?: `number`;
* `readonly` h?: `number`;
* `readonly` r?: `number`;

#### IEllipse

Defines a ellipse shape.

* `readonly` x?: `number`;
* `readonly` y?: `number`;
* `readonly` r1?: `number`;
* `readonly` r2?: `number`;

#### IPolyline

Defines a polyline shape.

* `readonly` closePath?: `boolean`;
* `readonly` points?: [`IPoint`](#ipoint)[];

#### IPoint

Defines a point.

* `readonly` x: `number`;
* `readonly` y: `number`;

## Generate custom fonts

To generate custom fonts, you can use a CLI called [pdfmake-font-generator](https://github.com/Lugriz/pdfmake-font-generator). You need to have your fonts in some directory and this tool will read all fonts and will return an output file containing the generated fonts. This generated file is which you will use to import it to pdfmake-wrapper. for example:

Given a structure like this:

```text
/myProject
  /fonts
    /custom.ttf
    /custom-bold.ttf
    /custom-italics.ttf
    /custom-bolditalics.ttf
```

You need to generate the fonts as the documentation of the CLI is defined and then an output file is placed in a directory you specified.

**NOTE:** You can have many fonts you need in the same directory.

## How to use custom fonts

Once generated the fonts, you need to provide your custom fonts to pdfmake-wrapper and configure them.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/file"; // custom fonts

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
```

as recommended in the [useFont](#static-usefontfontname-string---void) method, configure the fonts once is more then enough if you have all your fonts in a same bundle.

**NOTE:** The values of the font types (normal, bold, etc...) are the font filenames.

you can have many fonts generated in the same bundle and you can configure them too.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/file"; // custom fonts

// Configuring many custom fonts
PdfMakeWrapper.setFonts(pdfFonts, {
    myCustom: {
        normal: 'custom.ttf',
        bold: 'custom-bold.ttf',
        italics: 'custom-italics.ttf',
        bolditalics: 'custom-bolditalics.ttf'
    },
    otherFonts: {
        normal: 'another.ttf',
        bold: 'another-bold.ttf',
        italics: 'another-italics.ttf',
        bolditalics: 'another-bolditalics.ttf'
    },
    ...
});
```

if you need to switch of fonts you can use `PdfMakeWrapper.useFont('otherFonts')`.

## How to use icons

To use icons is similar as using fonts, you can create icons from [http://fontello.com/](http://fontello.com/) and download them (or to use another option). Once downloaded, follow the *custom fonts* process.

Imagine you created and downloaded icons from [http://fontello.com/](http://fontello.com/), inside the downloaded directory there is a `font` directory, take the `.ttf` file to generate icons. You can copy the icons where you have your other custom fonts. for example:

```text
/myProject
  /fonts
    /custom.ttf
    /custom-bold.ttf
    /custom-italics.ttf
    /custom-bolditalics.ttf
    /fontello-icons.ttf
```

This will generate a bundle with your custom fonts and icons.

Now, you need configure them. The process is the same as fonts.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/file"; // custom fonts with icons

// Configuring many custom fonts
PdfMakeWrapper.setFonts(pdfFonts, {
    myCustom: {
        normal: 'custom.ttf',
        bold: 'custom-bold.ttf',
        italics: 'custom-italics.ttf',
        bolditalics: 'custom-bolditalics.ttf'
    },
    myIcons: { // configuring icons
        normal: 'fontello-icons.ttf',
        bold: 'fontello-icons.ttf',
        italics: 'fontello-icons.ttf',
        bolditalics: 'fontello-icons.ttf'
    },
    ...
});
```

The difference is that you will need to create a style in your pdfmake instance. your must NOT use `PdfMakeWrapper.useFont('myIcons')`, cause this will override the fonts the PDF is using. It is better to create a style in your pdfmake instance or set the custom font to use the `font('myIcons')` method.

```javascript
// Imagine you already have your fonts and icons configured
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

// Creating a style
pdf.styles({
    icon: {
        font: 'myIcons' // define the icon to use
    }
});

pdf.add(
    new Txt('').style('icon').end
);

// or using the font method

const pdf = new PdfMakeWrapper();

pdf.add(
    new Txt('').font('myIcons').end
);
```

The content to pass in the **TxT** constructor is the provided for fontello. Go in the downloaded directory in the *css* directory and take the *fontello-codes.css*, Copy the code in the comment and paste it.

`/css/fontello-codes.css`

```css
.icon-<some-icon>:before { content: '\e800'; } /* '' */ /*<-- copy the square into the comment*/
```
