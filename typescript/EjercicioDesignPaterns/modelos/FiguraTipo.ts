export enum FiguraTipo {
    Triangulo = "TRIANGULO",
    Cuadrado = "CUADRADO",
    Circulo = "CIRCULO",
  }
  
  export interface IFigura {
    tipo: FiguraTipo;
    rellena: boolean;
  
    getArea(): number;
    getPerimetro(): number;
    clone(): IFigura;
  }
  