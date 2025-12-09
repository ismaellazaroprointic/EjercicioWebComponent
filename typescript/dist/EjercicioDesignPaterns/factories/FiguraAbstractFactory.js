"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiguraRellenaFactory = exports.FiguraNormalFactory = void 0;
const Triangulo_1 = require("../modelos/Triangulo");
const Cuadrado_1 = require("../modelos/Cuadrado");
const Circulo_1 = require("../modelos/Circulo");
/**
 * Fábrica de figuras NO rellenas.
 */
class FiguraNormalFactory {
    crearTriangulo(base, altura) {
        return new Triangulo_1.Triangulo(base, altura, false);
    }
    crearCuadrado(lado) {
        return new Cuadrado_1.Cuadrado(lado, false);
    }
    crearCirculo(radio) {
        return new Circulo_1.Circulo(radio, false);
    }
}
exports.FiguraNormalFactory = FiguraNormalFactory;
/**
 * Fábrica de figuras rellenas.
 */
class FiguraRellenaFactory {
    crearTriangulo(base, altura) {
        return new Triangulo_1.Triangulo(base, altura, true);
    }
    crearCuadrado(lado) {
        return new Cuadrado_1.Cuadrado(lado, true);
    }
    crearCirculo(radio) {
        return new Circulo_1.Circulo(radio, true);
    }
}
exports.FiguraRellenaFactory = FiguraRellenaFactory;
