"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FiguraTipo_1 = require("./modelos/FiguraTipo");
const FiguraFactoryMethod_1 = require("./factories/FiguraFactoryMethod");
const FiguraAbstractFactory_1 = require("./factories/FiguraAbstractFactory");
const FiguraMetricsService_1 = require("./services/FiguraMetricsService");
function main() {
    console.log("== FACTORY METHOD ==");
    const trianguloFM = FiguraFactoryMethod_1.FiguraFactoryMethod.crearFigura(FiguraTipo_1.FiguraTipo.Triangulo, { base: 10, altura: 5 }, false);
    const cuadradoFM = FiguraFactoryMethod_1.FiguraFactoryMethod.crearFigura(FiguraTipo_1.FiguraTipo.Cuadrado, { lado: 4 }, true);
    console.log("Triángulo (FM):", trianguloFM);
    console.log("Cuadrado (FM):", cuadradoFM);
    console.log("\n== ABSTRACT FACTORY ==");
    const fabricaNormal = new FiguraAbstractFactory_1.FiguraNormalFactory();
    const fabricaRellena = new FiguraAbstractFactory_1.FiguraRellenaFactory();
    const triNormal = fabricaNormal.crearTriangulo(8, 4);
    const cuadNormal = fabricaNormal.crearCuadrado(3);
    const triRelleno = fabricaRellena.crearTriangulo(10, 5);
    const cuadRelleno = fabricaRellena.crearCuadrado(4);
    console.log("Triángulo normal:", triNormal);
    console.log("Cuadrado normal:", cuadNormal);
    console.log("Triángulo relleno:", triRelleno);
    console.log("Cuadrado relleno:", cuadRelleno);
    console.log("\n== PROTOTYPE (150 triángulos rellenos) ==");
    const trianguloPrototipo = fabricaRellena.crearTriangulo(6, 3);
    const triangulosClonados = [];
    for (let i = 0; i < 150; i++) {
        triangulosClonados.push(trianguloPrototipo.clone());
    }
    console.log("Número de triángulos clonados:", triangulosClonados.length);
    console.log("\n== SINGLETON (MÉTRICAS) ==");
    const metrics = FiguraMetricsService_1.FiguraMetricsService.instance;
    const areaTri = metrics.getArea(trianguloPrototipo);
    const perimetroTri = metrics.getPerimetro(trianguloPrototipo);
    const areaTotal = metrics.getAreaTotal(triangulosClonados);
    const perimetroTotal = metrics.getPerimetroTotal(triangulosClonados);
    console.log("Área triángulo prototipo:", areaTri.toFixed(2));
    console.log("Perímetro triángulo prototipo:", perimetroTri.toFixed(2));
    console.log("Área total (150 triángulos):", areaTotal.toFixed(2));
    console.log("Perímetro total (150 triángulos):", perimetroTotal.toFixed(2));
}
main();
