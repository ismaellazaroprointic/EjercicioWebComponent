"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mision = void 0;
class Mision {
    constructor(piloto, mision, entrada, salida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }
    analiza(miRoca) {
        if (this.mision.isValid(miRoca)) {
            this.salida.muestra(true, miRoca);
            return true;
        }
        else {
            this.salida.muestra(false, miRoca);
            return false;
        }
    }
}
exports.Mision = Mision;
