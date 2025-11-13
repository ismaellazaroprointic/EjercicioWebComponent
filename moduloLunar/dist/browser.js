"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntradaExtendida_1 = require("./entradas/EntradaExtendida");
const EntradaReducida_1 = require("./entradas/EntradaReducida");
const Astronauta_1 = require("./models/Astronauta");
const Mision_1 = require("./models/Mision");
const ValidadorMetamorfico_1 = require("./validadores/ValidadorMetamorfico");
const SalidaAmericana_1 = require("./salidas/SalidaAmericana");
function formDataToObject(form) {
    const fd = new FormData(form);
    const entries = {};
    fd.forEach((value, key) => {
        entries[key] = value;
    });
    return entries;
}
function prepararMision(entrada) {
    const piloto = new Astronauta_1.Astronauta("Pepito", "aeojogies", 45);
    const validador = new ValidadorMetamorfico_1.ValidadorMetamorfico();
    const salida = new SalidaAmericana_1.SalidaAmericana();
    const fuente = entrada === "extendida" ? new EntradaExtendida_1.EntradaExtendida() : new EntradaReducida_1.EntradaReducida();
    return new Mision_1.Mision(piloto, validador, fuente, salida);
}
function manejarSubmit(form, tipo) {
    const mision = prepararMision(tipo);
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        try {
            const datos = formDataToObject(form);
            const roca = mision.entrada.leer(datos);
            mision.analiza(roca);
        }
        catch (error) {
            console.error("Error al procesar el formulario:", error);
            alert(error instanceof Error
                ? error.message
                : "Error inesperado leyendo el formulario");
        }
    });
}
const formExtendida = document.getElementById("form-extendida");
if (formExtendida instanceof HTMLFormElement) {
    manejarSubmit(formExtendida, "extendida");
}
const formReducida = document.getElementById("form-reducida");
if (formReducida instanceof HTMLFormElement) {
    manejarSubmit(formReducida, "reducida");
}
