---
sidebar_position: 1
---

# Main Classes

To understand how Pdfmake-wrapper works, it's important to know these classes and concepts.

<!-- Maybe should add a class structure -->

## DocumentDefinition Class

This is the main class that contains all data related to the document itself like the content, document metadata and default values like sizes, backgrounds, images and styles (some of these values can be changed when building the document). This class is commonly used in server-side (see more about **[server side experience](../../guides/working-on-server.md)**), although it could be used on client-side too, but this is not recommended, instead use **[PdfmakeWrapper class](#pdfmakewrapper-class)**.

To know more, go to **[DocumentDefinition](../../api-references/document-definition.md)** API.

## PdfMakeWrapper Class

When working on client-side, this is the class you need to use. This class extends from **[DocumentDefinition](#documentdefinition-class)** class (which means it contains all members that **[DocumentDefinition](#documentdefinition-class)** provides) and adds few methods that only works on client-side, such as **setFonts** and the **create**.

To know more, go to **[PdfmakeWrapper](../../api-references/pdfmake-wrapper.md)** API.


:::tip KEEP IN MIND
Then, if you want to work on client-side, **PdfmakeWrapper** is the class you should use, otherwise, **DocumentDefinition** is the class to use on server-side.
:::
