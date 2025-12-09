import { IFigura } from "../modelos/FiguraTipo";
import { Triangulo } from "../modelos/Triangulo";
import { Cuadrado } from "../modelos/Cuadrado";
import { Circulo } from "../modelos/Circulo";

/**
 * Abstract Factory:
 * Interfaz para crear familias de figuras (normales vs rellenas).
 */
export interface IFiguraAbstractFactory {
  crearTriangulo(base: number, altura: number): IFigura;
  crearCuadrado(lado: number): IFigura;
  crearCirculo(radio: number): IFigura;
}

/**
 * Fábrica de figuras NO rellenas.
 */
export class FiguraNormalFactory implements IFiguraAbstractFactory {
  crearTriangulo(base: number, altura: number): IFigura {
    return new Triangulo(base, altura, false);
  }

  crearCuadrado(lado: number): IFigura {
    return new Cuadrado(lado, false);
  }

  crearCirculo(radio: number): IFigura {
    return new Circulo(radio, false);
  }
}

/**
 * Fábrica de figuras rellenas.
 */
export class FiguraRellenaFactory implements IFiguraAbstractFactory {
  crearTriangulo(base: number, altura: number): IFigura {
    return new Triangulo(base, altura, true);
  }

  crearCuadrado(lado: number): IFigura {
    return new Cuadrado(lado, true);
  }

  crearCirculo(radio: number): IFigura {
    return new Circulo(radio, true);
  }
}
