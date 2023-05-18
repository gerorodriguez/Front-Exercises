let countries = [
  { name: "Argentina", population: 1 },
  { name: "China", population: 2 },
  { name: "Alemania", population: 3 },
  { name: "Francia", population: 4 }
];

countries.sort((a, b) => b.population - a.population);
console.log(countries);
