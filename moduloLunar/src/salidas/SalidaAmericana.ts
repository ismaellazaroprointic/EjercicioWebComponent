import { Roca } from "../models/Roca";
import { ISalida } from "../interfaces/ISalida";

export class SalidaAmericana implements ISalida{

    muestra(confirmacion: boolean, miRoca: Roca): void{
        const gradosFahrenheit: number = ( miRoca.temperaturaFormacion - 273.15 ) * 1.8 + 32;
        if(confirmacion === true) {
            console.log(`The rock: "${miRoca.nombre}" is valid for the mission and has a formation temperature of: ${gradosFahrenheit}ºF (Fahrenheit)`);
        } else {
            console.log(`The rock: "${miRoca.nombre}" is NOT valid for the mission and has a formation temperature of: ${gradosFahrenheit}ºF (Fahrenheit)`);
            }        
    }
}