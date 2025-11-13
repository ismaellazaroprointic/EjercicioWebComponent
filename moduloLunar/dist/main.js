"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Astronauta_1 = require("./models/Astronauta");
const ValidadorMetamorfico_1 = require("./validadores/ValidadorMetamorfico");
const EntradaExtendida_1 = require("./entradas/EntradaExtendida");
const SalidaAmericana_1 = require("./salidas/SalidaAmericana");
const Mision_1 = require("./models/Mision");
const Roca_1 = require("./models/Roca");
const piloto = new Astronauta_1.Astronauta("Pepito", "aeojogies", 45);
const misionMetamorfica = new ValidadorMetamorfico_1.ValidadorMetamorfico();
const entradaRandom = new EntradaExtendida_1.EntradaExtendida();
const salidaAmericana = new SalidaAmericana_1.SalidaAmericana();
const mision = new Mision_1.Mision(piloto, misionMetamorfica, entradaRandom, salidaAmericana);
// Obtenemos el formulario por su id
const formulario = document.getElementById("formulario");
if (formulario) {
    console.log("ILT: Hola");
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
        console.log(roca);
        // Analiza la roca y muestra el resultado (por la salida)
        mision.analiza(roca);
    });
}
//Ya tengo la mision con todos sus componentes, falta crear una roca para analizarla. (que pereza con la de campos que tiene)
const rocaEjemplo = new Roca_1.Roca("00001", "as4547fd", "Metamorficas", 5, { grado: 1, desc: "" }, "Rocas ornamentales", 8, -50, "Una estructura robusta con matices azulados", "forma redonda y alargada", "Vitrea");
mision.analiza(rocaEjemplo);
//Tengo que hacer lo mismo que he hecho con los validadores (trasladar las necesidades de la interfaz a una clase) en las entradas y salidas. Las entradas tienen que seguir las especificaciones de la interfaz IEntrada y las salidas la de la interfaz ISalida.
//Me faltan las entradas, que no tengo claro que hacen ni para que sirven.
