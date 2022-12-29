let now = new Date();
let cumple = new Date(1989, 1, 2)
let mayor = now.getTime() > cumple.getTime() ? "si lo es" : "no lo es"
let dia = cumple.getDate();
let mes = cumple.getMonth() + 1;
let anyo = cumple.getFullYear();

