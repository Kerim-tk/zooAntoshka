interface IAnimalTypes {
    animal: string;
    biome: string;
    reservoir: boolean;
    requiredSpace: number;
    diet: string;
    predator: boolean;
    herbivore: boolean
}
interface IAnimal extends IAnimalTypes {
    name: string;
    age: number;
    food: number;
}
const elephant: IAnimal = {
    name: 'tosha',
    age: 2,
    food: 10,
    animal: "elephant",
    biome: "tropic",
    reservoir: true,
    requiredSpace: 50,
    diet: "greenFood",
    predator: true,
    herbivore: false
}
const elephant2: IAnimal = {
    name: 'gosha',
    age: 5,
    food: 15,
    animal: "elephant",
    biome: "tropic",
    reservoir: true,
    requiredSpace: 50,
    diet: "greenFood",
    predator: true,
    herbivore: false
}
const lion: IAnimal = {
    name: "pumba",
    age: 5,
    food: 30,
    animal: "cat",
    biome: "savanna",
    reservoir: true,
    requiredSpace: 100,
    diet: "meet",
    predator: true,
    herbivore: false
}
const tiger: IAnimal = {
    name: "timon",
    age: 6,
    food: 35,
    animal: "cat",
    biome: "savanna",
    reservoir: true,
    requiredSpace: 100,
    diet: "meet",
    predator: true,
    herbivore: false
}
const turtle: IAnimal = {
    name: "Rafael",
    age: 25,
    food: 1,
    animal: "turtle",
    biome: "canalization",
    reservoir: false,
    requiredSpace: 25,
    diet: "greenFood",
    predator: false,
    herbivore: true
}
const Rafael: IAnimal = {
    name: "ninja",
    age: 20,
    food: 9999,
    animal: "turtle",
    biome: "canalization",
    reservoir: false,
    requiredSpace: 25,
    diet: "greenFood",
    predator: false,
    herbivore: true
}
const redFish: IAnimal = {
    name: "Nemo",
    age: 1,
    food: 1,
    animal: "fish",
    biome: "aquatic",
    reservoir: false,
    requiredSpace: 1,
    diet: "seeds",
    predator: false,
    herbivore: true
}
interface IAviaries {
    biome: string;
    reservoir: boolean;
    area: number;
}
const canalization: IAviaries = {
    biome: "canalization",
    reservoir: false,
    area: 50
}
const aquarium: IAviaries = {
    biome: "aquatic",
    reservoir: false,
    area: 5
}
const cage1: IAviaries = {
    biome: "savanna",
    reservoir: true,
    area: 200
}
const cage2: IAviaries = {
    biome: "tropic",
    reservoir: true,
    area: 150
}




