"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalidaAmericana = void 0;
class SalidaAmericana {
    muestra(confirmacion, miRoca) {
        const gradosFahrenheit = (miRoca.temperaturaFormacion - 273.15) * 1.8 + 32;
        if (confirmacion === true) {
            console.log(`The rock: "${miRoca.nombre}" is valid for the mission and has a formation temperature of: ${gradosFahrenheit}ºF (Fahrenheit)`);
        }
        else {
            console.log(`The rock: "${miRoca.nombre}" is NOT valid for the mission and has a formation temperature of: ${gradosFahrenheit}ºF (Fahrenheit)`);
        }
    }
}
exports.SalidaAmericana = SalidaAmericana;
