function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const city1 = cityCountry('Lahore', 'Pakistan');
const city2 = cityCountry('New York', 'United States');
const city3 = cityCountry('Tokyo', 'Japan');

console.log(city1);
console.log(city2);
console.log(city3);
