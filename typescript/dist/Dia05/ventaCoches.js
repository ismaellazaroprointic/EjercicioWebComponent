"use strict";
class RuedaT {
    constructor(coste) {
        this.coste = coste;
    }
    damePrecio() {
        return this.coste;
    }
}
class Carroceria {
    constructor(coste) {
        this.coste = coste;
    }
    damePrecio() {
        return this.coste;
    }
}
class Volante {
    constructor(coste) {
        this.coste = coste;
    }
    damePrecio() {
        return this.coste;
    }
}
class CocheT {
    constructor(ruedas, carroceria, volante) {
        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.volante = volante;
    }
    damePrecio() {
        let ruedasValor = 0;
        this.ruedas.forEach(rueda => ruedasValor += rueda.damePrecio());
        return ruedasValor + this.carroceria.damePrecio() + this.volante.damePrecio();
    }
}
class Concesionario {
    constructor(listaDeCoches) {
        this.listaDeCoches = listaDeCoches;
    }
    damePrecio() {
        let precio = 0;
        this.listaDeCoches.forEach(coche => precio += coche.damePrecio());
        return precio;
    }
}
const concesionarioPrincipal = new Concesionario([]);
const cochePrimero = new CocheT([new RuedaT(50), new RuedaT(50), new RuedaT(50), new RuedaT(50)], new Carroceria(780), new Volante(170));
const cocheSegundo = new CocheT([new RuedaT(80), new RuedaT(20), new RuedaT(100), new RuedaT(410)], new Carroceria(1000), new Volante(456));
concesionarioPrincipal.listaDeCoches.push(cochePrimero);
concesionarioPrincipal.listaDeCoches.push(cocheSegundo);
console.log("Precio del primer coche: " + concesionarioPrincipal.listaDeCoches[0].damePrecio());
console.log("Precio del segundo coche: " + concesionarioPrincipal.listaDeCoches[1].damePrecio());
console.log("Precio del concesionario: " + concesionarioPrincipal.damePrecio());
//Segunda manera, solo con interfaces e injeccion de objetos
