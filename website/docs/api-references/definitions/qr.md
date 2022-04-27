---
sidebar_position: 9
---

# QR

Creates a QR code.

## constructor(code: string)

```typescript
new QR('some code').end;
```

## fit(fit: number): Img

Fits the image inside a container.

```typescript
new QR('some code').fit(50).end;
```

## version(version: number): QR

Defines the QR version.

```typescript
new QR('some code').version(1).end;
```

## foreground(foreground: string): QR

Defines foreground color.

```typescript
new QR('some code').foreground('gray').end;
```

## eccLevel(eccLevel: 'L' | 'M' | 'Q' | 'H'): QR

Defines ecc level (error correction code level).

```typescript
new QR('some code').eccLevel('H').end;
```

## mode(mode: 'numeric' | 'alphanumeric' | 'octet'): QR

Defines the QR mode.

```typescript
new QR('some code').mode('numeric').end;
```

## mask(mask: number): QR

Defines the QR code mask.

```typescript
new QR('some code').mask(2).end;
```

## Types

#### IQR

QR properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` qr: `string`;
* `readonly` foreground?: `string`;
* `readonly` version?: `number`;
* `readonly` fit?: `number`;
* `readonly` eccLevel?: `string`;
* `readonly` mode?: `string`;
* `readonly` mask?: `number`;
