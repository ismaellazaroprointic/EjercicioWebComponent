/* Manolo, quiere un programa porque tiene una tienda de repuestos online y necesita una jerarquía de clases para llevarlo a cabo.
Manolo, junto con el equipo de desarrollo determinan que todos los repuestos deberán de devolver un Identificador y el precio de dicho repuesto. 
Los repuestos que tiene Manolo en su tienda son los siguientes:
Repuesto: Clase abstracta que tendrá dos métodos abstractos damePrecio(), dameIdentificador()

Rueda:
	El precio de la rueda será de 200 euros.
	cuando se le pida el identificador devolverá "Soy una rueda con identificador {identificador}
Retrovisor:
	El precio del retrovisor será de 50 euros.
	cuando se le pida el identificador devolverá "Soy un retrovisor con identificador {identificador}
Luz cruce:
	El precio de la luz de cruce es de 60 euros.
	Cuando se le pida el identificador devolverá "Soy una luz de cruce y mi idenficador es {identificador}

Crear un array de Repuestos y añadir dos ruedas, dos retrovisores y dos luces de cruce y calcular el precio total de esos repuestos.*/

abstract class Repuesto {
  readonly identificador: string;
  readonly precio: number;
  constructor(identificador: string, precio: number) {
    this.identificador = identificador;
    this.precio = precio;
  }
  abstract damePrecio(): number;
  abstract dameIdentificador(): string;
}
class Rueda extends Repuesto {
  constructor(identificador: string, precio: number = 200) {
    super(identificador, precio);
  }
  damePrecio(): number {
    if (this.precio === 200){
        return this.precio;
    } else {
        return 200;
    }
  }
  dameIdentificador(): string {
    return "Soy una rueda con identificador " + this.identificador;
  }
}
class Retrovisor extends Repuesto {
  constructor(identificador: string, precio: number = 50) {
    super(identificador, precio);
  }
  damePrecio(): number {
    if (this.precio === 50){
        return this.precio;
    } else {
        return 50;
    }
  }
  dameIdentificador(): string {
    return "Soy un retrovisor con identificador " + this.identificador;
  }
}
class LuzCruce extends Repuesto {
  constructor(identificador: string, precio: number = 60) {
    super(identificador, precio);
  }
  damePrecio(): number {
    if (this.precio === 60){
        return this.precio;
    } else {
        return 60;
    }
  }
  dameIdentificador(): string {
    return "Soy una luz de cruce y mi identificador es " + this.identificador;
  }
}

let rueda1 = new Rueda("1234567890", 200);
let rueda2 = new Rueda("1234567891", 200);
let retrovisor1 = new Retrovisor("1234567892", 50);
let retrovisor2 = new Retrovisor("1234567893", 50);
let luzCruce1 = new LuzCruce("1234567894", 60);
let luzCruce2 = new LuzCruce("1234567895", 60);

let arrayRepuestos: Repuesto[] = [
  rueda1,
  rueda2,
  retrovisor1,
  retrovisor2,
  luzCruce1,
  luzCruce2,
];

let precioTotal = 0;

arrayRepuestos.forEach(repuesto => {
    precioTotal += repuesto.damePrecio();
    console.log(repuesto.dameIdentificador() + " y mi precio es: " + repuesto.damePrecio());
});

console.log("El precio total de todos los repuestos será: " + precioTotal);

