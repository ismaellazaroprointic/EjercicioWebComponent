import { IFigura, FiguraTipo } from "../modelos/FiguraTipo";
import { Triangulo } from "../modelos/Triangulo";
import { Cuadrado } from "../modelos/Cuadrado";
import { Circulo } from "../modelos/Circulo";

export type FiguraOptions = {
  base?: number;
  altura?: number;
  lado?: number;
  radio?: number;
};

/**
 * Factory Method:
 * Crea una figura concreta a partir de un enum + opciones.
 */
export class FiguraFactoryMethod {
  static crearFigura(
    tipo: FiguraTipo,
    opciones: FiguraOptions = {},
    rellena: boolean = false
  ): IFigura {
    switch (tipo) {
      case FiguraTipo.Triangulo:
        return new Triangulo(
          opciones.base ?? 1,
          opciones.altura ?? 1,
          rellena
        );

      case FiguraTipo.Cuadrado:
        return new Cuadrado(opciones.lado ?? 1, rellena);

      case FiguraTipo.Circulo:
        return new Circulo(opciones.radio ?? 1, rellena);

      default:
        throw new Error("Tipo de figura no soportado");
    }
  }
}
