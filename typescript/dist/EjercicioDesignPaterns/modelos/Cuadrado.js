"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuadrado = void 0;
const FiguraTipo_1 = require("./FiguraTipo");
class Cuadrado {
    constructor(lado, rellena) {
        this.lado = lado;
        this.rellena = rellena;
        this.tipo = FiguraTipo_1.FiguraTipo.Cuadrado;
    }
    getArea() {
        return this.lado * this.lado;
    }
    getPerimetro() {
        return 4 * this.lado;
    }
    clone() {
        return new Cuadrado(this.lado, this.rellena);
    }
}
exports.Cuadrado = Cuadrado;
