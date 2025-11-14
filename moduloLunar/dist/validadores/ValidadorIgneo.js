export class ValidadorIgneo {
    isValid(roca) {
        if (roca.grupo === "Igneas" && roca.tamañoGrano.desc === "muy grueso") {
            return true;
        }
        else {
            return false;
        }
    }
}
