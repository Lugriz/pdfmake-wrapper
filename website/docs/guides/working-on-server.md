---
sidebar_position: 6
---

# Working on server-side

To work on server-side you need to import definitions from **pdfmake-wrapper/server** and use [DocumentDefinition](#documentdefinition-class) class, instead of [PdfmakeWrapper](#pdfmakewrapper-members-client-side) class. **PdfmakeWrapper** class is useful on the client-side, this is because this class provides some methods that work only in the browser (**setFonts** and **create**), but remember that [PdfmakeWrapper](#pdfmakewrapper-members-client-side) extends from [DocumentDefinition](#documentdefinition-class) which is the class that contains all the methods related to the document itself, except for **setFonts** and **create** methods which are only useful on client-side.

You can generate your pdf documents like this:

```typescript
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

/**
 * By default, Pdfmake uses 'Roboto' fonts, if you want 
 * to use custom fonts, you need to use the useFont method 
 * like this:
 * 
 * DocumentDefinition.useFont('MyCustomFonts');
 */

const doc = new DocumentDefinition();

doc.add('Hello world!');

const pdf = printer.createPdfKitDocument(doc.getDefinition());

pdf.pipe(fs.createWriteStream('document.pdf'));
pdf.end();
```

:::info NOTE
Unlike client-side, when working on server-side, fonts do not need to be generated, instead, you need to pass the path where your fonts are stored. To know more about working with fonts, go to **[Working with fonts](./working-with-fonts.md)** section.
:::