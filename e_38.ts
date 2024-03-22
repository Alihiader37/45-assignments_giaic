function describeCity(city: string, country: string = 'default country'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('London', 'United Kingdom');
describeCity('New York'); // This will use the default country
