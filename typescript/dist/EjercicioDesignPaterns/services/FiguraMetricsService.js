"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiguraMetricsService = void 0;
/**
 * Singleton:
 * Servicio único para calcular áreas y perímetros de figuras.
 */
class FiguraMetricsService {
    constructor() { }
    static get instance() {
        if (!this._instance) {
            this._instance = new FiguraMetricsService();
        }
        return this._instance;
    }
    getArea(figura) {
        return figura.getArea();
    }
    getPerimetro(figura) {
        return figura.getPerimetro();
    }
    getAreaTotal(figuras) {
        return figuras.reduce((total, f) => total + f.getArea(), 0);
    }
    getPerimetroTotal(figuras) {
        return figuras.reduce((total, f) => total + f.getPerimetro(), 0);
    }
}
exports.FiguraMetricsService = FiguraMetricsService;
FiguraMetricsService._instance = null;
