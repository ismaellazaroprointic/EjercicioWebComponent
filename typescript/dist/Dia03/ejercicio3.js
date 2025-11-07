"use strict";
class Animal {
    constructor(mesNacimiento, diaNacimiento, yearNacimiento, nombre) {
        if (mesNacimiento < 1 || mesNacimiento > 12) {
            throw new Error("El mes de nacimiento debe estar entre 1 y 12.");
        }
        if (diaNacimiento < 1 || diaNacimiento > 31) {
            throw new Error("El día de nacimiento debe estar entre 1 y 31.");
        }
        if (yearNacimiento < 2000 || yearNacimiento > 2024) {
            throw new Error("El año de nacimiento debe estar entre 2000 y 2024.");
        }
        this.mesNacimiento = mesNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.yearNacimiento = yearNacimiento;
        this.nombre = nombre;
    }
    dameEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.yearNacimiento;
        if (hoy.getMonth() + 1 < this.mesNacimiento ||
            (hoy.getMonth() + 1 === this.mesNacimiento &&
                hoy.getDate() < this.diaNacimiento)) {
            edad--;
        }
        return edad;
    }
    dameDatos() {
        let fechaNacimiento = `${this.diaNacimiento}/${this.mesNacimiento}/${this.yearNacimiento}`;
        console.log("El nombre del animal es: " +
            this.nombre +
            "\nSu fecha de nacimiento es: " +
            fechaNacimiento);
    }
}
class Mamifero extends Animal {
    constructor(mesNacimiento, diaNacimiento, yearNacimiento, nombre, mesesGestacion) {
        if (mesesGestacion < 1 || mesesGestacion > 12) {
            throw new Error("Los meses de gestación deben estar entre 1 y 12.");
        }
        super(mesNacimiento, diaNacimiento, yearNacimiento, nombre);
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos() {
        super.dameDatos();
        console.log(`Meses de gestación: ${this.mesesGestacion}`);
    }
}
class Primate extends Mamifero {
    constructor(mesNacimiento, diaNacimiento, yearNacimiento, nombre, mesesGestacion, masaCerebral) {
        if (masaCerebral < 100 || mesesGestacion > 2000) {
            throw new Error("La masa cerebral del primate debe estar entre 100 y 2000 gramos.");
        }
        super(mesNacimiento, diaNacimiento, yearNacimiento, nombre, mesesGestacion);
        this.masaCerebral = masaCerebral;
    }
    proporcionMasaCerebral() {
        return this.masaCerebral / this.mesesGestacion;
    }
    dameDatos() {
        super.dameDatos();
        console.log(`Proporción de masa cerebral: ${this.proporcionMasaCerebral()}`);
    }
}
class Humano extends Primate {
    constructor(mesNacimiento, diaNacimiento, yearNacimiento, nombre, mesesGestacion, masaCerebral, apellidos) {
        super(mesNacimiento, diaNacimiento, yearNacimiento, nombre, mesesGestacion, masaCerebral);
        this.apellidos = apellidos;
    }
    dameDatos() {
        super.dameDatos();
        console.log(`Apellidos del sujeto: ${this.apellidos}`);
    }
}
const humanoCompleto = new Humano(8, 20, 2000, "Ismael", 9, 2000, "Lazaro Turon");
humanoCompleto.dameDatos();
