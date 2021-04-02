# Installation

This version was built considering **pdfmake@0.1.x**. If you want to use previous versions you can check the releases [here](https://github.com/Lugriz/pdfmake-wrapper/releases).

To use this library you need to install both **pdfmake-wrapper** and **pdfmake**:

```bash
npm install pdfmake --save
```

and

```bash
npm install pdfmake-wrapper --save
```

we recommend to install the pdfmake types to avoid typing errors:

```bash
npm install @types/pdfmake --save-dev
```

This errors will appear if you don't install the **@types/pdfmake** and you have the *strict* mode to true in your **tsconfig.json** like this:

```json
{
  "compilerOptions": {
    ...
    "strict": true
  }
}
```

**IMPORTANT**: If you have typescript version **<3.6.x** in your project, you may have an error when building the project. This is a typescript breaking changes and you need to update it to **3.6.x** or higher version. Check for more details [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#class-field-mitigations).
