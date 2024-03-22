// Store the numbers 1 through 9 in an array
let numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print ordinal endings
numbers1.forEach(number => {
    let ordinal: string;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = number + "th";
    }

    console.log(ordinal);
});
