---
sidebar_position: 4
---

# Working with icons

To use icons is similar as using fonts, you can create icons from [http://fontello.com/](http://fontello.com/) and download them (or to use another option). Once downloaded, follow the **[custom fonts](./working-with-fonts.md)** process.

If you are using **fontello**, select and download the icons you want and once downloaded, go to *font* directory and take the `.ttf` file, then add this `.ttf` file in the directory where you have your other fonts. For example:

```text
/myProject
  /fonts
    /custom.ttf
    /custom-bold.ttf
    /custom-italics.ttf
    /custom-bolditalics.ttf
    /fontello-icons.ttf
  ...
```

Now, how we did with fonts, you need to generate these icons using [pdfmake-font-generator](https://github.com/Lugriz/pdfmake-font-generator) CLI.

Once they are generated, you can use them just like fonts.

```typescript
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "custom/fonts/file"; // custom fonts and icons in the same file

// Configuring many custom fonts and icons
PdfMakeWrapper.setFonts(pdfFonts, {
    myCustom: {
        normal: 'custom.ttf',
        bold: 'custom-bold.ttf',
        italics: 'custom-italics.ttf',
        bolditalics: 'custom-bolditalics.ttf'
    },
    myIcons: { // Configuring icons
        normal: 'fontello-icons.ttf',
        bold: 'fontello-icons.ttf',
        italics: 'fontello-icons.ttf',
        bolditalics: 'fontello-icons.ttf'
    },
    ...
});
```

As you can see, we've configured the icons similar we did with fonts. In this example we configured fonts and icons in the same place.

:::warning IMPORTANT
YOU must **NOT** use `PdfMakeWrapper.useFont('myIcons')` just for icons, cause this will override the fonts the PDF is using. It's better to create a style in your pdfmake instance or set the custom font to use the `font('myIcons')` method.
:::

Similar to fonts, you can use your icons in these ways.

Creating a style from `PdfMakeWrapper` instance or using `font('myIcons')` method from a **Txt** definition:

```typescript
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

The content to pass in **TxT** constructor is the code provided by *fontello*. Go to *css* directory from the downloaded *fontello* directory and open *fontello-codes.css* file, copy the code in the comment and paste it.

`/css/fontello-codes.css`

```css
.icon-<some-icon>:before { content: '\e800'; } /* '' */ /*<-- copy the square into the comment*/
```

Each icon will provide its own code.

:::tip USING SVG
You can use **[SVG](../api-references/definitions/svg.md)** as an alternative to provide icons to your PDF documents.
:::
