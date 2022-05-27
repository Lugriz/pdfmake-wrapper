---
sidebar_position: 1
---

# Installation

:::info Note
This version was built considering **pdfmake** from **0.1.72** version, any version higher than **0.1.72** and lower than **0.2.0** should be safe, but if you want to use **pdfmake@0.2.x** versions, please make sure you are not affected for those changes **[here](https://github.com/bpampuch/pdfmake/releases)**.
:::

To use this library you need to install these three packages:

**pdfmake** is the library that *pdfmake-wrapper* uses under the hook to generate the PDF documents (if you want to use **0.2.x** versions, omit **@0.1.x** in the command).

```bash
npm install pdfmake@0.1.x --save
```

**@types/pdfmake** contains the types for pdfmake to avoid typing errors.

```bash
npm install @types/pdfmake@0.1.x --save-dev
```

and **pdfmake-wrapper** is the wrapper that provides functionalities that helps to develop those PDF documents in an easy and fast way.

```bash
npm install pdfmake-wrapper --save
```

:::danger IMPORTANT
If you are using *typescript* version **<3.6.x** in your project, you may have an error when building the project. This is a typescript breaking changes and you need to update it to **3.6.x** or higher version. Check for more details [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#class-field-mitigations).
:::
