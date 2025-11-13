import {Roca} from "../models/Roca";

export interface ISalida {

    muestra(cadena: boolean, miRoca: Roca): void;
}