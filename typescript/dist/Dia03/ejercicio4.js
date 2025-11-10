"use strict";
// Ejercicio Clases 04 - TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostradorEspanol = exports.MostradorIngles = exports.ValidadorEspanol = exports.ValidadorIngles = exports.Persona = void 0;
// --- Modelo ---
class Persona {
    constructor(primerNombre, nombreIntermedio, apellido1, apellido2, anioNacimiento, identificativo, activo) {
        this.primerNombre = primerNombre;
        this.nombreIntermedio = nombreIntermedio;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.anioNacimiento = anioNacimiento;
        this.identificativo = identificativo;
        this.activo = activo;
    }
}
exports.Persona = Persona;
// --- Utilidades ---
function tieneValor(v) {
    return v !== null && v !== undefined && `${v}`.trim() !== "";
}
function camposConValor(p, campos) {
    return campos.filter((c) => tieneValor(p[c]));
}
const TODOS_LOS_CAMPOS = [
    "identificativo",
    "primerNombre",
    "nombreIntermedio",
    "apellido1",
    "apellido2",
    "anioNacimiento",
    "activo",
];
// --- Validadores ---
class ValidadorIngles {
    constructor() {
        this.obligatorios = [
            "identificativo",
            "primerNombre",
            "nombreIntermedio",
            "apellido1",
        ];
    }
    camposObligatorios() {
        return this.obligatorios;
    }
    isValid(p) {
        return camposConValor(p, this.obligatorios).length === this.obligatorios.length;
    }
}
exports.ValidadorIngles = ValidadorIngles;
class ValidadorEspanol {
    constructor() {
        this.obligatorios = [
            "identificativo",
            "primerNombre",
            "apellido1",
            "apellido2",
        ];
    }
    camposObligatorios() {
        return this.obligatorios;
    }
    isValid(p) {
        return camposConValor(p, this.obligatorios).length === this.obligatorios.length;
    }
}
exports.ValidadorEspanol = ValidadorEspanol;
const etiquetasEN = {
    identificativo: "Identifier",
    primerNombre: "First Name",
    nombreIntermedio: "Middle Name",
    apellido1: "Surname 1",
    apellido2: "Surname 2",
    anioNacimiento: "Year of Birth",
    activo: "Active",
};
const etiquetasES = {
    identificativo: "Identificativo",
    primerNombre: "Primer Nombre",
    nombreIntermedio: "Nombre Intermedio",
    apellido1: "Apellido 1",
    apellido2: "Apellido 2",
    anioNacimiento: "Año de Nacimiento",
    activo: "Activo",
};
function valorComoTexto(v) {
    if (typeof v === "boolean")
        return v ? "Sí" : "No";
    return `${v ?? ""}`;
}
function renderListaHTML(titulo, p, campos, etiquetas) {
    if (campos.length === 0)
        return "";
    const lis = campos
        .map((c) => `<li><strong>${etiquetas[c]}:</strong> ${valorComoTexto(p[c])}</li>`)
        .join("");
    return `<section><h4>${titulo}</h4><ul>${lis}</ul></section>`;
}
// --- Mostradores ---
class MostradorBase {
    constructor(validador) {
        this.validador = validador;
    }
    muestra(p) {
        const etq = this.etiquetas();
        const { oblig, opt, valido, invalido } = this.titulos();
        const obligatorios = this.validador.camposObligatorios();
        const opcionales = TODOS_LOS_CAMPOS.filter((c) => !obligatorios.includes(c));
        const obligConValor = camposConValor(p, obligatorios);
        const opcConValor = camposConValor(p, opcionales);
        const estado = this.validador.isValid(p) ? valido : invalido;
        const htmlOblig = renderListaHTML(oblig, p, obligConValor, etq);
        const htmlOpt = renderListaHTML(opt, p, opcConValor, etq);
        return `
        <article class="persona">
          <h3>${estado}</h3>
          ${htmlOblig}
          ${htmlOpt}
        </article>
      `.trim();
    }
}
class MostradorIngles extends MostradorBase {
    etiquetas() {
        return etiquetasEN;
    }
    titulos() {
        return {
            oblig: "Required fields",
            opt: "Optional fields",
            valido: "Valid person (EN)",
            invalido: "Invalid person (missing required fields) (EN)",
        };
    }
}
exports.MostradorIngles = MostradorIngles;
class MostradorEspanol extends MostradorBase {
    etiquetas() {
        return etiquetasES;
    }
    titulos() {
        return {
            oblig: "Campos obligatorios",
            opt: "Campos optativos",
            valido: "Persona válida (ES)",
            invalido: "Persona inválida (faltan obligatorios) (ES)",
        };
    }
}
exports.MostradorEspanol = MostradorEspanol;
// --- Ejemplo de uso ---
// const p = new Persona("Ismael", null, "Lázaro", "García", 2001, "ABC123", true);
// const valES = new ValidadorEspanol();
// const viewES = new MostradorEspanol(valES).muestra(p);
// document.body.innerHTML = viewES;
