---
sidebar_position: 1
---

# Installation

:::info Note
This version was built considering **pdfmake@0.1.x**. If you want to use previous versions you can check the releases [here](https://github.com/Lugriz/pdfmake-wrapper/releases).
:::

To use this library you need to install these three packages:

**pdfmake** is the library that *pdfmake-wrapper* uses under the hook to generate the PDF documents.

```bash
npm install pdfmake --save
```

**@types/pdfmake** contains the types for pdfmake to avoid typing errors.

```bash
npm install @types/pdfmake --save-dev
```

and **pdfmake-wrapper** is the wrapper that provides functionalities that helps to develop those PDF documents in an easy and fast way.

```bash
npm install pdfmake-wrapper --save
```

:::danger IMPORTANT
If you are using *typescript* version **<3.6.x** in your project, you may have an error when building the project. This is a typescript breaking changes and you need to update it to **3.6.x** or higher version. Check for more details [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#class-field-mitigations).
:::
