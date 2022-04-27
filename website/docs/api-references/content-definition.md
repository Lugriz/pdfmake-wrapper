---
sidebar_position: 4
---

# ContentDefinition

**ContentDefinition** is an abstract and generic class that is used as a super class for **[StyleDefinition](./style-definition.md)**. don't worry about this class, casue you won't use it directly, but is useful to know where some properties and methods come from definitions and their usage. Read **[StyleDefinition](./style-definition.md)** to learn more.

:::info KEEP IN MIND
**T** (as a return type) represents the generic type is used at that moment. **"(Any definition instance)"** means these methods can be used on any definition (Txt, Columns, Stack, Img, etc...). The Only exception is when working with vectors (Line, Ellipse, Rect and Polyline).
:::

## get end(): T

Getter that returns the created object.

```typescript
(Any definition instance).end;

// Example using text. This will return
// the created object by Txt
new Txt('Hi!').end;
```

## pageBreak(brk: 'before' | 'after'): T

Breaks a page before or after current content. 

```typescript
(Any definition instance).pageBreak('before').end;
(Any definition instance).pageBreak('after').end;
```

## pageOrientationAndBreak(orientation: 'landscape' | 'portrait', brk: 'before' | 'after'): T

Changes page orientation and break a page.

```typescript
(Any definition instance).pageOrientationAndBreak('landscape', 'before').end;
(Any definition instance).pageOrientationAndBreak('portrait', 'after').end;
```

## headlineLevel(data: any): T

Breaks a page automatically.

```typescript
(Any definition instance).headlineLevel('????').end;
```

## id(id: string): T

Sets an ID to an object. This is useful for referencing an definition.

```typescript
(Any definition instance).id('some ID').end;

// Assigning an ID to texts
new Txt('Hello world!').id('header').end;
new Txt('...').id('paragraph_1').end;
new Txt('...').id('1').end;
```

## Types

#### IContentDefinition

Main interface to define an object definition.

* `readonly` id?: `string`;
* `readonly` pageBreak?: `string`;
* `readonly` pageOrientation?: `string`;
* `readonly` headlineLevel?: `any`;
