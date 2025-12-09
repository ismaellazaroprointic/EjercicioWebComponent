"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const FiguraTipo_1 = require("./FiguraTipo");
class Triangulo {
    constructor(base, altura, rellena) {
        this.base = base;
        this.altura = altura;
        this.rellena = rellena;
        this.tipo = FiguraTipo_1.FiguraTipo.Triangulo;
    }
    getArea() {
        return (this.base * this.altura) / 2;
    }
    getPerimetro() {
        // Aproximamos un triángulo isósceles a partir de base y altura
        const cateto = Math.sqrt((this.base / 2) ** 2 + this.altura ** 2);
        return this.base + 2 * cateto;
    }
    clone() {
        return new Triangulo(this.base, this.altura, this.rellena);
    }
}
exports.Triangulo = Triangulo;
