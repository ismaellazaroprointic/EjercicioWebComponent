import { IEntrada } from "../interfaces/IEntrada";
import { Roca } from "../models/Roca";

export class EntradaExtendida implements IEntrada {

    leer(datos: Record<string, unknown>): Roca {
        // Mapea claves "largas" propias de labels
        const id = String(datos["Identificador"] ?? datos["ID"] ?? "");
        const nombre = String(datos["Nombre"] ?? "");
        const grupo = String(datos["Grupo"] ?? "") as "Igneas" | "Metamorficas" | "Sedimentarias";
        const dureza = Number(datos["Dureza"]);
        const tamañoGranoGrado = Number(
            (datos["Tamaño de grano (grado)"] ?? datos["Tamano de grano (grado)"] ?? datos["Tamaño de grano"])
        );
        const clasificacion = String(datos["Clasificación"] ?? datos["Clasificacion"] ?? "") as
            | "Rocas de construccion"
            | "Rocas ornamentales"
            | "Rocas de uso en utensilios para el hombre"
            | "Piedras machacadas";
        const tamañoCristales = Number(datos["Tamaño de cristales"] ?? datos["Tamano de cristales"]);
        const temperaturaFormacion = Number(datos["Temperatura de formación"] ?? datos["Temperatura de formacion"]);
        const estructura = String(datos["Estructura"] ?? "");
        const formaGranos = String(datos["Forma de granos"] ?? "");
        const textura = String(datos["Textura"] ?? "") as "Vitrea" | "Afanitica" | "Faneritica";

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