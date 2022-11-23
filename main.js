var elephant = {
    aname: 'tosha',
    age: 2,
    food: 10,
    typeofAnimal: "elephant",
    biome: "tropic",
    isNeedfulReservoir: true,
    requiredSpace: 50,
    diet: "greenFood"
};
var elephant2 = {
    aname: 'gosha',
    age: 5,
    food: 15,
    typeofAnimal: "elephant",
    biome: "tropic",
    isNeedfulReservoir: true,
    requiredSpace: 50,
    diet: "greenFood"
};
var lion = {
    aname: "pumba",
    age: 5,
    food: 30,
    typeofAnimal: "cat",
    biome: "savanna",
    isNeedfulReservoir: true,
    requiredSpace: 100,
    diet: "meet"
};
var tiger = {
    aname: "timon",
    age: 6,
    food: 35,
    typeofAnimal: "cat",
    biome: "savanna",
    isNeedfulReservoir: true,
    requiredSpace: 100,
    diet: "meet"
};
var turtle = {
    aname: "Rafael",
    age: 25,
    food: 1,
    typeofAnimal: "turtle",
    biome: "canalization",
    isNeedfulReservoir: false,
    requiredSpace: 25,
    diet: "greenFood"
};
var Rafael = {
    aname: "ninja",
    age: 20,
    food: 9999,
    typeofAnimal: "turtle",
    biome: "canalization",
    isNeedfulReservoir: false,
    requiredSpace: 25,
    diet: "greenFood"
};
var redFish = {
    aname: "Nemo",
    age: 1,
    food: 1,
    typeofAnimal: "fish",
    biome: "aquatic",
    isNeedfulReservoir: false,
    requiredSpace: 1,
    diet: "seeds"
};
var canalization = {
    biome: "canalization",
    reservoir: false,
    area: 50,
    animals: [],
    name: "canalization1"
};
var aquarium = {
    biome: "aquatic",
    reservoir: false,
    area: 5,
    animals: [],
    name: "aquarium1"
};
var cage1 = {
    biome: "savanna",
    reservoir: true,
    area: 200,
    animals: [],
    name: "cage1"
};
var cage2 = {
    biome: "tropic",
    reservoir: true,
    area: 150,
    animals: [],
    name: "cage2"
};
function placeAnimals(animal, enclosure) {
    if (animal.isNeedfulReservoir === enclosure.reservoir && animal.biome === enclosure.biome && animal.requiredSpace <= enclosure.area) {
        console.log("This enclosure is suitable for ".concat(animal.aname, "."));
        if (checkType(animal, enclosure)) {
            return "".concat(animal.aname, " added to ").concat(enclosure.name);
        }
        else {
            return "".concat(animal.aname, " was not added to ").concat(enclosure.name);
        }
    }
    else {
        console.log("It is impossible to add \"".concat(animal.aname, "\" to enclosure with ").concat(enclosure.area, "m area,").concat(enclosure.biome, " biome. "));
        return 'That is why adding failed.';
    }
}
function checkType(animal, enclosure) {
    for (var i = 0; i < enclosure.animals.length; i++) {
        if ((enclosure.animals[i].typeofAnimal == 'lion' && animal.typeofAnimal == 'herbivore') || (enclosure.animals[i].typeofAnimal == 'herbivore' && animal.typeofAnimal == 'lion')) {
            console.log("This enclosure is not suitable for ".concat(animal.aname, ",because types of animals are opposite. "));
            console.log('====================================');
            return false;
        }
    }
    console.log("check true for enclosure ".concat(enclosure.name));
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
function showAnimals(enclosure) {
    console.log("Animals in ".concat(enclosure.name, ":"));
    console.log("animals count: ".concat(enclosure.animals.length));
    enclosure.animals.forEach(function (anm) {
        console.log(anm);
        if (enclosure.animals.length === 0) {
            console.log("This enclosure is empty..");
        }
        return anm.aname;
    });
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(canalization);
showAnimals(aquarium);
