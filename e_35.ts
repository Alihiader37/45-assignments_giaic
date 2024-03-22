// List of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal using a for loop
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Print a statement about each animal
for (let i = 0; i < animals.length; i++) {
    let statement: string;

    switch (animals[i]) {
        case "Dog":
            statement = "A dog would make a great pet.";
            break;
        case "Cat":
            statement = "A cat is a wonderful companion.";
            break;
        case "Rabbit":
            statement = "A rabbit is an adorable pet.";
            break;
        default:
            statement = "This animal is interesting.";
    }

    console.log(statement);
}

// Statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
