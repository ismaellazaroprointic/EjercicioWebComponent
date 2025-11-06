class Persona {
    readonly nombre: string;
    readonly edad: number;

    constructor(nombre: string, edad: number) {
        if (nombre.trim() === "") {
            throw new Error("El nombre no puede estar vacío");
        }
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        this.nombre = nombre;
        this.edad = edad;
    }

    dameNombre(): string {
        return this.nombre;
    }

    dameEdad(): number {
        return this.edad;
    }
}

const persona = new Persona("Ismael",120);
console.log(persona.dameNombre() + " tiene " + persona.dameEdad() + " años");