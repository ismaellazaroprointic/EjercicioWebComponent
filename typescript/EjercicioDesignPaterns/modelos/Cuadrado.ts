import { IFigura, FiguraTipo } from "./FiguraTipo";

export class Cuadrado implements IFigura {
  tipo = FiguraTipo.Cuadrado;

  constructor(public lado: number, public rellena: boolean) {}

  getArea(): number {
    return this.lado * this.lado;
  }

  getPerimetro(): number {
    return 4 * this.lado;
  }

  clone(): IFigura {
    return new Cuadrado(this.lado, this.rellena);
  }
}
