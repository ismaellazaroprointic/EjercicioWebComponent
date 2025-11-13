import { Roca } from "../models/Roca";
import { IValidable } from "../interfaces/IValidable";

export class ValidadorSedimentario implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Sedimentarias" && roca.textura == "Faneritica"){
            return true;
        } else {
            return false;
        }
    }
}