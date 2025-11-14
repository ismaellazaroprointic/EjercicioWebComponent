import {Roca} from "../models/Roca.js";

export interface ISalida {

    muestra(cadena: boolean, miRoca: Roca): void;
}