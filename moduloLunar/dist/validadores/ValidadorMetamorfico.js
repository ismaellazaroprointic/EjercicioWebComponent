"use strict";
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
