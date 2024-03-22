function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (const magician of magicians) {
        modifiedMagicians.push(`${magician} the Great`);
    }
    return modifiedMagicians;
}

// Original array of magician's names
const originalMagicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Create a copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Adding "the Great" to each magician's name in the copied array
const modifiedMagiciansArray: string[] = makeGreat(copiedMagicians);

// Calling showMagicians with both arrays to demonstrate the changes
console.log('Original Magicians:');
showMagicians(originalMagicians);

console.log('\nModified Magicians:');
showMagicians(modifiedMagiciansArray);
