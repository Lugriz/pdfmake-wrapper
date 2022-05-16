---
sidebar_position: 2
---

# First PDF Document

This is a simple example to generate a PDF on client-side (if you want to use it on server-side, see the **[server-side](../guides/working-on-server.md)** section).

To create your first PDF document you need to import **PdfMakeWrapper** and the fonts (*pdfmake* provides default fonts, you can use it), then you should set the fonts to use (to see how to use custom fonts, see custom fonts section) and create a **PdfMakeWrapper** instance to start adding some data to your PDF, finally call **create** method to generate the PDF.

```typescript
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// If any issue using previous fonts import. you can try this:
// import pdfFonts from "pdfmake/build/vfs_fonts";

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

const pdf = new PdfMakeWrapper();

pdf.add('Hello world!');

pdf.create().download();
```

:::tip KEEP IN MIND
Fonts are instantiated in the global scope when working in browser, for that reason configuring fonts once is more than enough and it's recommended to use **PdfMakeWrapper.setFonts(fonts)** in a bootstrap code or main module. Configuring fonts more times will have sense if you have bundles of separate generated fonts, but it is more common to have one bundle with many types of fonts. More about fonts configuration in *custom fonts* section.
:::
