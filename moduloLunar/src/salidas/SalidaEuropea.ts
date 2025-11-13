import { Roca } from "../models/Roca";
import { ISalida } from "../interfaces/ISalida";

export class SalidaEuropea implements ISalida {
    muestra(confirmacion: boolean, miRoca: Roca): void{
        const gradosCelsius: number = ( miRoca.temperaturaFormacion - 273.15 ) * 1.8 + 32;
        if(confirmacion === true) {
            console.log(`La roca: "${miRoca.nombre}" es valida para la mision y tiene una temperatura de formacion de: ${gradosCelsius}ºC (Celsius)`);
        } else {
            console.log(`La roca: "${miRoca.nombre}" NO es valida para la mision y tiene una temperatura de formacion de: ${gradosCelsius}ºC (Celsius)`);
            }        
    }
}