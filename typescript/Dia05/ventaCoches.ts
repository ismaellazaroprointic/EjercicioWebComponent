interface Pieza {
    coste: number;
}

interface IValorable {
    damePrecio(): number;
}

class RuedaT implements IValorable, Pieza{
    coste: number;
    constructor(coste: number){
        this.coste = coste;
    }
    damePrecio(): number{
        return this.coste;
    }
}

class Carroceria implements IValorable, Pieza{
    coste: number
    constructor(coste: number){
        this.coste = coste;
    }
    damePrecio(): number{
        return this.coste;
    }
}

class Volante implements IValorable, Pieza{
    coste: number;
    constructor(coste: number){
        this.coste = coste;
    }
    damePrecio(): number{
        return this.coste;
    }
}


class CocheT implements IValorable{

    ruedas: RuedaT[];
    carroceria: Carroceria;
    volante: Volante;

    constructor(ruedas: RuedaT[], carroceria: Carroceria, volante: Volante){
        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.volante = volante;
    }

    damePrecio(): number {
        let ruedasValor: number = 0;
        this.ruedas.forEach(rueda => ruedasValor += rueda.damePrecio())
        return ruedasValor + this.carroceria.damePrecio() + this.volante.damePrecio();
    }

}

class Concesionario implements IValorable{

    listaDeCoches: CocheT[];

    constructor(listaDeCoches: CocheT[]){
        this.listaDeCoches = listaDeCoches;
    }

    damePrecio(): number {
        let precio: number = 0;
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