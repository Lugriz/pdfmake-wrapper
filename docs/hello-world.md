# Hello world

Now that you've installed pdfmake-wrapper, let's write a hello world PDF document. This will be the simplest use of pdfmake-wrapper and will contain everything you need to generate a basic PDF document. This will be divided into the client-side and the server-side.

> **IMPORTANT:** The server side works different than client side, read [Client/server side differences](/client-server-differences.md) to know more about that.

## Client side

This is a simple example to generate a PDF document on client side. We will explain line by line below.

```javascript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);

const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

pdf.create().download();
```

- **Line 1:** We imported **pdfmakeWrapper**.
- **Line 2:** We imported the default fonts which is provided by **pdfmake**, you can go to *pdfmake/build/vfs_fonts* in *node_modules* folder to see the fonts (we will learn about fonts in next chapters).
- **Line 4:** We passed the fonts to pdfmake-wrapper, this is needed since pdfmake-wrapper must have fonts to be used (By default it uses *Roboto*).
- **Line 6:** We created a pdfmake-wrapper instance.
- **Line 8:** We added a simple *Hello world* text.
- **Line 10:** We created/generated the PDF document and downloaded it.

## Server side

This is a simple example to generate a PDF document on server side. We will explain line by line below.

```javascript
import { DocumentDefinition } from 'pdfmake-wrapper/server';
import Pdfmake from 'pdfmake';
import fs from 'fs';

const printer = new Pdfmake({
    Roboto: {
        normal: './your/path/Roboto-Regular.ttf',
        bold: './your/path/Roboto-Medium.ttf',
        italics: './your/path/Roboto-Italic.ttf',
        bolditalics: './your/path/Roboto-MediumItalic.ttf'
    }
});

// By default pdfmake-wrapper uses Roboto and this can be omitted
DocumentDefinition.useFont('Roboto');

const doc = new DocumentDefinition();

doc.add('Hello world!');

const pdf = printer.createPdfKitDocument(doc.getDefinition());

pdf.pipe(fs.createWriteStream('document.pdf'));
pdf.end();
```

- **Line 1:** We imported **DocumentDefinition** from *'pdfmake-wrapper/server'*.
- **Line 2:** We imported **pdfmake**.
- **Line 3:** We imported node.js **fs** module.
- **Line 5 - 12:** We created a **pdfmake** instance and configured the fonts specifying the path (you should previously download some fonts), this is needed since pdfmake-wrapper must have fonts to be used (By default it uses *Roboto*).
- **Line 15:** We specified the fonts to use, since pdfmake-wrapper uses *Roboto* by default, this line could be omitted, but if you are using other fonts, you must specify them.
- **Line 17:** We created a **DocumentDefinition** instance.
- **Line 19:** We added a simple *Hello world* text.
- **Line 21:** We created/generated the PDF document stream passing the document definition.
- **Line 23:** We created the file *document.pdf*.
- **Line 24:** We finished the stream.
