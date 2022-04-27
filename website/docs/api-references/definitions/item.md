---
sidebar_position: 4
---

# Item

Creates an item that can be modified independently. This should be used in a list (Ul/Ol).

## constructor(content: Record<string, any>)

```typescript
new Item(
    new Txt('Item 1').end
).end;
```

:::tip IMPORTANT
**Item** receives an object as a parameter, if you want to modify a text as an item, you should use **Txt** instead of literal text.
:::

## counter(counter: number): Item

Defines the counter value of an item. This will work on Ordered list (Ol).

```typescript
new Item(
    ...
).counter(10).end;
```

## listType(type: string): Item

Defines the marker type. This will depends on which type of list is being used.

```typescript
// when using on ordered list
new Item(
    ...
).listType('lower-roman').end;

// when using on unordered list
new Item(
    ...
).listType('square').end;
```

## Types

#### IItem

Item properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` counter?: `number`;
* `readonly` listType?: `string`;
