export class AlmacenamientoBase {
    async guardarRoca(roca) {
        const db = await this.abrirBD();
        return new Promise((resolve, reject) => {
            const tx = db.transaction("rocas", "readwrite");
            const store = tx.objectStore("rocas");
            const request = store.put(roca); // usa id de la propia roca
            request.onsuccess = () => resolve(1);
            request.onerror = () => reject(request.error);
        });
    }
    async borrarRoca(id) {
        const db = await this.abrirBD();
        return new Promise((resolve, reject) => {
            const tx = db.transaction("rocas", "readwrite");
            const store = tx.objectStore("rocas");
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
    async cogerTodasLasRocas() {
        const db = await this.abrirBD();
        return new Promise((resolve, reject) => {
            const tx = db.transaction("rocas", "readonly");
            const store = tx.objectStore("rocas");
            const request = store.getAll();
            request.onsuccess = () => {
                const datos = request.result;
                // 🔴 AQUÍ ES DONDE USAMOS EL FACTORY METHOD
                const rocas = datos.map(d => this.crearRocaDesdeDatos(d));
                resolve(rocas);
            };
            request.onerror = () => reject(request.error);
        });
    }
}
