---
sidebar_position: 12
---

# PageReference

Creates a page reference for a given **[ID](../content-definition.md#idid-string-t)** (you need to assign an ID to a definition for referencing it). It returns the page number where the ID was found.

## constructor(id: string)

```typescript
new PageReference('page2_id').end;
```

## Types

#### IPageReference

PageReference properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` pageReference: `string`;
