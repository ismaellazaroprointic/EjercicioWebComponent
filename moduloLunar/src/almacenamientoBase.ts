// src/AlmacenamientoBase.ts
import type { Roca } from "./models/Roca.js";
import type { IGuardable } from "./interfaces/IGuardable.js";

export abstract class AlmacenamientoBase implements IGuardable {

  protected abstract abrirBD(): Promise<IDBDatabase>;
  protected abstract crearRocaDesdeDatos(datos: Record<string, unknown>): Roca;

  async guardarRoca(roca: Roca): Promise<number> {
    const db = await this.abrirBD();

    return new Promise((resolve, reject) => {
      const tx = db.transaction("rocas", "readwrite");
      const store = tx.objectStore("rocas");
      const request = store.put(roca); // usa id de la propia roca

      request.onsuccess = () => resolve(1);
      request.onerror = () => reject(request.error);
    });
  }

  async borrarRoca(id: string): Promise<void> {
    const db = await this.abrirBD();

    return new Promise((resolve, reject) => {
      const tx = db.transaction("rocas", "readwrite");
      const store = tx.objectStore("rocas");
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async cogerTodasLasRocas(): Promise<Roca[]> {
    const db = await this.abrirBD();

    return new Promise((resolve, reject) => {
      const tx = db.transaction("rocas", "readonly");
      const store = tx.objectStore("rocas");
      const request = store.getAll();

      request.onsuccess = () => {
        const datos = request.result as Record<string, unknown>[];
        // 🔴 AQUÍ ES DONDE USAMOS EL FACTORY METHOD
        const rocas = datos.map(d => this.crearRocaDesdeDatos(d));
        resolve(rocas);
      };

      request.onerror = () => reject(request.error);
    });
  }
}
