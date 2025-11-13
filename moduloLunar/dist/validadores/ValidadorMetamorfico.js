"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorMetamorfico = void 0;
class ValidadorMetamorfico {
    isValid(roca) {
        if (roca.grupo === "Metamorficas" && (roca.tamañoGrano.desc === "medio" || roca.tamañoGrano.desc === "fino") && roca.textura === "Vitrea") {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.ValidadorMetamorfico = ValidadorMetamorfico;
