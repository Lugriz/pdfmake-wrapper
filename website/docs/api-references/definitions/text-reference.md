---
sidebar_position: 13
---

# TextReference

Creates a text reference for a given **[ID](../content-definition.md#idid-string-t)** (you need to assign an ID to a definition for referencing it). It returns the text where the ID was found.

## constructor(id: string)

```typescript
new TextReference('page2_header_id').end;
```

## Types

#### ITextReference

TextReference properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` textReference: `string`;
