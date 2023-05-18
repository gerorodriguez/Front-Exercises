let input= [
    {name: "John", age: 21, city: "New york"},
    {name: "Pedro", age: 21, city: "Chubut"},
    {name: "Gero", age: 24, city: "Maria teresa"},
    {name: "Martin", age: 6, city: "Rosario"},
]

let names = input
.filter((person) => person.age > 20 && person.age < 29)
.map((person) => person.name);

console.log(names);