import { FiguraTipo, IFigura } from "./modelos/FiguraTipo";
import { FiguraFactoryMethod } from "./factories/FiguraFactoryMethod";
import {
  FiguraNormalFactory,
  FiguraRellenaFactory,
  IFiguraAbstractFactory,
} from "./factories/FiguraAbstractFactory";
import { FiguraMetricsService } from "./services/FiguraMetricsService";

function main() {
  console.log("== FACTORY METHOD ==");

  const trianguloFM = FiguraFactoryMethod.crearFigura(
    FiguraTipo.Triangulo,
    { base: 10, altura: 5 },
    false
  );

  const cuadradoFM = FiguraFactoryMethod.crearFigura(
    FiguraTipo.Cuadrado,
    { lado: 4 },
    true
  );

  console.log("Triángulo (FM):", trianguloFM);
  console.log("Cuadrado (FM):", cuadradoFM);

  console.log("\n== ABSTRACT FACTORY ==");

  const fabricaNormal: IFiguraAbstractFactory = new FiguraNormalFactory();
  const fabricaRellena: IFiguraAbstractFactory = new FiguraRellenaFactory();

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

  const triangulosClonados: IFigura[] = [];
  for (let i = 0; i < 150; i++) {
    triangulosClonados.push(trianguloPrototipo.clone());
  }

  console.log("Número de triángulos clonados:", triangulosClonados.length);

  console.log("\n== SINGLETON (MÉTRICAS) ==");

  const metrics = FiguraMetricsService.instance;

  const areaTri = metrics.getArea(trianguloPrototipo);
  const perimetroTri = metrics.getPerimetro(trianguloPrototipo);

  const areaTotal = metrics.getAreaTotal(triangulosClonados);
  const perimetroTotal = metrics.getPerimetroTotal(triangulosClonados);

  console.log("Área triángulo prototipo:", areaTri.toFixed(2));
  console.log("Perímetro triángulo prototipo:", perimetroTri.toFixed(2));
  console.log("Área total (150 triángulos):", areaTotal.toFixed(2));
  console.log(
    "Perímetro total (150 triángulos):",
    perimetroTotal.toFixed(2)
  );
}

main();
