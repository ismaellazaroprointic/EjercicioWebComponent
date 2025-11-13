"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorSedimentario = void 0;
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
exports.ValidadorSedimentario = ValidadorSedimentario;
