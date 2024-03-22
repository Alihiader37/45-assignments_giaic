function orderSandwich(...items: string[]): void {
    console.log('Summary of Sandwich:');
    if (items.length === 0) {
        console.log('No items selected for the sandwich.');
    } else {
        console.log('Items included:');
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log('Enjoy your sandwich!');
}

// Calling the function with different numbers of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Turkey', 'Swiss Cheese', 'Mustard');
orderSandwich();
