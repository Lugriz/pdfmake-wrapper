# Introduction

Pdfmake-wrapper is a wrapper based on [pdfmake](http://pdfmake.org) written using Typescript, this means pdfmake-wrapper helps you to write your PDF documents easier than using raw pdfmake and allows you to take advantage of autocompletion.

## Quickstart

This is the simplest way to create a PDF document on client side (you need to [install](/installation.md) pdfmake-wrapper previously).

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

## To know more

- [Server side development](quickstart.md)
- [Custom fonts](quickstart.md)

## Contribution

If you want to contribute to this project, you can read the [contribution guidelines](https://github.com/Lugriz/pdfmake-wrapper/blob/master/CONTRIBUTING.md).
