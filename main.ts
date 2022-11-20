interface types {
    animal: ["tiger", "giraffe", "bear", "eagle", "elephant", "wolf"];
    biome: ["aquatic", "grassland", "forest", "desert", "taiga", "tundra"];
    reservoir: boolean;
    area: number;
    diet: ["aquatic", "grassland", "forest", "desert", "taiga", "tundra"];
    predator: boolean;
    herbivore: boolean
}
interface characteristics extends types {
    name: ["Kai", "Zion", "Jayden", "Eliana", "Luca", "Ezra", "Maeve", "Aaliyah"];
    age: number;
    food: number;
}
interface aviaries {
    biome: ["aquatic", "grassland", "forest", "desert", "taiga", "tundra"];
    reservoir: boolean;
    area: number;
}

function main(characteristics,aviaries){
    console.log(characteristics)

}

main()
