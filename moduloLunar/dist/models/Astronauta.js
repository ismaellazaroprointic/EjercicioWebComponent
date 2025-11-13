"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Astronauta = void 0;
class Astronauta {
    constructor(identificador, nombreCompleto, edad) {
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }
    dameIdentificador() {
        return this.identificador;
    }
    dameNombreCompleto() {
        return this.nombreCompleto;
    }
    dameEdad() {
        return this.edad;
    }
}
exports.Astronauta = Astronauta;
