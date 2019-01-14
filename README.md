# pdfmake-wrapper

This package is a wrapper to [pdfmake](http://pdfmake.org) library (This library is working with pdfmake@0.1.40)

You can check the examples in the original pdfmake repository (https://github.com/bpampuch/pdfmake/blob/master/examples/)[https://github.com/bpampuch/pdfmake/blob/master/examples/]

## Installation

Install pdfmake-wrapper. This package includes **pdfmake** in its dependencies.

> $ npm install pdfmake-wrapper --save

## Usage

import the package in your code and create an instance and use it:

```javascript
// Simple pdf
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

pdf.create().download();
```

**NOTE:** Most classes are called as the original pdfmake library properties (columns, tables, etc..), but there are exceptions like *text* which is represented as **Txt**, it's the same with *Image* which is represented as **Img** and other similar examples. The reason of the it's that exist native objects in the browser like **Image**, **Text**, etc..

Comparing the original pdfmake library and pdfmake-wrapper:

```javascript
// Original pdfmake library
const doc = {
    content: [
        { text: 'hello world!', bold: true }
    ]
};

pdfmake.createPDF( doc ).download();


// using pdfmake-wrapper
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add( new Txt('Hello world!').bold().end );

pdf.create().download();

```

## PdfMakeWrapper members

PdfMakeWrapper is the main class, this class contains the content and other configurations of the document.

### add( content: any )

It adds (push) a value to the content

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

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

### images( images: any )

It adds an object of images (later it's explained the use of the images)

```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

// async method
async function main() {
    const pdf = new PdfMakeWrapper();

    pdf.images({
        picture1: await new Img('Http://domain.com/picture1.jpeg').build(),
        picture2: await new Img('Http://domain.com/picture2.jpeg').build(),
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

### styles( styles: any )

It adds an object of styles

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

### defaultStyle( styles: any )

It adds an object of defaultStyle

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

### header( header: any )

It defines the header of the document. The header is displayed on each page

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

### footer( footer: any )

It defines the footer of the document. The footer is displayed on each page

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

### background( background: any )

It defines the background of the document. The background is displayed on each page

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

### pageSize( size: string )

It defines the page size of the document

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
```

### pageMargins( margins: number | [number, number] | [number, number, number, number] )

It defines the page margins of the document

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
```

### pageOrientation( orientation: string )

It defines the page orientation of the document

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.pageOrientation('landscape');

/**
 * Internally:
 * {
 *      pageOrientation: 'landscape',
 *      content: []
 * }
*/
```

### pageBreakBefore( breakBefore: (currentNode: any, followingNodesOnPage?: any, nodesOnNextPage?: any, previousNodesOnPage?: any) => boolean )

It defines the page break before

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

### info( info: any )

It defines the info of the document

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

### compress( compress: boolean )

It defines the compress of the document

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

### rawContent( content: any )

It defines a raw content, the different to **add** method is that this method fills the full content property (it replaces the content if the content had any definition) and **add** does push to the content

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

### watermark( watermark: string | ITxt ) - ( ITxt is the format(interface) of a Txt object: { text: 'hi', ... } )

It creates a watermark, it's applied to each page

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

### create()

It creates the pdf. This returns other methods:

    download(filename?: string, cb?: (v?: any) => void, options?: any ): void;
    open(options?: any, win?: Window ): void;
    print(options?: any, win?: Window ): void;
    getDataUrl(cb?: (v?: any) => void, options?: any ): void;
    getBase64(cb?: (v?: any) => void, options?: any ): void;
    getBuffer(cb?: (v?: any) => void, options?: any ): void;
    getBlob(cb?: (v?: any) => void, options?: any ): void;

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.create();

/**
 * Similar to:
 * 
 *  pdfMake.createPDF( doc );
*/
```

### ln( lines: number = 1 )

It adds new lines, receiving the number of new lines. (default 1 new line)

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

> **NOTE:** more details check the official [documentation](https://pdfmake.github.io/docs/getting-started/client-side/).

## Definitions

The definitions are classes that represent the properties of the original pdfmake library. All the definitions extends of **StyleDefinition** which is an abstract class that contains all the styles (alignment, color, bold, etc...). This class is not accessible, it's internally used to the library. To use a definition you need to import it and then use it:

```javascript
// importing definitions
import { Txt } from 'pdfmake-wrapper';

//using definition
new Txt('hi!').bold().end // Result: { text: 'hi!', bold: true }

// It's a must finish with end property to return the built object, otherwise, it'll return the Text Class
```

All definitions must finish with the **end** property, this property (**end**) returns the built object, the only exception is the **Img** class (it'll be explained later).

### Txt( text: string )

It creates a text object

```javascript
new Txt('Hello world!').end // { text: 'Hello world!' }

new Txt('Hello world!').alignment('center').italics().end // { text: 'Hello world!', alignment: 'center', italics: true }
```

**Suggestion:** Use **Txt** when the text requires a format (bold, alignment, etc...), otherwise, use literal string

### Columns( columns: any[] )

It creates columns.

```javascript
new Columns([ 'Hello', 'world' ]).end // { columns: [ 'Hello', 'world' ] }

new Columns([ 'Hello', 'world' ]).columnGap(10).end // { columns: [ 'Hello', 'world' ], columnGap: 10 }

new Columns([ 'Hello', 'world' ]).columnGap(10).bold().end // { columns: [ 'Hello', 'world' ], columnGap: 10, bold: true }
```

### Stack( stack: any[] )

It creates a stack

```javascript
new Stack([ 'Hello', 'world' ]).end // { stack: [ 'Hello', 'world' ] }

new Stack([ 'Hello', 'world' ]).alignment(10).end // { stack: [ 'Hello', 'world' ], alignment: 10 }
```

### Table( body: any[][] )

It creates a table

```javascript
// ============== Simple table ================

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).end 

/* 
    Result:
    { 
        table: {
            body: [
                [ 'column 1', 'column 2'],
                [ 'column 1', 'column 2']
            ] 
        }
    } 
*/

// ============= Costum widths ===============

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).widhts([ '*', 100 ]).end

/* 
    Result:
    { 
        table: {
            widths: [ '*', 100 ],
            body: [
                [ 'column 1', 'column 2'],
                [ 'column 1', 'column 2']
            ] 
        }
    } 
*/

// =============== layout (it accepts custom layout) ===================

new Table([
    [ 'column 1', 'column 2'],
    [ 'column 1', 'column 2']
]).layout('noBorders').end

/* 
    Result:
    { 
        layout: 'noBorders',
        table: {
            body: [
                [ 'column 1', 'column 2'],
                [ 'column 1', 'column 2']
            ] 
        }
    } 
*/
```


### Cell( content: any )

It creates a cell, this class is used into a table for adding cell properties to any object

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
]).end 

/* 
    Result:
    { 
        table: {
            body: [
                [ 
                    { text:'Column 1', bold: true }, 
                    { text:'Column 2 with colspan', bold: true, colSpan: 2 }
                ],
                [ 
                    { text:'Column 1', bold: true }, 
                    'Column 2',
                    'Column 3'
                ]
            ] 
        }
    } 
*/
```

### Img( src: string, previuoslySaved: boolean = false )

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

### Ul ( items: any[] )

It creates an unordered list

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

### Ol ( items: any[] )

It creates an ordered list

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

### Item ( content: any )

It creates an item, this method adds items properties to the passed content. use it into a list.

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

### QR ( code: string )

It creates a QR code

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

### TextReference ( id: string ) and PageReference ( id: string )

This classes create a reference to any text (Txt) object that contains an **id** property.

Using TextReference. This class will return the string(Text) of the text object that is referenced when the PDF is created.

```javascript
import { PdfMakeWrapper, Txt, TextReference } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add(
    new TextReference('titlePage2').end
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
    new PageReference('titlePage2').end
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

### Toc ( toc: any )

It creates a table of content.

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

### TocItem ( text: IText )

To display content in the table of content, it's required to set a *tocItem*, To do that use **TocItem** class, now the **Toc** created will display a list of content with the page number.

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
    ).tocStyle({ color: 'red' }).end;
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
