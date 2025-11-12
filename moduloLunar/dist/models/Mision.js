"use strict";
class Mision {
    constructor(piloto, mision, entrada, salida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }
    analiza(miRoca) {
        if (this.mision.isValid(miRoca)) {
            this.salida.muestra(`La roca ${miRoca.nombre} cumple la misión`);
            return true;
        }
        else {
            this.salida.muestra(`La roca ${miRoca.nombre} NO cumple la misión`);
            return false;
        }
    }
}
