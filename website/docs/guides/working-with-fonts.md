---
sidebar_position: 3
---

# Working with fonts

Fonts are essentials in our PDF documents and in some cases we want to add our custom ones. Pdfmake-wrapper provides us a way to work with fonts.

The way we work with fonts will depend on the environment the application will run. These environments are client-side and server-side.

## Fonts on client-side

To start working with custom fonts on client side, you need to generate them in a format that **pdfmake** needs.

:::info REMEMBER
**pdfmake** already provides us default fonts called *Roboto*, this only applies when working on client-side. When working on server-side you need to provide your own fonts.
:::

### Generating fonts

To generate custom fonts, you can use a CLI called [pdfmake-font-generator](https://github.com/Lugriz/pdfmake-font-generator). You should have your fonts in some directory and this tool will read all fonts and will return an output file containing the generated fonts. This generated file is which you will use to import it to pdfmake-wrapper.


For example, download any fonts you want and save them in some directory inside your project. Something like this:

```text
/myProject
  /fonts
    /custom.ttf
    /custom-bold.ttf
    /custom-italics.ttf
    /custom-bolditalics.ttf
  ...
```

Then, install [pdfmake-font-generator](https://github.com/Lugriz/pdfmake-font-generator) to generate the fonts. Go to the documentation to know about the installation and usage.

Once the fonts were generated, you need to provide your custom fonts to pdfmake-wrapper and configure them.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from 'your/custom/fonts/file'; // custom fonts

// Configuring custom fonts
PdfMakeWrapper.setFonts(pdfFonts, {
  myCustom: {
    normal: 'custom.ttf',
    bold: 'custom-bold.ttf',
    italics: 'custom-italics.ttf',
    bolditalics: 'custom-bolditalics.ttf'
  },
  mySecondCustom: {
    ...
  }
  ...
});

PdfMakeWrapper.useFont('myCustom');
```

As you can see, we've created a group of fonts called **myCustom**, which describes how the fonts will look when defining them as *bold*, *italics*, etc.

:::warning NOTE
If the fonts you downloaded don't contain a format for some of these four keys, you can use the same value for those missing ones.
:::

:::info NOTE
You can configure as many fonts you want for your PDF document.
:::

## Fonts on server-side

Working with fonts on server-side is easier than client-side, you just need to have those files in some folders and pass the path of each of them.

```typescript
import Pdfmake from 'pdfmake';

const printer = new Pdfmake({
    custom: {
        normal: './your/path/custom-Regular.ttf',
        bold: './your/path/custom-Medium.ttf',
        italics: './your/path/custom-Italic.ttf',
        bolditalics: './your/path/custom-MediumItalic.ttf'
    },
    mySecondCustom: {
      ...
    }
    ...
});

PdfMakeWrapper.useFont('custom');
```

You can see an example **[here](https://github.com/Lugriz/pw-server-side)**.

## Using multiple fonts

Once you have configured your fonts, you can use them in your PDF document.

:::info KEEP IN MIND
Rememeber that the fonts you selected when calling **PdfMakeWrapper.useFont** static method will be the default fonts in your PDF document.
:::

If you have more than one configured fonts, you can select the fonts to use. You just need to call **font** method from a definition and pass the font you want to use.

```typescript
new Txt([
  'This text is using the default fonts', // This line will use the default fonts
  new Txt('switching to mySecondCustom').font('mySecondCustom').end // This will use mySecondCustom fonts
]).end
```

:::tip TIP
You can change between fonts in any definition that contains **font** method.
:::
