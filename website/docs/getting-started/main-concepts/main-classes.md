---
sidebar_position: 1
---

# Main Classes

To understand how Pdfmake-wrapper works, it's important to know these classes and concepts.

<!-- Maybe should add a class structure -->

## DocumentDefinition class

This is the main class that contains the content and other configurations of the document. This is the content/document builder. All the members (methods) will be described by [PdfmakeWrapper](#pdfmakewrapper-members-client-side) class, since it extends from this one. You will work directly with this class when working on server-side. To know more about server-side, check the [server-side](#working-on-server-side) section.

## PdfMakeWrapper class

When working on client-side, this is the class you need to instantiate. This class extends from [DocumentDefinition](#documentdefinition-class) class. The unique members of this class is the static method **setFonts** and the **create** instance method, but you have all [DocumentDefinition](#documentdefinition-class) members available in this class.
