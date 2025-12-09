import { IFigura } from "../modelos/FiguraTipo";

/**
 * Singleton:
 * Servicio único para calcular áreas y perímetros de figuras.
 */
export class FiguraMetricsService {
  private static _instance: FiguraMetricsService | null = null;

  private constructor() {}

  static get instance(): FiguraMetricsService {
    if (!this._instance) {
      this._instance = new FiguraMetricsService();
    }
    return this._instance;
  }

  getArea(figura: IFigura): number {
    return figura.getArea();
  }

  getPerimetro(figura: IFigura): number {
    return figura.getPerimetro();
  }

  getAreaTotal(figuras: IFigura[]): number {
    return figuras.reduce((total, f) => total + f.getArea(), 0);
  }

  getPerimetroTotal(figuras: IFigura[]): number {
    return figuras.reduce((total, f) => total + f.getPerimetro(), 0);
  }
}
