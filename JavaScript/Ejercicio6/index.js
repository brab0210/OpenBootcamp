/*- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

let compras = ["banana", "leche", "mandioca", "yogurt", "pescado", "carne"];
compras.push("Aceite de Girasol");
compras.pop();
let peliculas = [
  {
    titulo: "Harry Potter",
    director: "Scott Yard",
    fecha: new Date("12/20/2001"),
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    fecha: new Date("06/15/2009"),
  },
  {
    titulo: "Avengers",
    director: "Kevin Faged",
    fecha: new Date("07/15/2013"),
  },
];
// new Date(2013,0,13)
// año - mes - dia
let fechaEnero = new Date("01/01/2010");
let peliculaFecha = peliculas.filter((element) => element.fecha > fechaEnero);

let directores = peliculas.map((e) => e.director);
let titulos = peliculas.map((e) => e.titulo);

let newPeliculas = directores.concat(titulos);
let peliculasSpread = [...directores, ...titulos];

console.log(peliculasSpread);
