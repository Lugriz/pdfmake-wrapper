---
sidebar_position: 6
---

# Stack

Creates a Stack. This is useful for structuring content by rows.

## constructor(stack: any[])

```typescript
new Stack([
    new Txt('Row 1').end,
    'Row 2'
]).end;
```

## Types

#### IStack

Stack properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` stack: `string`[];