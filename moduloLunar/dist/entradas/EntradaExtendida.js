"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaExtendida = void 0;
const Roca_1 = require("../models/Roca");
class EntradaExtendida {
    leer(datos) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        // Mapea claves "largas" propias de labels
        const id = String((_b = (_a = datos["Identificador"]) !== null && _a !== void 0 ? _a : datos["ID"]) !== null && _b !== void 0 ? _b : "");
        const nombre = String((_c = datos["Nombre"]) !== null && _c !== void 0 ? _c : "");
        const grupo = String((_d = datos["Grupo"]) !== null && _d !== void 0 ? _d : "");
        const dureza = Number(datos["Dureza"]);
        const tamañoGranoGrado = Number(((_f = (_e = datos["Tamaño de grano (grado)"]) !== null && _e !== void 0 ? _e : datos["Tamano de grano (grado)"]) !== null && _f !== void 0 ? _f : datos["Tamaño de grano"]));
        const clasificacion = String((_h = (_g = datos["Clasificación"]) !== null && _g !== void 0 ? _g : datos["Clasificacion"]) !== null && _h !== void 0 ? _h : "");
        const tamañoCristales = Number((_j = datos["Tamaño de cristales"]) !== null && _j !== void 0 ? _j : datos["Tamano de cristales"]);
        const temperaturaFormacion = Number((_k = datos["Temperatura de formación"]) !== null && _k !== void 0 ? _k : datos["Temperatura de formacion"]);
        const estructura = String((_l = datos["Estructura"]) !== null && _l !== void 0 ? _l : "");
        const formaGranos = String((_m = datos["Forma de granos"]) !== null && _m !== void 0 ? _m : "");
        const textura = String((_o = datos["Textura"]) !== null && _o !== void 0 ? _o : "");
        return new Roca_1.Roca(id, nombre, grupo, dureza, { grado: tamañoGranoGrado, desc: "" }, clasificacion, tamañoCristales, temperaturaFormacion, estructura, formaGranos, textura);
    }
}
exports.EntradaExtendida = EntradaExtendida;
