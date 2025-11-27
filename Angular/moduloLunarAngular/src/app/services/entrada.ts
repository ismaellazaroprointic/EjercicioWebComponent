import { IEntrada } from "../interfaces/IEntrada.js";
import { Roca } from "./roca.js";

export class Entrada implements IEntrada {

    leer(datos: Record<string, unknown>): Roca {
        // Mapea claves "largas" propias de labels
        const id = String(datos["id"] ?? "");
        const nombre = String(datos["nombre"] ?? "");
        const grupo = String(datos["grupo"] ?? "") as "Igneas" | "Metamorficas" | "Sedimentarias";
        const dureza = Number(datos["dureza"]);
        const tamañoGranoGrado = Number(datos["tamGrano"]);
        const clasificacion = String(datos["clasif"] ?? "") as
            | "Rocas de construccion"
            | "Rocas ornamentales"
            | "Rocas de uso en utensilios para el hombre"
            | "Piedras machacadas";
        const tamañoCristales = Number(datos["tamCrist"]);
        const temperaturaFormacion = Number(datos["temp"]);
        const estructura = String(datos["estructura"] ?? "");
        const formaGranos = String(datos["forma"] ?? "");
        const textura = String(datos["textura"] ?? "") as "Vitrea" | "Afanitica" | "Faneritica";

        return new Roca(
            id,
            nombre,
            grupo,
            dureza,
            { grado: tamañoGranoGrado, desc: "" },
            clasificacion,
            tamañoCristales,
            temperaturaFormacion,
            estructura,
            formaGranos,
            textura
        );
    }
}