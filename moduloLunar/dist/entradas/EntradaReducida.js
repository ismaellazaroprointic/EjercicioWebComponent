"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaReducida = void 0;
const Roca_1 = require("../models/Roca");
class EntradaReducida {
    leer(datos) {
        var _a, _b, _c, _d, _e, _f, _g;
        // Mapea claves "cortas" propias de placeholders
        const id = String((_a = datos["id"]) !== null && _a !== void 0 ? _a : "");
        const nombre = String((_b = datos["nombre"]) !== null && _b !== void 0 ? _b : "");
        const grupo = String((_c = datos["grupo"]) !== null && _c !== void 0 ? _c : "");
        const dureza = Number(datos["dureza"]);
        const tamañoGranoGrado = Number(datos["tamGrano"]);
        const clasificacion = String((_d = datos["clasif"]) !== null && _d !== void 0 ? _d : "");
        const tamañoCristales = Number(datos["tamCrist"]);
        const temperaturaFormacion = Number(datos["temp"]);
        const estructura = String((_e = datos["estructura"]) !== null && _e !== void 0 ? _e : "");
        const formaGranos = String((_f = datos["forma"]) !== null && _f !== void 0 ? _f : "");
        const textura = String((_g = datos["textura"]) !== null && _g !== void 0 ? _g : "");
        return new Roca_1.Roca(id, nombre, grupo, dureza, { grado: tamañoGranoGrado, desc: "" }, clasificacion, tamañoCristales, temperaturaFormacion, estructura, formaGranos, textura);
    }
}
exports.EntradaReducida = EntradaReducida;
