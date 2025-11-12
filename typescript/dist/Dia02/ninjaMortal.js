"use strict";
class Katana {
    dameFuerzaDeAtaque() {
        return 50;
    }
}
/* class Shuriken implements IArmable {

    dameFuerzaDeAtaque(): number {
        return 10;
    }
} */
class Kunai {
    dameFuerzaDeAtaque() {
        return 15;
    }
}
class EscudoTriangular {
    dameFuerzaDeDefensa() {
        return 30;
    }
}
class EscudoCuadrado {
    dameFuerzaDeDefensa() {
        return 40;
    }
}
/* class ArmaduraPaja implements Armadura{

    protege(): number {
        return 10;
    }
} */
class ArmaduraCuero {
    protege() {
        return 30;
    }
}
class ArmaduraPlacas {
    protege() {
        return 50;
    }
}
/* class Andar implements Movimiento {

    accion(): string {
        return "Ando lentamente";
    }
} */
/* class Correr implements Movimiento {

    accion(): string {
        return "Corro a toda leche";
    }
} */
class Saltar {
    accion() {
        return "Salto alto";
    }
}
class Nadar {
    accion() {
        return "Nado a velocidad constante";
    }
}
class Ninja {
    constructor(ataque, defensa, armadura, movimiento) {
        this.ataque = ataque;
        this.defensa = defensa;
        this.armadura = armadura;
        this.movimiento = movimiento;
    }
    capacidadArmadura() {
        return this.armadura.protege();
    }
    capacidadDefensa() {
        return this.defensa.dameFuerzaDeDefensa();
    }
}
const ninja1 = new Ninja(new Katana(), new EscudoCuadrado(), new ArmaduraCuero(), new Saltar());
const ninja2 = new Ninja(new Kunai(), new EscudoTriangular(), new ArmaduraPlacas(), new Nadar());
console.log("El primer ninja tiene " + ninja1.capacidadDefensa() + " puntos de defensa.");
console.log("El primer ninja tiene " + ninja2.capacidadDefensa() + " puntos de defensa.");
