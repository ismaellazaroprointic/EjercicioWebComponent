import { IFigura, FiguraTipo } from "./FiguraTipo";

export class Circulo implements IFigura {
  tipo = FiguraTipo.Circulo;

  constructor(public radio: number, public rellena: boolean) {}

  getArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  getPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

  clone(): IFigura {
    return new Circulo(this.radio, this.rellena);
  }
}
