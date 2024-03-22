function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
makeShirt();

// Creating a medium shirt with the default message
makeShirt('Medium');

// Creating a small shirt with a custom message
makeShirt('Small', 'Custom message for a small shirt!');
