"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const FiguraTipo_1 = require("./FiguraTipo");
class Circulo {
    constructor(radio, rellena) {
        this.radio = radio;
        this.rellena = rellena;
        this.tipo = FiguraTipo_1.FiguraTipo.Circulo;
    }
    getArea() {
        return Math.PI * this.radio * this.radio;
    }
    getPerimetro() {
        return 2 * Math.PI * this.radio;
    }
    clone() {
        return new Circulo(this.radio, this.rellena);
    }
}
exports.Circulo = Circulo;
