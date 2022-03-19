---
sidebar_position: 2
---

# PdfMakeWrapper

this class is used when working on client side, this class extends from **[DocumentDefinition class](./document-definition.md)**.

## create(): [ICreatePDF](#icreatepdf)

Creates the pdf document. This returns other methods ([ICreatePDF](#icreatepdf)) that you can use depending on what you want to do with the document.

```typescript
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

## static setFonts(fonts: [IFonts](#ifonts), fontTypesConfig?: { [propName: string]: [IFontTypes](#ifonttypes) }): void

Sets the fonts to use. you can set either pdfmake default fonts or your custom fonts. More about working with fonts **[here](../guides/working-with-fonts.md)**.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // pdfmake default fonts

/**
 * Configuring the default fonts provided by pdfmake. These are the fonts that pdfmake or pdfmake-wrapper
 * have available to use.
 */

PdfMakeWrapper.setFonts(pdfFonts);
```

## ln(lines: number = 1): string

:::danger DEPRECATION
This method will be deprecated in next releases. Avoid to use it, instead, use '\n'.
:::

Adds new lines. By default '\n'.

```typescript
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

## Types

#### ICreatePDF

Defines the result of a **create** method.

* download`(filename?: string, cb?: (v?: any) => void, options?: any ): void`;
* open`(options?: any, win?: Window ): void`;
* print`(options?: any, win?: Window ): void`;
* getDataUrl`(cb?: (v?: any) => void, options?: any ): void`;
* getBase64`(cb?: (v?: any) => void, options?: any ): void`;
* getBuffer`(cb?: (v?: any) => void, options?: any ): void`;
* getBlob`(cb?: (v?: any) => void, options?: any ): void`;

---

#### IFonts

Defines the format of the generated fonts. This is used internally.

* pdfMake: `IVFS`;

---

#### IFontTypes

Defines the font types.

* normal: `string`;
* bold: `string`;
* italics: `string`;
* bolditalics: `string`;
