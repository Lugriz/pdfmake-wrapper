---
sidebar_position: 1
---

# Txt

Creates a text.

## constructor(text: string | Array<string | IText>)

```typescript
new Txt('Hello world!').end;
```

## preserveLeadingSpaces(): Txt

preserves leading spaces (by default, leading spaces are removed).

```typescript
new Txt('     ...').preserveLeadingSpaces().end;
```

## opacity(opacity: number): Txt

Adds text opacity from 0 to 1.

```typescript
new Txt('...').opacity(0.5).end;
```

## Types

#### IText

Text properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` text: `string` | (`string` | [`IText`](#itext))[];
* `readonly` preserveLeadingSpaces?: `boolean`;
* `readonly` opacity?: `number`;
