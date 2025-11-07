"use strict";
class Katana {
    dameFuerzaDeAtaque() {
        return 50;
    }
}
class Shuriken {
    dameFuerzaDeAtaque() {
        return 10;
    }
}
class Kunai {
    dameFuerzaDeAtaque() {
        return 15;
    }
}
class Kama {
    dameFuerzaDeAtaque() {
        return 5;
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
class ArmaduraPaja {
    protege() {
        return 10;
    }
}
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
class Andar {
    accion() {
        return "Ando lentamente";
    }
}
class Correr {
    accion() {
        return "Corro a toda leche";
    }
}
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
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Genin"] = 0] = "Genin";
    Tipo[Tipo["Chunin"] = 1] = "Chunin";
    Tipo[Tipo["Jounin"] = 2] = "Jounin";
})(Tipo || (Tipo = {}));
;
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
let ninja1 = new Ninja(new Katana(), new EscudoCuadrado(), new ArmaduraCuero(), new Saltar());
let ninja2 = new Ninja(new Kunai(), new EscudoTriangular(), new ArmaduraPlacas(), new Nadar());
console.log("El primer ninja tiene " + ninja1.capacidadDefensa() + " puntos de defensa.");
console.log("El primer ninja tiene " + ninja2.capacidadDefensa() + " puntos de defensa.");
