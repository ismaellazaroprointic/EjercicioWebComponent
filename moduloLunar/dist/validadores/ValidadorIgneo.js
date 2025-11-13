"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorIgneo = void 0;
class ValidadorIgneo {
    isValid(roca) {
        if (roca.grupo === "Igneas" && roca.tamañoGrano.desc === "muy grueso") {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.ValidadorIgneo = ValidadorIgneo;
