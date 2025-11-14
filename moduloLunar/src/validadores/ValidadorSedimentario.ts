import { Roca } from "../models/Roca.js";
import { IValidable } from "../interfaces/IValidable.js";

export class ValidadorSedimentario implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Sedimentarias" && roca.textura == "Faneritica"){
            return true;
        } else {
            return false;
        }
    }
}