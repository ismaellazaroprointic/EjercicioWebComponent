import {Roca} from "./Roca";
import { IPilotable } from "../interfaces/IPilotable";
import { IEntrada } from "../interfaces/IEntrada";
import { ISalida } from "../interfaces/ISalida";
import { IValidable } from "../interfaces/IValidable";

export class Mision {

    piloto: IPilotable;
    mision: IValidable;
    entrada: IEntrada;
    salida: ISalida;

    constructor(piloto: IPilotable, mision: IValidable, entrada: IEntrada, salida: ISalida){
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }

    analiza(miRoca: Roca): boolean{

        if(this.mision.isValid(miRoca)){
            this.salida.muestra(true, miRoca);
            return true;
        } else {
            this.salida.muestra(false, miRoca);
            return false;
        }
    }
}