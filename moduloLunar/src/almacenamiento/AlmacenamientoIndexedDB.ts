// src/AlmacenamientoIndexedDB.ts
import { Roca } from "../models/Roca.js";
import { AlmacenamientoBase } from "../almacenamientoBase.js";

const DB_NAME = "ModuloLunarDB";
const DB_VERSION = 1;
const STORE_NAME = "rocas";

export class AlmacenamientoIndexedDB extends AlmacenamientoBase {

  protected abrirBD(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // ⭐ FACTORY METHOD: decide cómo construir una Roca a partir de los datos crudos
  protected crearRocaDesdeDatos(datos: Record<string, unknown>): Roca {
    return new Roca(
      datos.id as string,
      datos.nombre as string,
      datos.grupo as "Igneas" | "Metamorficas" | "Sedimentarias",
      datos.dureza as number,
      datos.tamañoGrano as { grado: number; desc: string },
      datos.clasificacion as
        | "Rocas de construccion"
        | "Rocas ornamentales"
        | "Rocas de uso en utensilios para el hombre"
        | "Piedras machacadas",
      datos.tamañoCristales as number,
      datos.temperaturaFormacion as number,
      datos.estructura as string,
      datos.formaGranos as string,
      datos.textura as "Vitrea" | "Afanitica" | "Faneritica"
    );
  }
}
