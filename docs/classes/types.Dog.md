[@onehoax/jwt](../README.md) / [types](../modules/types.md) / Dog

# Class: Dog

[types](../modules/types.md).Dog

Represents a Dog

## Hierarchy

- [`Animal`](types.Animal.md)

  ↳ **`Dog`**

## Table of contents

### Constructors

- [constructor](types.Dog.md#constructor)

### Properties

- [id](types.Dog.md#id)
- [name](types.Dog.md#name)
- [type](types.Dog.md#type)

### Methods

- [init](types.Dog.md#init)
- [speak](types.Dog.md#speak)

## Constructors

### constructor

• **new Dog**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Overrides

[Animal](types.Animal.md).[constructor](types.Animal.md#constructor)

#### Defined in

types.ts:44

## Properties

### id

• **id**: `string`

Id of the animal (e.g.: Lion, Cow, etc.)

#### Inherited from

[Animal](types.Animal.md).[id](types.Animal.md#id)

#### Defined in

types.ts:13

___

### name

• **name**: `string`

Name of the animal

#### Defined in

types.ts:42

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

Overriden speak() for Dog

#### Returns

`void`

#### Overrides

[Animal](types.Animal.md).[speak](types.Animal.md#speak)

#### Defined in

types.ts:52
