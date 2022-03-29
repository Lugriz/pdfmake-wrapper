---
sidebar_position: 7
---

# Img

Creates an image.

## constructor(src: string, previuoslySaved: boolean = false): Img

**src** param should be a URL, local path or a base64 format, the last one is not really recommended, since the idea of **Img** class is to avoid adding *base64* string, instead you can pass a URL or a local path and this class will convert it into *base64* format. The second param is for indicating that you want to use a previously configured image in **[images](../document-definition.md#imagesimages-recordstring-iimg--string-void)** method.

```typescript
// Using an url
new Img('http://domain.com/picture1.jpeg').build();

// Using a key (name) of a previously configured image
new Img('myPicture', true).build();
```

## async build(): Promise<[IImg](#iimg)\>

Transforms the image into base64. **DON'T** use **end** when working with image, instead use **build** method to generate the image. This is an exception, since loading an image is asynchonous.

```typescript
new Img('http://domain.com/picture1.jpeg').build();
```

## fit(fit: [number, number]): Img

Fits the image inside a container, you can see it as a witdh and height in the same place.

```typescript
new Img('http://domain.com/picture1.jpeg').fit([100, 100]).build();
```

## opacity(opacity: number): Img

Adds image opacity (from 0 to 1).

```typescript
new Img('http://domain.com/picture1.jpeg').opacity(0.5).build();
```

## Types

#### IImg

Image properties (extends from **[IStyleDefinition](../style-definition.md#istyledefinition)**).

* `readonly` image: `string`;
* `readonly` fit?: [`number`, `number`];
* `readonly` opacity?: `number`;
