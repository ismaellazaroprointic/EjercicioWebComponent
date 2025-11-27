import { Roca } from "../services/roca";

export interface ISalida {

    muestra(cadena: boolean, miRoca: Roca): void;
}