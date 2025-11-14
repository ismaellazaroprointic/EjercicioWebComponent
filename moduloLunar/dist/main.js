import { Astronauta } from "./models/Astronauta.js";
import { ValidadorMetamorfico } from "./validadores/ValidadorMetamorfico.js";
import { EntradaExtendida } from "./entradas/EntradaExtendida.js";
import { SalidaAmericana } from "./salidas/SalidaAmericana.js";
import { Mision } from "./models/Mision.js";
import { crearDescripcionDetallada } from "./utils.js";
const listaRocas = [];
const piloto = new Astronauta("Pepito", "Lopez", 45);
const misionMetamorfica = new ValidadorMetamorfico();
const entradaRandom = new EntradaExtendida();
const salidaAmericana = new SalidaAmericana();
const mision = new Mision(piloto, misionMetamorfica, entradaRandom, salidaAmericana);
// Obtenemos el formulario por su id
const formulario = document.getElementById("formulario");
const listaRocasHtml = document.getElementById("listaRocas");
const idIntroducido = document.getElementById("nombreAnalizado");
const boton = document.getElementById("botonAnalizador");
if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        // Obtenemos los datos del formulario usando FormData
        const formData = new FormData(formulario);
        // Convertimos a un objeto simple
        const datos = {};
        formData.forEach((valor, clave) => {
            datos[clave] = valor;
        });
        // Usamos la entrada configurada en la misión para crear una roca
        const roca = mision.entrada.leer(datos);
        listaRocas.push(roca);
        // Añade el nombre e ID de la roca al <ul> de la listaRocasHtml
        if (listaRocasHtml) {
            crearDescripcionDetallada(listaRocasHtml, roca);
        }
    });
}
if (idIntroducido && boton) {
    boton.addEventListener("click", () => {
        const id = idIntroducido.value.trim();
        if (id === "") {
            alert("Introduce un ID de roca");
        }
        else {
            const roca = listaRocas.find(r => r.id === id);
            if (roca) {
                mision.analiza(roca);
            }
            else {
                alert("No existe una roca con ese ID");
            }
        }
    });
}
