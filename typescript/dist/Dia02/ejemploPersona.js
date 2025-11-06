"use strict";
class Persona {
    constructor(nombre, edad) {
        if (edad < 0)
            this.edad = 0;
        else
            this.edad = edad;
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Alumno extends Persona {
    constructor(name, edad, identificador, estudios) {
        super(name, edad);
        if (identificador.length == 0)
            this.identificador = "No identificado";
        else
            this.identificador = identificador;
        this.estudios = estudios;
    }
    dameNombre() {
        return "El alumno tiene como nombre " + this.nombre;
    }
    dameEdad() {
        return this.edad;
    }
}
class Profesor extends Persona {
    dameNombre() {
        return "El profesor tiene como nombre " + this.nombre;
    }
    dameEdad() {
        return this.edad;
    }
    constructor(name, edad, estudios) {
        super(name, edad);
        this.estudios = estudios;
    }
}
class Coordinador extends Profesor {
    dameNombre() {
        return "El coordinador tiene como nombre " + this.nombre;
    }
    dameEdad() {
        return this.edad;
    }
    constructor(name, edad, estudios, turno) {
        super(name, edad, estudios);
        this.turno = turno;
    }
}
let Rocio = new Alumno("Rocio", 30, "76328278D", true);
let Jacinto = new Profesor("Jacinto", 23, "Medidos");
let Pilar = new Coordinador("Pila", 34, "universitarios", "mañana");
let alumno1 = new Alumno("Ismael", 20, "12345678A", true);
let alumno2 = new Alumno("Juan", 21, "12345678B", false);
let alumno3 = new Alumno("Maria", 22, "12345678C", true);
let profesor1 = new Profesor("Juan", 30, "Matematicas");
let ArrayPersonas = [];
ArrayPersonas.push(Rocio);
ArrayPersonas.push(Jacinto);
ArrayPersonas.push(Pilar);
ArrayPersonas.push(alumno1);
ArrayPersonas.push(alumno2);
ArrayPersonas.push(alumno3);
ArrayPersonas.push(profesor1);
let sumaEdades = 0;
let contador = 0;
ArrayPersonas.forEach(element => {
    console.log(element.dameNombre());
    sumaEdades += element.dameEdad();
    contador++;
});
console.log("La media de las edades es: " + sumaEdades / contador);
