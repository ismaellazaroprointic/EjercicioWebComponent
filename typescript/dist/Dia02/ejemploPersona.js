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
const Rocio = new Alumno("Rocio", 30, "76328278D", true);
const Jacinto = new Profesor("Jacinto", 23, "Medidos");
const Pilar = new Coordinador("Pila", 34, "universitarios", "mañana");
const alumno1 = new Alumno("Ismael", 20, "12345678A", true);
const alumno2 = new Alumno("Juan", 21, "12345678B", false);
const alumno3 = new Alumno("Maria", 22, "12345678C", true);
const profesor1 = new Profesor("Juan", 30, "Matematicas");
const ArrayPersonas = [];
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
