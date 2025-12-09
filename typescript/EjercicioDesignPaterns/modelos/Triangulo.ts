import { IFigura, FiguraTipo } from "./FiguraTipo";

export class Triangulo implements IFigura {
  tipo = FiguraTipo.Triangulo;

  constructor(
    public base: number,
    public altura: number,
    public rellena: boolean
  ) {}

  getArea(): number {
    return (this.base * this.altura) / 2;
  }

  getPerimetro(): number {
    // Aproximamos un triángulo isósceles a partir de base y altura
    const cateto = Math.sqrt((this.base / 2) ** 2 + this.altura ** 2);
    return this.base + 2 * cateto;
  }

  clone(): IFigura {
    return new Triangulo(this.base, this.altura, this.rellena);
  }
}
