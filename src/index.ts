import { Dog, Shark } from "./types.js";

const dog: Dog = new Dog("lucas");
console.log(dog);
dog.init();
dog.speak();

const shark: Shark = new Shark("white");
console.log(shark);
shark.init();
shark.speak();
