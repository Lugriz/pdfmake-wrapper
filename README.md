# pdfmake-wrapper

This package is a wrapper to [pdfmake](http://pdfmake.org) library


## Installation

You need to install the pdfmake and pdfmake-wrapper. This package includes pdfmake in its dependencies.

> $ npm install pdfmake-wrapper --save


## Usage

import the package in your code, create an instance and use it:

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

pdf.create().download();
```

**NOTE:** All classes are called as the original pdfmake library properties (text, columns, tables, etc..):

```javascript
// Original pdfmake library
const doc = {
    content: [
        { text: 'hello world!', bold: true }
    ]
};

pdfmake.createPDF( doc ).download();


// using pdfmake-wrapper

import { PdfMakeWrapper, Text } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

pdf.add( new Text('Hello world!').bold().end );

pdf.create().download();

```


## PdfMakeWrapper members


### add( any )

It adds (push) a value to the content of the PDF

### images( any )

It adds an object of images

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

### styles( any )

It adds an object of styles

### defaultStyle( any )

It adds an object of defaultStyle

### header( any )

It defines the header of the document

### footer( any )

It defines the footer of the document

### background( any )

It defines the background of the document

### pageSize( string )

It defines the pageSize of the document

### pageMargins( number | [number, number] | [number, number, number, number] )

It defines the pageMargins of the document

### pageOrientation( string )

It defines the pageOrientation of the document

### pageBreakBefore( (currentNode: any, followingNodesOnPage?: any, nodesOnNextPage?: any, previousNodesOnPage?: any) => boolean )

It defines the pageBreakBefore of the document

### info( any )

It defines the info of the document

### compress( boolean )

It defines the compress of the document

### rawContent( any )

It defines the raw content of the document, the different to **add** method, this fill the content (it replaces if the content had any definition) and **add** does push to the content

### create()

It creates a pdf. This returns other methods:

    download(filename?: string, cb?: (v?: any) => void, options?: any ): void;
    open(options?: any, win?: Window ): void;
    print(options?: any, win?: Window ): void;
    getDataUrl(cb?: (v?: any) => void, options?: any ): void;
    getBase64(cb?: (v?: any) => void, options?: any ): void;
    getBuffer(cb?: (v?: any) => void, options?: any ): void;
    getBlob(cb?: (v?: any) => void, options?: any ): void;



> **NOTE:** more details check the official [documentation](https://pdfmake.github.io/docs/getting-started/client-side/).


## Definitions

The definition are the classes that represent the properties of the original pdfmake library. To use a definition you need to import it and then use it:

```javascript
// importing definitions
import { Text, Columns, Table } from 'pdfmake-wrapper';

//using definition
new Text('hi!').bold().end // Result: { text: 'hi!', bold: true }

// It's a must finish with end property to return the built object, the otherwise, it'll return the Text Class
```

All definitions must finish with the **end** property, this property returns the built object, the only exception is **Img** class.

### Img (class)

This is the unique definition that it doesn't have the same name that the original pdfmake property. The reason is that exists an native **Image** class in the browser.

The **Img** class accepts URL, base64 and keys of images, previously load ( pdf.images({ ... }) ).

loading an image is asynchronous, to use Img class you need to use **async/await** syntax or use the **then()** method. This class doesn't use for finishing the **end** property, instead, it use **build()** method

Using Img class with **async/await**. To use **async/await** you need an async method

```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

// async method
async function main() {
    const pdf = new PdfMakeWrapper();

    pdf.add( await new Img('Http://domain.com/picture1.jpeg').build() );
    
    pdf.create().download();
}

main();

```

Using Img class with **then** method


```javascript
import { PdfMakeWrapper, Img } from 'pdfmake-wrapper';

const pdf = new PdfMakeWrapper();

new Img('http://domain.com/picture1.jpeg').build().then( img => {
    pdf.add( img );
    
    pdf.create().download();
});

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

    // key. the second param indicates is a key of a previously image
    pdf.add( await new Img('myPicture1', true).build() );
    
    pdf.create().download();
}

main();

```