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
const salto = new Saltar();
console.log(salto.accion());
