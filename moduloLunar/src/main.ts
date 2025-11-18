import { Astronauta } from "./models/Astronauta.js";
import { EntradaExtendida } from "./entradas/EntradaExtendida.js";
import { SalidaAmericana } from "./salidas/SalidaAmericana.js";
import { Mision } from "./models/Mision.js";
import { Roca } from "./models/Roca.js";
import { IPilotable } from "./interfaces/IPilotable.js";
import { IValidable } from "./interfaces/IValidable.js";
import { IEntrada } from "./interfaces/IEntrada.js";
import { ISalida } from "./interfaces/ISalida.js";
import { crearDescripcionDetallada } from "./utils.js";
import { AlmacenamientoIndexedDB } from "./almacenamiento/AlmacenamientoIndexedDB.js";
import { ValidadorSedimentario } from "./validadores/ValidadorSedimentario.js";

const listaRocas: Roca[] = [];
const almacenamiento = new AlmacenamientoIndexedDB();

const piloto: IPilotable = new Astronauta("Pepito", "Lopez", 45);
const misionSedimentaria: IValidable = new ValidadorSedimentario();
const entradaRandom: IEntrada = new EntradaExtendida();
const salidaAmericana: ISalida = new SalidaAmericana();

const mision: Mision = new Mision(piloto, misionSedimentaria, entradaRandom, salidaAmericana);


// Obtenemos el formulario por su id
const formulario = document.getElementById("formulario");
const listaRocasHtml = document.getElementById("listaRocas");
const idIntroducido = document.getElementById("nombreAnalizado");
const boton = document.getElementById("botonAnalizador");

if (formulario) {    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        // Obtenemos los datos del formulario usando FormData
        const formData = new FormData(formulario as HTMLFormElement);
        // Convertimos a un objeto simple
        const datos: Record<string, unknown> = {};
        formData.forEach((valor, clave) => {
            datos[clave] = valor;
        });

        // Usamos la entrada configurada en la misión para crear una roca
        const roca = mision.entrada.leer(datos);
        listaRocas.push(roca);        
        // Añade el nombre e ID de la roca al <ul> de la listaRocasHtml
        if (listaRocasHtml) {
            crearDescripcionDetallada(listaRocasHtml,roca);
        }
    });
}

if (idIntroducido && boton) {
    boton.addEventListener("click", async () => {
        const id = (idIntroducido as HTMLInputElement).value.trim();

        if (id === "") {
            alert("Introduce un ID de roca");
            return;
        }

        const roca = listaRocas.find(r => r.id === id);

        if (!roca) {
            alert("No existe una roca con ese ID");
            return;
        }

        // 1. Analizamos la roca
        const esValida = mision.analiza(roca); // asumo que devuelve boolean

        if (esValida) {
            try {
                // 2. Solo si es válida la guardamos en IndexedDB
                await almacenamiento.guardarRoca(roca);
                alert("Roca válida. Se ha guardado en IndexedDB.");
            } catch (err) {
                console.error("Error al guardar la roca en IndexedDB", err);
                alert("La roca es válida, pero ha fallado el guardado en IndexedDB.");
            }
        } else {
            alert("La roca no es válida. No se ha guardado.");
        }
    });
}
