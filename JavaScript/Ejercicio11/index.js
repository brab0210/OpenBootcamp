class Estudiante {
  constructor(nombre) {
    (this.nombre = nombre), (this.asignaturas = ["Javascript", "HTML", "CSS"]);
  }

  obtenDatos() {
    let obj = {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
    return obj;
  }
}

let estu = new Estudiante("Bernardo");

console.log(estu.obtenDatos());
