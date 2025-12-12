// src/domain/units/artillery.ts
import { BaseUnit } from './baseUnit';
import { IDestructor, IMovil, IBlindado } from '../capabilities';

// Cañón Antiaéreo
// Velocidad: 1 | Blindaje: 0 | Potencia de Fuego: 22 | Precio: 1100
export class CanonAntiaereo
  extends BaseUnit
  implements IMovil, IDestructor
{
  constructor() {
    super({
      nombre: 'Cañón Antiaéreo',
      velocidad: 1,
      blindaje: 0,
      potenciaFuego: 22,
      precio: 1100,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}

// Torpedero móvil
// Velocidad: 3 | Blindaje: 2 | Potencia de Fuego: 19 | Precio: 1350
export class TorpederoMovil
  extends BaseUnit
  implements IMovil, IBlindado, IDestructor
{
  constructor() {
    super({
      nombre: 'Torpedero móvil',
      velocidad: 3,
      blindaje: 2,
      potenciaFuego: 19,
      precio: 1350,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}

// Cañón
// Velocidad: 0 | Blindaje: 0 | Potencia de Fuego: 14 | Precio: 1100
export class Canon extends BaseUnit implements IDestructor {
  constructor() {
    super({
      nombre: 'Cañón',
      velocidad: 0,
      blindaje: 0,
      potenciaFuego: 14,
      precio: 1100,
    });
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}
