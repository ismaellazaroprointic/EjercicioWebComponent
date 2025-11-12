"use strict";
class ValidadorSedimentario {
    isValid(roca) {
        if (roca.grupo === "Sedimentarias" && roca.textura == "Faneritica") {
            return true;
        }
        else {
            return false;
        }
    }
}
