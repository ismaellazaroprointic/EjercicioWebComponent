import { AlmacenamientoIndexedDB } from "./almacenamiento/AlmacenamientoIndexedDB.js";
const almacenamiento = new AlmacenamientoIndexedDB();
async function cargarYMostrarRocas() {
    const contenedor = document.getElementById("lista-rocas");
    if (!contenedor) {
        console.error("No se ha encontrado el contenedor #lista-rocas");
        return;
    }
    contenedor.innerHTML = "<p>Cargando rocas...</p>";
    try {
        const rocas = await almacenamiento.cogerTodasLasRocas();
        console.log("Rocas obtenidas desde IndexedDB:", rocas);
        if (rocas.length === 0) {
            contenedor.innerHTML = "<p>No hay rocas validadas almacenadas.</p>";
            return;
        }
        contenedor.innerHTML = "";
        rocas.forEach((roca) => {
            const card = document.createElement("article");
            card.className = "tarjeta-roca";
            card.innerHTML = `
        <h3>${roca.nombre} <small>(${roca.id})</small></h3>
        <p><strong>Grupo:</strong> ${roca.grupo}</p>
        <p><strong>Dureza:</strong> ${roca.dureza}</p>
        <p><strong>Textura:</strong> ${roca.textura}</p>
        <p><em>Haz click en esta tarjeta para borrar la roca.</em></p>
      `;
            // 🗑 Borrar al hacer click en la tarjeta
            card.addEventListener("click", async () => {
                const confirmar = confirm(`¿Seguro que quieres borrar la roca con ID "${roca.id}"?`);
                if (!confirmar)
                    return;
                try {
                    await almacenamiento.borrarRoca(roca.id);
                    await cargarYMostrarRocas();
                }
                catch (err) {
                    console.error("Error al borrar roca desde tarjeta", err);
                    alert("Ha ocurrido un error al borrar la roca.");
                }
            });
            contenedor.appendChild(card);
        });
    }
    catch (err) {
        console.error("Error al cargar rocas desde IndexedDB", err);
        contenedor.innerHTML =
            "<p>Ha ocurrido un error al cargar las rocas.</p>";
    }
}
function configurarBorradoPorId() {
    const input = document.getElementById("input-borrar-id");
    const boton = document.getElementById("btn-borrar-id");
    const mensaje = document.getElementById("mensaje-borrado");
    if (!input || !boton || !mensaje) {
        console.error("Faltan elementos para el borrado por ID");
        return;
    }
    boton.addEventListener("click", async () => {
        const id = input.value.trim();
        mensaje.textContent = "";
        if (!id) {
            mensaje.textContent = "Introduce un ID.";
            return;
        }
        try {
            await almacenamiento.borrarRoca(id);
            mensaje.textContent = `Roca con ID "${id}" borrada (si existía).`;
            input.value = "";
            await cargarYMostrarRocas();
        }
        catch (err) {
            console.error("Error al borrar roca por ID", err);
            mensaje.textContent = "Ha ocurrido un error al borrar la roca.";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ historial.js cargado");
    configurarBorradoPorId();
    cargarYMostrarRocas();
});
