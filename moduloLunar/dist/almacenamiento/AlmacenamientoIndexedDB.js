// src/AlmacenamientoIndexedDB.ts
import { Roca } from "../models/Roca.js";
import { AlmacenamientoBase } from "../almacenamientoBase.js";
const DB_NAME = "ModuloLunarDB";
const DB_VERSION = 1;
const STORE_NAME = "rocas";
export class AlmacenamientoIndexedDB extends AlmacenamientoBase {
    abrirBD() {
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
    crearRocaDesdeDatos(datos) {
        return new Roca(datos.id, datos.nombre, datos.grupo, datos.dureza, datos.tamañoGrano, datos.clasificacion, datos.tamañoCristales, datos.temperaturaFormacion, datos.estructura, datos.formaGranos, datos.textura);
    }
}
