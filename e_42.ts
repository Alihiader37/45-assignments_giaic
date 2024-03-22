function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += ' the Great';
    }
}

// Array of magician's names
let magiciansArray: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Adding "the Great" to each magician's name
makeGreat(magiciansArray);

// Calling the showMagicians function to confirm the modification
showMagicians(magiciansArray);
