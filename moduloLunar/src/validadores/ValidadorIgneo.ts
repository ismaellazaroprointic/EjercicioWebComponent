import { Roca } from "../models/Roca.js";
import { IValidable } from "../interfaces/IValidable.js";

export class ValidadorIgneo implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Igneas" && roca.tamañoGrano.desc === "muy grueso"){
            return true;
        } else {
            return false;
        }
    }
}