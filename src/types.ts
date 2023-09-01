/**
 * Possible animal types
 */
type AnimalType = "MAMMAL" | "BIRD" | "REPTILE" | "AMPHIBIAN" | "INVERTEBRATE" | "FISH";

/**
 * Represents an animal in general
 * @prop type - A type from {@link AnimalType}
 * @prop id - Id of the animal (e.g.: Lion, Cow, etc.)
 */
abstract class Animal {
    type: AnimalType;
    id: string;

    /**
     * @param type - {@link Animal.type}
     * @param id - {@link Animal.id}
     * */
    constructor(type: AnimalType, id: string) {
        this.type = type;
        this.id = id;
    }

    /**
     * Common animal behavior
     */
    init(): void {
        console.log("Animal init");
    }

    /**
     * To be implemented by child classes
     */
    abstract speak(): void;
}

/**
 * Represents a Dog
 * @prop name - Name of the animal
 */
class Dog extends Animal {
    name: string;

    constructor(name: string) {
        super("MAMMAL", "DOG");
        this.name = name;
    }

    /**
     * Overriden speak() for Dog
     */
    speak(): void {
        console.log("bark");
    }
}

/**
 * Represents a Shark
 * @prop sharkType - type of shark
 */
class Shark extends Animal {
    sharkType: string;

    constructor(sharkType: string) {
        super("FISH", "SHARK");
        this.sharkType = sharkType;
    }

    /**
     * Overriden speak() for Shark
     */
    speak(): void {
        console.log(".....");
    }
}

export { AnimalType, Animal, Dog, Shark };
