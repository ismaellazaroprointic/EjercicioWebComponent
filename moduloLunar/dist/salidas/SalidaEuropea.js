"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalidaEuropea = void 0;
class SalidaEuropea {
    muestra(confirmacion, miRoca) {
        const gradosCelsius = (miRoca.temperaturaFormacion - 273.15) * 1.8 + 32;
        if (confirmacion === true) {
            console.log(`La roca: "${miRoca.nombre}" es valida para la mision y tiene una temperatura de formacion de: ${gradosCelsius}ºC (Celsius)`);
        }
        else {
            console.log(`La roca: "${miRoca.nombre}" NO es valida para la mision y tiene una temperatura de formacion de: ${gradosCelsius}ºC (Celsius)`);
        }
    }
}
exports.SalidaEuropea = SalidaEuropea;
