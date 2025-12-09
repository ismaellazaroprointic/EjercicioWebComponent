"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiguraFactoryMethod = void 0;
const FiguraTipo_1 = require("../modelos/FiguraTipo");
const Triangulo_1 = require("../modelos/Triangulo");
const Cuadrado_1 = require("../modelos/Cuadrado");
const Circulo_1 = require("../modelos/Circulo");
/**
 * Factory Method:
 * Crea una figura concreta a partir de un enum + opciones.
 */
class FiguraFactoryMethod {
    static crearFigura(tipo, opciones = {}, rellena = false) {
        switch (tipo) {
            case FiguraTipo_1.FiguraTipo.Triangulo:
                return new Triangulo_1.Triangulo(opciones.base ?? 1, opciones.altura ?? 1, rellena);
            case FiguraTipo_1.FiguraTipo.Cuadrado:
                return new Cuadrado_1.Cuadrado(opciones.lado ?? 1, rellena);
            case FiguraTipo_1.FiguraTipo.Circulo:
                return new Circulo_1.Circulo(opciones.radio ?? 1, rellena);
            default:
                throw new Error("Tipo de figura no soportado");
        }
    }
}
exports.FiguraFactoryMethod = FiguraFactoryMethod;
