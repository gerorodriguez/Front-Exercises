let countries = [
    {name: "Argentina", population: 3123123},
    {name: "China", population: 6132312},
    {name: "Alemania", population: 111111},
    {name: "Francia", population: 666666}
];

countries.sort((a,b) => b.population - a.population);
console.log(countries)

