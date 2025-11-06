interface IArmable {
    dameFuerzaDeAtaque(): number;
}

class Katana implements IArmable {

    dameFuerzaDeAtaque(): number {
        return 50;
    }
}

class Shuriken implements IArmable {

    dameFuerzaDeAtaque(): number {
        return 10;
    }
}

class Kunai implements IArmable {

    dameFuerzaDeAtaque(): number {
        return 15;
    }
}

class Kama implements IArmable {

    dameFuerzaDeAtaque(): number {
        return 5;
    }
}

interface IDefendible {

    dameFuerzaDeDefensa(): number;
}

class EscudoTriangular implements IDefendible {

    dameFuerzaDeDefensa(): number {
        return 30;
    }
}

class EscudoCuadrado implements IDefendible {

    dameFuerzaDeDefensa(): number {
        return 40;
    }
}

interface Armadura {

    protege(): number;
}

class ArmaduraPaja implements Armadura{

    protege(): number {
        return 10;
    }
}

class ArmaduraCuero implements Armadura {

    protege(): number {
        return 30;
    }
}

class ArmaduraPlacas implements Armadura {
    
    protege(): number {
        return 50;
    }
}

interface Movimiento {

    accion(): string;
}

class Andar implements Movimiento {

    accion(): string {
        return "Ando lentamente";
    }
}

class Correr implements Movimiento {

    accion(): string {
        return "Corro a toda leche";
    }
}

class Saltar implements Movimiento {

    accion(): string {
        return "Salto alto";
    }
}

class Nadar implements Movimiento {

    accion(): string {
        return "Nado a velocidad constante";
    }
}

enum Tipo {Genin,Chunin,Jounin};

class Ninja {

    ataque: IArmable;
    defensa: IDefendible;
    armadura: Armadura;
    movimiento: Movimiento;

    constructor(ataque: IArmable, defensa: IDefendible, armadura: Armadura, movimiento: Movimiento) {

        this.ataque = ataque;
        this.defensa = defensa;
        this.armadura = armadura;
        this.movimiento = movimiento;
    }



}

let ninja1 = new Ninja(new Katana(), new EscudoCuadrado(), new ArmaduraCuero(), new Saltar());