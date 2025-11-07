class Coche {

    matricula: string;
    potencia: number;
    velocidad: number;
    modelo: string;

    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {

        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }

    imprime(): string {
        return `El coche con matricula ${this.matricula} de modelo ${this.modelo}, tiene una velocidad de ${this.velocidad} para una potencia de ${this.potencia}`;
    }

    velocidadCrucer(): number {
        return this.velocidad / this.potencia;
    }
}

const coche1 = new Coche("3463KR", 100, 180, "Audi A4");
const coche2 = new Coche("0946ED", 70, 200, "Renault Patata");
const coche3 = new Coche("0096OL", 4, 350, "Coche Magico");

console.log(coche1.imprime() + "\nSu velocidad crucero es: " + coche1.velocidadCrucer());
console.log(coche2.imprime() + "\nSu velocidad crucero es: " + coche2.velocidadCrucer());
console.log(coche3.imprime() + "\nSu velocidad crucero es: " + coche3.velocidadCrucer());

let velocidadMedia = (coche1.velocidad + coche2.velocidad + coche3.velocidad) / 3;

console.log("La velocidad media de los vehiculos es: " + velocidadMedia);

