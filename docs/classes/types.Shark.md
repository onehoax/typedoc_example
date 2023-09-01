[@onehoax/jwt](../README.md) / [types](../modules/types.md) / Shark

# Class: Shark

[types](../modules/types.md).Shark

Represents a Shark

## Hierarchy

- [`Animal`](types.Animal.md)

  ↳ **`Shark`**

## Table of contents

### Constructors

- [constructor](types.Shark.md#constructor)

### Properties

- [id](types.Shark.md#id)
- [sharkType](types.Shark.md#sharktype)
- [type](types.Shark.md#type)

### Methods

- [init](types.Shark.md#init)
- [speak](types.Shark.md#speak)

## Constructors

### constructor

• **new Shark**(`sharkType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sharkType` | `string` |

#### Overrides

[Animal](types.Animal.md).[constructor](types.Animal.md#constructor)

#### Defined in

types.ts:64

## Properties

### id

• **id**: `string`

Id of the animal (e.g.: Lion, Cow, etc.)

#### Inherited from

[Animal](types.Animal.md).[id](types.Animal.md#id)

#### Defined in

types.ts:13

___

### sharkType

• **sharkType**: `string`

type of shark

#### Defined in

types.ts:62

___

### type

• **type**: [`AnimalType`](../modules/types.md#animaltype)

A type from [AnimalType](../modules/types.md#animaltype)

#### Inherited from

[Animal](types.Animal.md).[type](types.Animal.md#type)

#### Defined in

types.ts:12

## Methods

### init

▸ **init**(): `void`

Common animal behavior

#### Returns

`void`

#### Inherited from

[Animal](types.Animal.md).[init](types.Animal.md#init)

#### Defined in

types.ts:27

___

### speak

▸ **speak**(): `void`

Overriden speak() for Shark

#### Returns

`void`

#### Overrides

[Animal](types.Animal.md).[speak](types.Animal.md#speak)

#### Defined in

types.ts:72
