// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let yo = {
  nombre: "Bernardo",
  apellido: "Arrechea",
  edad: 33,
  altura: 1.89,
  eresDesarrollador: true,
};

let edad = yo.edad;

let nuevaLista = [
  { ...yo },
  {
    nombre: "Elias",
    apellido: "Kruk",
    edad: 32,
    altura: 1.87,
    eresDesarrollador: true,
  },
  {
    nombre: "Esteban",
    apellido: "Quito",
    edad: 34,
    altura: 1.87,
    eresDesarrollador: true,
  },
];

let nuevaLista2 = nuevaLista.sort((a, b) => b.edad - a.edad);
//let nuevaListaOrdenada = nuevaLista2.sort((a, b) => b.edad - a.edad);
console.log(nuevaLista2);
