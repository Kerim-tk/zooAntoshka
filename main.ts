
interface IAnimalTypes {
    typeofAnimal: string;
    biome: string;
    isNeedfulReservoir: boolean;
    requiredSpace: number;
    diet: string;
}
type Type = 'predator' | 'herbivore';
interface IAnimal extends IAnimalTypes {
    aname: string;
    age: number;
    food: number;
}
const elephant: IAnimal = {
    aname: 'tosha',
    age: 2,
    food: 10,
    typeofAnimal: "elephant",
    biome: "tropic",
    isNeedfulReservoir: true,
    requiredSpace: 50,
    diet: "greenFood"
}
const elephant2: IAnimal = {
    aname: 'gosha',
    age: 5,
    food: 15,
    typeofAnimal: "elephant",
    biome: "tropic",
    isNeedfulReservoir: true,
    requiredSpace: 50,
    diet: "greenFood"
}
const lion: IAnimal = {
    aname: "pumba",
    age: 5,
    food: 30,
    typeofAnimal: "cat",
    biome: "savanna",
    isNeedfulReservoir: true,
    requiredSpace: 100,
    diet: "meet"
}
const tiger: IAnimal = {
    aname: "timon",
    age: 6,
    food: 35,
    typeofAnimal: "cat",
    biome: "savanna",
    isNeedfulReservoir: true,
    requiredSpace: 100,
    diet: "meet"
}
const turtle: IAnimal = {
    aname: "Rafael",
    age: 25,
    food: 1,
    typeofAnimal: "turtle",
    biome: "canalization",
    isNeedfulReservoir: false,
    requiredSpace: 25,
    diet: "greenFood"
}
const Rafael: IAnimal = {
    aname: "ninja",
    age: 20,
    food: 9999,
    typeofAnimal: "turtle",
    biome: "canalization",
    isNeedfulReservoir: false,
    requiredSpace: 25,
    diet: "greenFood"
}
const redFish: IAnimal = {
    aname: "Nemo",
    age: 1,
    food: 1,
    typeofAnimal: "fish",
    biome: "aquatic",
    isNeedfulReservoir: false,
    requiredSpace: 1,
    diet: "seeds"
}
interface IAviaries {
    name: string,
    biome: string;
    reservoir: boolean;
    area: number;
    animals: IAnimal[]
}
const canalization: IAviaries = {
    biome: "canalization",
    reservoir: false,
    area: 50,
    animals: [],
    name: "canalization1"
}
const aquarium: IAviaries = {
    biome: "aquatic",
    reservoir: false,
    area: 5,
    animals: [],
    name: "aquarium1"
}
const cage1: IAviaries = {
    biome: "savanna",
    reservoir: true,
    area: 200,
    animals: [],
    name: "cage1"
}
const cage2: IAviaries = {
    biome: "tropic",
    reservoir: true,
    area: 150,
    animals: [],
    name: "cage2"
}

function placeAnimals(animal: IAnimal, enclosure: IAviaries) {
    if (animal.isNeedfulReservoir === enclosure.reservoir && animal.biome === enclosure.biome && animal.requiredSpace <= enclosure.area) {

        console.log(`This enclosure is suitable for ${animal.aname}.`);
        if (checkType(animal, enclosure)) {
            return `${animal.aname} added to ${enclosure.name}`;
        } else {
            return `${animal.aname} was not added to ${enclosure.name}`;
        }

    }
    else {
        console.log(`It is impossible to add "${animal.aname}" to enclosure with ${enclosure.area}m area,${enclosure.biome} biome. `);
        return 'That is why adding failed.'
    }

}
function checkType(animal: IAnimal, enclosure: IAviaries): boolean {
    for (let i = 0; i < enclosure.animals.length; i++) {
        if ((enclosure.animals[i].typeofAnimal == 'lion' && animal.typeofAnimal == 'herbivore') || (enclosure.animals[i].typeofAnimal == 'herbivore' && animal.typeofAnimal == 'lion')) {
            console.log(`This enclosure is not suitable for ${animal.aname},because types of animals are opposite. `);
            console.log('====================================');
            return false;
        }        
    }
    console.log(`check true for enclosure ${enclosure.name}`);
    enclosure.animals.push(animal);
    return true;
    //    return animal && animals
}

console.log(placeAnimals(lion, cage1));
console.log(placeAnimals(redFish, aquarium));
console.log(placeAnimals(Rafael, canalization));
console.log(placeAnimals(turtle, canalization));
console.log(placeAnimals(elephant, cage2));
console.log(placeAnimals(elephant2, cage2));
console.log(placeAnimals(lion, cage2));

console.log('====================================');

function showAnimals(enclosure: IAviaries) {
    console.log(`Animals in ${enclosure.name}:`);
    console.log(`animals count: ${enclosure.animals.length}`);
    enclosure.animals.forEach(anm => {
        console.log(anm)
        if (enclosure.animals.length === 0) {
            console.log("This enclosure is empty..");

        }
        return anm.aname
    })
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(canalization);
showAnimals(aquarium);




