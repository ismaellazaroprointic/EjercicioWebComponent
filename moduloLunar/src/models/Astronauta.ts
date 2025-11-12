class Astronauta implements IPilotable{

    identificador: string;
    nombreCompleto: string;
    edad: number;

    constructor(identificador: string, nombreCompleto: string, edad: number){
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }

    dameIdentificador(): string {
        return this.identificador;
    }

    dameNombreCompleto(): string {
        return this.nombreCompleto;
    }

    dameEdad(): number {
        return this.edad;
    }
}
