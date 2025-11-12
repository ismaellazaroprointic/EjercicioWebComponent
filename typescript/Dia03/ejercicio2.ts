class Envio {

    identificadorDeEnvio: string;
    numeroDeEnvio: bigint;
    precioDeEnvio: number;
    recibido: boolean;

    constructor(identificadorDeEnvio: string, numeroDeEnvio: bigint, precioDeEnvio: number, recibido: boolean) {

        this.identificadorDeEnvio = identificadorDeEnvio;
        this.numeroDeEnvio = numeroDeEnvio;
        this.precioDeEnvio = precioDeEnvio;
        this.recibido = recibido;
    }

    calcularIva(): number {

        return (this.precioDeEnvio/100)*21;
    }

    validarIdentificador(): boolean {

        const patron = /^[A-H]{2}[0-9]{2}[I-Z]{2}$/;

        return patron.test(this.identificadorDeEnvio);
    }
}

const listaEnvios: Envio[] = [new Envio("patata", 28397235n, 34, true), new Envio("zanahoria", 8965n, 100, false), new Envio("manzana", 34643n, 567, true)];

listaEnvios.forEach(envio => {
    console.log(envio.calcularIva());
});