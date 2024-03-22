function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magiciansArray: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Calling the showMagicians function with the magiciansArray
showMagicians(magiciansArray);
