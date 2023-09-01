[@onehoax/jwt](../README.md) / [types](../modules/types.md) / Animal

# Class: Animal

[types](../modules/types.md).Animal

Represents an animal in general

## Hierarchy

- **`Animal`**

  ↳ [`Dog`](types.Dog.md)

  ↳ [`Shark`](types.Shark.md)

## Table of contents

### Constructors

- [constructor](types.Animal.md#constructor)

### Properties

- [id](types.Animal.md#id)
- [type](types.Animal.md#type)

### Methods

- [init](types.Animal.md#init)
- [speak](types.Animal.md#speak)

## Constructors

### constructor

• **new Animal**(`type`, `id`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`AnimalType`](../modules/types.md#animaltype) | [Animal.type](types.Animal.md#type) |
| `id` | `string` | [Animal.id](types.Animal.md#id) |

#### Defined in

types.ts:19

## Properties

### id

• **id**: `string`

Id of the animal (e.g.: Lion, Cow, etc.)

#### Defined in

types.ts:13

___

### type

• **type**: [`AnimalType`](../modules/types.md#animaltype)

A type from [AnimalType](../modules/types.md#animaltype)

#### Defined in

types.ts:12

## Methods

### init

▸ **init**(): `void`

Common animal behavior

#### Returns

`void`

#### Defined in

types.ts:27

___

### speak

▸ `Abstract` **speak**(): `void`

To be implemented by child classes

#### Returns

`void`

#### Defined in

types.ts:34
