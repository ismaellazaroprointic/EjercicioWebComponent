// src/domain/units/infantry.ts
import { BaseUnit } from './baseUnit';
import { IBlindado, IDestructor, IMovil } from '../capabilities';

// Infantería Básica
// Velocidad: 6 | Blindaje: 0 | Potencia de Fuego: 7 | Precio: 250
export class InfanteriaBasica
  extends BaseUnit
  implements IMovil, IDestructor
{
  constructor() {
    super({
      nombre: 'Infantería Básica',
      velocidad: 6,
      blindaje: 0,
      potenciaFuego: 7,
      precio: 250,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}

// Ametrallador
// Velocidad: 4 | Blindaje: 0 | Potencia de Fuego: 10 | Precio: 400
export class Ametrallador
  extends BaseUnit
  implements IMovil, IDestructor
{
  constructor() {
    super({
      nombre: 'Ametrallador',
      velocidad: 4,
      blindaje: 0,
      potenciaFuego: 10,
      precio: 400,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}

// Sanitario
// Velocidad: 7 | Blindaje: 5 | Potencia de Fuego: 0 | Precio: 500
export class Sanitario
  extends BaseUnit
  implements IMovil, IBlindado
{
  constructor() {
    super({
      nombre: 'Sanitario',
      velocidad: 7,
      blindaje: 5,
      potenciaFuego: 0,
      precio: 500,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }
}
