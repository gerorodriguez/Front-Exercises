// Dado un arreglo de strings, utiliza el método filter() para crear un nuevo arreglo que contenga solo las palabras de más de 5 caracteres.

// arr = ["hola", "juan", "pedrodd", "jajajajaj", "uno"];

// const newArr = arr.filter((word) => word.length > 5);

// Dado un arreglo de objetos con propiedades "nombre" y "edad", utiliza el método find() para encontrar el primer objeto con una edad mayor a 30.

// arr = [
//   { nombre: "juan", edad: 20 },
//   { nombre: "pedro", edad: 30 },
//   { nombre: "jose", edad: 40 },
// ];

// newArr = arr.find((person) => person.edad > 30);
// console.log(newArr);

//Dado un arreglo de números, utiliza el método sort() para ordenar los números de forma ascendente.

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// newArr = arr.sort((a, b) => b - a);
// console.log(newArr);

// Dado un arreglo de números, utiliza el método includes() para determinar si el número 5 está presente en el arreglo.

arr = ["3", "5", "6", "7", "8"];

newArr = arr.includes("5");
if (newArr) {
  console.log("El numero 5 esta presente en el arreglo");
} else {
  console.log("El numero 5 no esta presente en el arreglo");
}
