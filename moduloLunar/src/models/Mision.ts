class Mision {

    piloto: IPilotable;
    mision: IValidable;
    entrada: IEntrada;
    salida: ISalida;

    constructor(piloto: IPilotable, mision: IValidable, entrada: IEntrada, salida: ISalida){
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }

    analiza(miRoca: Roca): boolean{

        if(this.mision.isValid(miRoca)){
            this.salida.muestra(`La roca ${miRoca.nombre} cumple la misión`);
            return true;
        } else {
            this.salida.muestra(`La roca ${miRoca.nombre} NO cumple la misión`);
            return false;
        }
    }
}