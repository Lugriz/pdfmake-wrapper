---
sidebar_position: 4
---

# ContentDefinition

**ContentDefinition** is an abstract and generic class that is used as a super class for **[StyleDefinition](./style-definition.md)**. don't worry about this class, casue you won't use it directly, but is useful to know where some properties and methods come from definitions and their usage. Read **[StyleDefinition](./style-definition.md)** to learn more.


## Types

#### IContentDefinition

Main interface to define an object definition.

* `readonly` id?: `string`;
* `readonly` pageBreak?: `string`;
* `readonly` pageOrientation?: `string`;
* `readonly` headlineLevel?: `any`;
